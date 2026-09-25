import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { site } from "../../config/site";

// Contact form endpoint: checks Cloudflare Turnstile, then emails the inquiry to the
// studio inbox through Cloudflare Email Service. Runs on demand; every other page is static.
export const prerender = false;

type SendEmail = {
    send(message: {
        to: string;
        from: { email: string; name?: string };
        replyTo?: { email: string; name?: string };
        subject: string;
        text: string;
        html: string;
    }): Promise<{ messageId: string }>;
};

type ContactEnv = {
    EMAIL?: SendEmail;
    TURNSTILE_SECRET_KEY?: string;
};

// Cloudflare's always-pass test secret, used until a real TURNSTILE_SECRET_KEY secret is set.
const TEST_SECRET = "1x0000000000000000000000000000000AA";

const LIMITS = { name: 120, email: 200, company: 160, service: 120, message: 5000 };

const json = (body: object, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const escape = (value: string) =>
    value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function verifyTurnstile(token: string, secret: string, ip: string | null) {
    const body = new FormData();
    body.append("secret", secret);
    body.append("response", token);
    if (ip) body.append("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
    const data = (await res.json().catch(() => ({}))) as { success?: boolean };
    return data.success === true;
}

export const POST: APIRoute = async ({ request }) => {
    const wantsJson = (request.headers.get("Accept") ?? "").includes("application/json");
    const done = (ok: boolean, error?: string, status = ok ? 200 : 400) => {
        if (wantsJson) return json(ok ? { ok } : { ok, error }, status);
        // Without JavaScript the browser posted the form directly: send it back to the form.
        const back = new URL(request.headers.get("Referer") ?? "/", request.url);
        back.searchParams.set("sent", ok ? "1" : "0");
        back.hash = "contact";
        return Response.redirect(back.toString(), 303);
    };

    let form: FormData;
    try {
        form = await request.formData();
    } catch {
        return done(false, "invalid_body");
    }
    const field = (name: keyof typeof LIMITS) => String(form.get(name) ?? "").trim().slice(0, LIMITS[name]);

    // Honeypot: real people never tick the hidden checkbox. Pretend it worked.
    if (form.get("botcheck")) return done(true);

    const name = field("name");
    const email = field("email");
    const company = field("company");
    const service = field("service");
    const message = field("message");
    const lang = form.get("language") === "es" ? "es" : "en";

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return done(false, "invalid_fields");

    const cf = env as unknown as ContactEnv;
    const secret = cf.TURNSTILE_SECRET_KEY || TEST_SECRET;
    const token = String(form.get("cf-turnstile-response") ?? "");
    const human = token && (await verifyTurnstile(token, secret, request.headers.get("CF-Connecting-IP")));
    if (!human) return done(false, "captcha_failed", 403);

    if (!cf.EMAIL) {
        console.error("contact: EMAIL binding is not configured");
        return done(false, "email_unavailable", 503);
    }

    const rows: [string, string][] = [
        ["Name", name],
        ["Email", email],
        ["Company", company || "—"],
        ["Service", service || "—"],
        ["Language", lang === "es" ? "Spanish" : "English"],
    ];
    const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}\n`;
    const html = `<table cellpadding="4" style="font:14px/1.5 system-ui,sans-serif;border-collapse:collapse">${rows
        .map(([k, v]) => `<tr><td style="color:#686d75;padding-right:16px">${k}</td><td>${escape(v)}</td></tr>`)
        .join("")}</table><p style="font:15px/1.6 system-ui,sans-serif;white-space:pre-wrap">${escape(message)}</p>`;

    try {
        await cf.EMAIL.send({
            to: site.email,
            from: site.formFrom,
            replyTo: { email, name },
            subject: `New inquiry: ${service || "Contact"} — ${name}`,
            text,
            html,
        });
    } catch (error) {
        console.error("contact: send failed", error);
        return done(false, "send_failed", 502);
    }

    return done(true);
};

export const ALL: APIRoute = () => json({ ok: false, error: "method_not_allowed" }, 405);
