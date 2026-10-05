#!/usr/bin/env node
// Drafts personalized opening messages for realtor-team listening interviews (Mom Test).
// Nothing is sent: Víctor reviews and sends every message himself.
//
// Usage:
//   node scripts/outreach/draft.mjs          # drafts from the CSV + cached site signals
//   node scripts/outreach/draft.mjs --fetch  # re-check each team's homepage first (one GET per site)
//   node scripts/outreach/draft.mjs --fetch-failed  # re-check only sites whose last check failed (not explicit blocks)
//
// Input:  docs/research/realtor-lead-response/lista-equipos.csv
// Output: docs/research/realtor-lead-response/outreach-drafts.md
//         docs/research/realtor-lead-response/outreach-drafts.csv  (log columns are kept between runs)
//         docs/research/realtor-lead-response/site-signals.json    (cache of the last homepage check)
//
// Crawling rules: one request per site (the homepage), 12 s timeout, an identifying User-Agent,
// a pause between sites, no retries, no logins. Sites that block are skipped and reported.
// Only business-level public data is used; no personal phones or addresses are read or written.
// Not part of the site build.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const DIR = join(ROOT, "docs/research/realtor-lead-response");
const IN_CSV = join(DIR, "lista-equipos.csv");
const OUT_MD = join(DIR, "outreach-drafts.md");
const OUT_CSV = join(DIR, "outreach-drafts.csv");
const CACHE = join(DIR, "site-signals.json");

const USER_AGENT = "InvntioOutreachResearch/1.0 (+https://invntio.com; one homepage request per site, no login)";
const TIMEOUT_MS = 12_000;
const PAUSE_MS = 1_500;
const MAX_BYTES = 2_000_000;

// Brokerage portals and social sites: not the team's own site, and they block bots. Never fetched.
const SKIP_HOSTS = /(zillow|facebook|instagram|linkedin|coldwellbankerhomes|century21|elliman|houlihanlawrence)\.com/i;

// Markets with many Spanish-speaking buyers (used only to note "no Spanish on the homepage").
// Matched against the team's city only, not the wider market name.
const BILINGUAL_MARKETS =
    /philadelphia|allentown|reading|bethlehem|fort lee|bayonne|union city|elizabeth|passaic|paterson|kearny|perth amboy|jackson heights|east elmhurst|corona|queens|yonkers|bronx/i;

// Facebook's customer chat plugin was retired in 2024, so leftover fb-customerchat code is not counted as chat.

// Columns Víctor fills in by hand; kept when the script is re-run.
const LOG_COLUMNS = ["sent_on", "channel_used", "follow_up_on", "reply", "call_booked", "notes"];

const FOLLOW_UP_EN =
    "Hi [name], just bringing this back up in case it got buried. Even 15 minutes of your perspective would help a lot, and if now is a bad time, no problem at all.";
const FOLLOW_UP_ES =
    "Hola [nombre], le escribo de nuevo por si se le pasó mi mensaje. Aunque sean 15 minutos, su experiencia me ayudaría mucho; y si ahora no es buen momento, no se preocupe.";

// ---------- CSV ----------

function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let quoted = false;
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (quoted) {
            if (c === '"' && text[i + 1] === '"') {
                field += '"';
                i++;
            } else if (c === '"') quoted = false;
            else field += c;
        } else if (c === '"') quoted = true;
        else if (c === ",") {
            row.push(field);
            field = "";
        } else if (c === "\n" || c === "\r") {
            if (c === "\r" && text[i + 1] === "\n") i++;
            row.push(field);
            field = "";
            if (row.some((f) => f !== "")) rows.push(row);
            row = [];
        } else field += c;
    }
    if (field !== "" || row.length) {
        row.push(field);
        rows.push(row);
    }
    const [header, ...body] = rows;
    return body.map((r) => Object.fromEntries(header.map((h, i) => [h, (r[i] ?? "").trim()])));
}

const csvCell = (v) => {
    const s = String(v ?? "");
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const toCsv = (cols, rows) => [cols.join(","), ...rows.map((r) => cols.map((c) => csvCell(r[c])).join(","))].join("\n") + "\n";

// ---------- helpers ----------

const isNd = (v) => !v || /^n\/d/i.test(v) || /^no visto/i.test(v);
const urls = (v) => (v.match(/https?:\/\/[^\s;,)]+/g) ?? []).map((u) => u.replace(/[.]+$/, ""));
const firstUrl = (v) => urls(v)[0] ?? "";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pickSource = (row, re) => urls(row.fuente_url).find((u) => re.test(u)) ?? urls(row.fuente_url)[0] ?? row.sitio_web;

function htmlToText(html) {
    return html
        .replace(/<!--[\s\S]*?-->/g, " ")
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&#8211;|&ndash;/g, "–")
        .replace(/\s+/g, " ");
}

// ---------- site check ----------

const PLATFORMS = [
    ["Ylopo", /ylopo/i],
    ["BoomTown", /boomtownroi|boomtown/i],
    ["Lofty", /[\w.-]*lofty\.com|chime\.me|chimecdn/i],
    ["kvCORE/BoldTrail", /kvcore|boldtrail|insiderealestate\.com/i],
    ["Real Geeks", /realgeeks/i],
    ["Sierra Interactive", /sierrainteractive|sierra-interactive|sierrastatic/i],
];
const OTHER_PLATFORMS = [
    ["Brivity (PLACE)", /brivity/i],
    ["Luxury Presence", /luxurypresence/i],
];
const CHAT_VENDORS = [
    ["Intercom", /widget\.intercom\.io|intercomSettings/i],
    ["Drift", /js\.driftt\.com/i],
    ["tawk.to", /embed\.tawk\.to/i],
    ["LiveChat", /cdn\.livechatinc\.com/i],
    ["Zendesk chat", /static\.zdassets\.com\/ekr|zopim/i],
    ["HubSpot chat", /js\.usemessages\.com|hubspot-messages-iframe/i],
    ["Tidio", /code\.tidio\.co/i],
    ["Crisp", /client\.crisp\.chat/i],
    ["Olark", /static\.olark\.com/i],
    ["Podium", /connect\.podium\.com|podium-widget/i],
    ["Birdeye webchat", /birdeye\.com\/embed|birdeye-webchat/i],
    ["Freshchat", /wchat\.freshchat\.com/i],
    ["Smartsupp", /smartsuppchat/i],
    ["LeadConnector", /widgets\.leadconnectorhq\.com|leadconnectorhq\.com\/chat-widget/i],
];

const OFFICE_HOURS = [
    /\b(?:office|business)\s+hours?\b[^.|]{0,80}/i,
    /\b(?:mon(?:day)?)\s*(?:-|–|to|through|thru)\s*(?:fri(?:day)?|sat(?:urday)?|sun(?:day)?)\b[\s:,]*\d{1,2}(?::\d{2})?\s*(?:am|a\.m\.)?\s*(?:-|–|to)\s*\d{1,2}(?::\d{2})?\s*(?:pm|p\.m\.)/i,
];

function detectSignals(html, finalUrl) {
    const text = htmlToText(html);
    const s = {};
    const add = (key, detail) => (s[key] = { detail, source: finalUrl });

    const chat = CHAT_VENDORS.find(([, re]) => re.test(html));
    if (chat) add("chat_widget", `chat widget (${chat[0]}) in the page code`);

    const waLink = html.match(/(?:wa\.me\/\d+|api\.whatsapp\.com\/send\?phone=|whatsapp:\/\/send\?phone=)/i);
    if (waLink) add("whatsapp", "WhatsApp contact link");

    if (/href=["']sms:/i.test(html)) add("sms", "text-message (sms:) link");
    else {
        const m = text.match(/\b(call or text|text us|text me|text the team)\b/i);
        if (m) add("sms", `"${m[0]}" on the homepage`);
    }

    // Ylopo and Brivity load their own chat or text widgets by JavaScript; generic chat markup is also treated as "maybe chat".
    const jsChatPlatform = /ylopo|brivity|chat[-_]?widget|chatbot|livechat/i.test(html);
    const contactForm = /<form[\s\S]{0,6000}?(type=["']?email|name=["'][^"']*e-?mail|<textarea)[\s\S]*?<\/form>/i.test(html);
    if (contactForm && !jsChatPlatform && !s.chat_widget && !s.whatsapp && !s.sms) add("contact_form_only", "contact form on the homepage; no chat, WhatsApp or text option in the page code");

    const esPage = /<html[^>]+lang=["']es/i.test(html) || /hreflang=["']es/i.test(html) || /href=["'][^"']*\/(es|espanol|español)\/?["']/i.test(html) || /casas-en-venta/i.test(html);
    const esPhrase = text.match(/se habla español|hablamos español|en español|habla español|casas en venta/i);
    const speaksSpanish = text.match(/spanish[- ]speaking|speaks? spanish|fluent in spanish|bilingual \(spanish\)|\bspanish\b/i);
    if (esPage || esPhrase) add("spanish_content", esPhrase ? `Spanish text on the homepage ("${esPhrase[0]}")` : "Spanish-language pages linked from the homepage");
    else if (speaksSpanish) add("spanish_content", `homepage mentions Spanish ("${speaksSpanish[0]}")`);

    for (const re of OFFICE_HOURS) {
        const m = text.match(re);
        if (m && /\d|all day/i.test(m[0])) {
            add("office_hours", `"${m[0].trim().slice(0, 90)}"`);
            break;
        }
    }

    const platforms = PLATFORMS.filter(([, re]) => re.test(html)).map(([n]) => n);
    if (platforms.length) add("lead_platform", platforms.join(", "));
    const others = OTHER_PLATFORMS.filter(([, re]) => re.test(html)).map(([n]) => n);
    if (others.length) add("other_platform", others.join(", "));

    if (/zillow/i.test(html)) {
        const d = /zillow\s+(flex|preferred)/i.test(text)
            ? "mentions Zillow Flex/Preferred"
            : /premier agent/i.test(text)
              ? "mentions Zillow Premier Agent"
              : /zillow\.com\/profile/i.test(html)
                ? "links to a Zillow profile"
                : "mentions Zillow";
        add("zillow", d);
    }
    return s;
}

function looksBlocked(status, html) {
    if ([401, 403, 406, 429, 503].includes(status)) return `HTTP ${status}`;
    const title = (html.match(/<title[^>]*>([^<]*)/i)?.[1] ?? "").trim();
    if (/just a moment|attention required|access denied|security check|are you a robot/i.test(title) || /cf-chl-|incapsula incident|sucuri website firewall/i.test(html.slice(0, 20000)))
        return "bot challenge page";
    return "";
}

async function checkSite(url) {
    const checked_at = new Date().toISOString().slice(0, 10);
    if (!url) return { status: "no website in CSV", checked_at };
    if (SKIP_HOSTS.test(url)) return { status: "skipped (brokerage portal or social site, not fetched)", url, checked_at };
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
        const res = await fetch(url, {
            redirect: "follow",
            signal: ctrl.signal,
            headers: { "User-Agent": USER_AGENT, Accept: "text/html,application/xhtml+xml" },
        });
        const buf = Buffer.from(await res.arrayBuffer()).subarray(0, MAX_BYTES);
        const html = buf.toString("utf8");
        const blocked = looksBlocked(res.status, html);
        if (blocked) return { status: `blocked (${blocked})`, url, final_url: res.url, checked_at };
        if (!res.ok) return { status: `error (HTTP ${res.status})`, url, final_url: res.url, checked_at };
        return { status: "ok", url, final_url: res.url, checked_at, signals: detectSignals(html, res.url) };
    } catch (e) {
        return { status: `unreachable (${e.name === "AbortError" ? "timeout" : e.cause?.code ?? e.message})`, url, checked_at };
    } finally {
        clearTimeout(timer);
    }
}

// ---------- signals from the research CSV ----------

function csvSignals(row) {
    // Drop negated phrases so "sin mención a Zillow" or "no tiene chat" don't count as signals.
    const buy = row.senales_compra_leads.replace(/sin menci[oó]n a [^;,]*/gi, "");
    const slow = row.senales_respuesta_lenta.replace(/(sin|no tiene) chat[^;,]*/gi, "");
    const s = {};
    const add = (key, detail, source) => (s[key] = { detail, source, from: "research CSV" });

    const z = buy.match(/zillow\s+(flex|preferred|partner)|zillow real estate agent|zillow leads/i);
    if (z && !/no confirmado/i.test(buy)) {
        const kind = /preferred/i.test(z[0]) ? "Zillow Preferred" : /partner/i.test(z[0]) ? "Zillow partner" : "Zillow Flex";
        const hasFlex = /zillow flex/i.test(buy);
        add("zillow_hiring", `job posts / recruiting for ${hasFlex ? "Zillow Flex" : kind} leads`, pickSource(row, /indeed|tallo|glassdoor|bebee|ziprecruiter|join|careers|realtypostings/i));
        s.zillow_hiring.kind = hasFlex ? "Zillow Flex" : kind;
    }
    const plat = PLATFORMS.map(([n]) => n).find((n) => new RegExp(n.split("/")[0].replace(" ", "\\s*"), "i").test(buy));
    if (plat) add("lead_platform", `${plat} (per research)`, row.sitio_web || firstUrl(row.fuente_url));
    if (/PLACE/.test(row.nombre_equipo_o_agente + row.brokerage + buy) || /brivity/i.test(slow)) add("other_platform", "PLACE / Brivity", row.sitio_web);
    if (/tiene chat|chat en vivo/i.test(slow + " " + row.nota_probabilidad)) add("chat_widget", "live chat on the website (per research)", row.sitio_web);
    if (/tiene WhatsApp/i.test(slow)) add("whatsapp", "WhatsApp offered (per research)", row.sitio_web);
    if (/horario/i.test(slow)) add("office_hours", "office hours listed as Mon–Fri 9–5 (per directories)", row.sitio_web);
    if (s.zillow_hiring) {
        // already covered by the hiring signal
    } else if (/premier agent/i.test(buy)) add("zillow", "Zillow Premier Agent (per research)", pickSource(row, /zillow|diciccosells|clifflewis/i));
    else if (/reseñas.*zillow|zillow.*reseñas/i.test(buy)) add("zillow", "team profile with reviews on Zillow (per research)", pickSource(row, /zillow/i));
    else if (/zillow/i.test(buy)) add("zillow", "Zillow profile linked (per research)", pickSource(row, /zillow/i));
    if (/join|careers|reclut|recluta/i.test(buy) && /lead/i.test(buy) && !s.zillow_hiring) add("join_leads", "join/careers page talks about providing leads to agents", pickSource(row, /join|careers/i));
    if (/valuaci[oó]n|valuation|home value|home valuator/i.test(buy + slow)) add("valuation", "home valuation page", row.sitio_web || firstUrl(row.fuente_url));
    if (/páginas en español/i.test(buy + row.bilingue)) add("spanish_content", "Spanish-language pages (per research)", pickSource(row, /casas|espanol/i));
    if (/^RealTrends 2026/i.test(row.produccion_publica)) add("realtrends", "listed in RealTrends 2026 team rankings", pickSource(row, /realtrends/i));
    return s;
}

// ---------- opener ----------

const shortCity = (row) => row.ciudad.split(/[/(]/)[0].trim();

function chooseObservation(row, site, fromCsv) {
    const web = site?.signals ?? {};
    const get = (k) => web[k] ?? fromCsv[k];
    const city = shortCity(row);
    const bilingualCsv = /^s[ií]/i.test(row.bilingue);

    const options = [
        ["zillow_hiring", () => fromCsv.zillow_hiring && {
            en: `I saw your team is hiring agents to work ${fromCsv.zillow_hiring.kind} leads`,
            es: `Vi que su equipo está contratando agentes para atender leads de ${fromCsv.zillow_hiring.kind}`,
        }],
        ["lead_platform", () => {
            const p = get("lead_platform");
            if (!p) return null;
            const name = p.detail.replace(/ \(per research\)/, "").split(",")[0];
            return { en: `I noticed your website is built on ${name}, so you clearly put real effort into bringing in new inquiries`, es: `Vi que su web está hecha con ${name}, así que se nota que invierten en atraer consultas nuevas` };
        }],
        ["chat_widget", () => get("chat_widget") && { en: "I noticed you offer chat on your website", es: "Vi que ofrecen chat en su web" }],
        ["whatsapp", () => get("whatsapp") && { en: "I noticed you offer WhatsApp as a way to reach the team", es: "Vi que ofrecen WhatsApp para contactar al equipo" }],
        ["office_hours", () => {
            if (web.office_hours) return { en: "I noticed your website lists the office hours", es: "Vi que su web publica el horario de oficina" };
            if (fromCsv.office_hours) return { en: "I noticed your office is listed with Monday-to-Friday, 9-to-5 hours", es: "Vi que su oficina aparece con horario de lunes a viernes, de 9 a 5" };
            return null;
        }],
        ["no_spanish", () =>
            site?.status === "ok" && !web.spanish_content && !bilingualCsv && BILINGUAL_MARKETS.test(row.ciudad) && {
                en: `I noticed your homepage is English-only even though you work in ${city}, and I'm curious how Spanish-speaking inquiries get handled`,
                es: null,
            }],
        ["contact_form_only", () => web.contact_form_only && { en: "I noticed that, apart from the phone, the main way to reach you on your website is the contact form", es: "Vi que, aparte del teléfono, la forma principal de contactarlos en su web es el formulario" }],
        ["other_platform", () => {
            const p = get("other_platform");
            if (!p) return null;
            if (/PLACE/.test(row.nombre_equipo_o_agente + row.brokerage)) return { en: "I saw your team is powered by PLACE", es: "Vi que su equipo trabaja con PLACE" };
            if (/brivity/i.test(p.detail)) return { en: "I noticed your website runs on Brivity", es: "Vi que su web funciona con Brivity" };
            return null;
        }],
        ["spanish_content", () => get("spanish_content") && { en: "I saw that your team also works with clients in Spanish", es: "Vi que su equipo también atiende a clientes en español" }],
        ["zillow", () => {
            const zw = web.zillow;
            const zc = fromCsv.zillow;
            if (/premier agent/i.test(zw?.detail + zc?.detail)) return { en: "I saw your team presents itself as a Zillow Premier Agent", es: "Vi que su equipo se presenta como Zillow Premier Agent" };
            if (/reviews/i.test(zc?.detail)) return { en: "I came across your team's reviews on Zillow", es: "Vi las reseñas de su equipo en Zillow" };
            if (/links to a Zillow profile/i.test(zw?.detail)) return { en: "I noticed your site points people to your Zillow profile", es: "Vi que su web enlaza a su perfil de Zillow" };
            if (zc) return { en: "I came across your team on Zillow", es: "Vi a su equipo en Zillow" };
            return null;
        }],
        ["join_leads", () => fromCsv.join_leads && { en: "I saw on your join page that lead generation is a big part of how the team works", es: "Vi en su página para agentes que la generación de leads es parte central de cómo trabaja el equipo" }],
        ["valuation", () => get("valuation") && { en: `I came across your home valuation page while looking at teams in ${city}`, es: `Vi su página de valuación de casas mientras revisaba equipos de ${city}` }],
        ["realtrends", () => fromCsv.realtrends && { en: `I came across your team on the RealTrends 2026 rankings for ${row.estado}`, es: `Vi a su equipo en los rankings de RealTrends 2026 de ${row.estado}` }],
    ];
    for (const [key, fn] of options) {
        const o = fn();
        if (o) {
            const sig = key === "no_spanish" ? { source: site.final_url } : (web[key] ?? fromCsv[key]);
            return { key, ...o, source: sig?.source ?? row.sitio_web };
        }
    }
    return { key: "none", en: `I came across your team while looking at real estate teams in ${city}`, es: `Vi a su equipo mientras revisaba equipos inmobiliarios de ${city}`, source: row.sitio_web || firstUrl(row.fuente_url) };
}

function opener(obs, lang) {
    if (lang === "es")
        return `Hola [nombre], ${lowerFirst(obs.es)}. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?`;
    return `Hi [name], ${lowerFirst(obs.en)}. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?`;
}
const lowerFirst = (s) => (/^I\b/.test(s) ? s : s[0].toLowerCase() + s.slice(1));

// ---------- channel ----------

function channelFor(row) {
    const handles = row.instagram.match(/@[\w.]+/g) ?? [];
    const emails = [...new Set(Object.values(row).join(" ").match(/\b(?:office|info|hello|contact|team|admin)@[\w.-]+\.[a-z]{2,}\b/gi) ?? [])];
    const contact = firstUrl(row.pagina_contacto);
    const site = firstUrl(row.sitio_web);
    const options = [
        ...handles.map((h) => ({ type: "Instagram DM", value: h })),
        ...emails.map((e) => ({ type: "Email", value: e })),
        ...(contact ? [{ type: /facebook\.com/.test(contact) ? "Facebook page message" : "Contact page", value: contact }] : []),
        ...(!contact && site ? [{ type: "Website form", value: site }] : []),
    ];
    return { primary: options[0] ?? null, alternates: options.slice(1) };
}

// ---------- size filter ----------

function oversize(row) {
    const t = row.tamano_equipo;
    if (/mega|enterprise|51\+/i.test(t)) return t;
    const nums = [...t.matchAll(/(\d+)\+?\s*(?:agentes|agents)/gi)].map((m) => Number(m[1]));
    const approx = [...t.matchAll(/~(\d+)/g)].map((m) => Number(m[1]));
    if ([...nums, ...approx].some((n) => n > 20)) return t;
    return "";
}

// ---------- main ----------

const fetchSites = process.argv.includes("--fetch");
// --fetch-failed re-checks only sites whose last check failed for a reason other than an explicit block (HTTP 401/403/406/429/503).
const fetchFailed = process.argv.includes("--fetch-failed");
const rows = parseCsv(readFileSync(IN_CSV, "utf8"));
let cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, "utf8")) : {};

if (fetchSites) {
    const next = {};
    for (const [i, row] of rows.entries()) {
        const url = firstUrl(row.sitio_web);
        const result = await checkSite(url);
        next[row.nombre_equipo_o_agente] = result;
        console.log(`${String(i + 1).padStart(2)}/${rows.length} ${result.status.padEnd(14)} ${row.nombre_equipo_o_agente}`);
        if (result.status !== "no website in CSV" && !result.status.startsWith("skipped")) await sleep(PAUSE_MS);
    }
    cache = next;
    writeFileSync(CACHE, JSON.stringify(cache, null, 2) + "\n");
} else if (fetchFailed) {
    for (const row of rows) {
        const prev = cache[row.nombre_equipo_o_agente];
        if (!prev || prev.status === "ok" || /^(blocked \(HTTP|skipped|no website)/.test(prev.status)) continue;
        const result = await checkSite(firstUrl(row.sitio_web));
        cache[row.nombre_equipo_o_agente] = result;
        console.log(`${result.status.padEnd(14)} ${row.nombre_equipo_o_agente}`);
        await sleep(PAUSE_MS);
    }
    writeFileSync(CACHE, JSON.stringify(cache, null, 2) + "\n");
}

const previousLog = existsSync(OUT_CSV) ? Object.fromEntries(parseCsv(readFileSync(OUT_CSV, "utf8")).map((r) => [r.team, r])) : {};
const tierOrder = { Alta: 0, Media: 1, Baja: 2 };

const drafted = [];
const noChannel = [];
const excluded = [];

for (const row of rows) {
    const site = cache[row.nombre_equipo_o_agente];
    const fromCsv = csvSignals(row);
    const channel = channelFor(row);
    const obs = chooseObservation(row, site, fromCsv);
    const showsSpanish = /^s[ií]/i.test(row.bilingue) || !!site?.signals?.spanish_content || !!fromCsv.spanish_content;

    const signals = [];
    for (const [k, v] of Object.entries(site?.signals ?? {})) signals.push({ key: k, detail: v.detail, source: v.source, origin: `homepage check ${site.checked_at}` });
    for (const [k, v] of Object.entries(fromCsv)) if (!site?.signals?.[k]) signals.push({ key: k, detail: v.detail, source: v.source, origin: "research CSV" });
    if (/^s[ií]/i.test(row.bilingue) && !signals.some((s) => s.key === "spanish_content"))
        signals.push({ key: "spanish_content", detail: `bilingual per research: ${row.bilingue}`, source: row.sitio_web || firstUrl(row.fuente_url), origin: "research CSV" });

    const item = {
        row,
        tier: row.probabilidad_pago,
        team: row.nombre_equipo_o_agente,
        market: `${row.ciudad}, ${row.estado} (${row.mercado})`,
        channel,
        signals,
        obs,
        en: opener(obs, "en"),
        es: showsSpanish ? opener(obs.es ? obs : { ...obs, es: `Vi a su equipo mientras revisaba equipos inmobiliarios de ${shortCity(row)}` }, "es") : "",
        site,
        size: row.tamano_equipo,
    };
    const big = oversize(row);
    if (big) excluded.push({ ...item, reason: big });
    else if (!channel.primary) noChannel.push(item);
    else drafted.push(item);
}

const byTier = (a, b) => tierOrder[a.tier] - tierOrder[b.tier];
drafted.sort(byTier);
excluded.sort(byTier);
noChannel.sort(byTier);

// ----- CSV -----
const csvCols = ["n", "priority", "team", "market", "size", "channel_type", "channel", "alternate_channels", "opener_based_on", "observed_signals", "site_check", "opener_en", "opener_es", "follow_up_en", "follow_up_es", "status", ...LOG_COLUMNS];
const csvRow = (it, n, status) => {
    const prev = previousLog[it.team] ?? {};
    return {
        n,
        priority: it.tier,
        team: it.team,
        market: it.market,
        size: it.size,
        channel_type: it.channel.primary?.type ?? "",
        channel: it.channel.primary?.value ?? "",
        alternate_channels: it.channel.alternates.map((c) => `${c.type}: ${c.value}`).join(" | "),
        opener_based_on: `${it.obs.key} (${it.obs.source})`,
        observed_signals: it.signals.map((s) => `${s.key}: ${s.detail} [${s.source}; ${s.origin}]`).join(" | "),
        site_check: it.site ? `${it.site.status} ${it.site.checked_at}` : "not checked",
        opener_en: status === "draft" ? it.en : "",
        opener_es: status === "draft" ? it.es : "",
        follow_up_en: status === "draft" ? FOLLOW_UP_EN : "",
        follow_up_es: status === "draft" && it.es ? FOLLOW_UP_ES : "",
        status,
        ...Object.fromEntries(LOG_COLUMNS.map((c) => [c, prev[c] ?? ""])),
    };
};
let n = 0;
const csvRows = [
    ...drafted.map((it) => csvRow(it, ++n, "draft")),
    ...noChannel.map((it) => csvRow(it, "", "no public channel in CSV")),
    ...excluded.map((it) => csvRow(it, "", "excluded: over ~15 agents")),
];
writeFileSync(OUT_CSV, toCsv(csvCols, csvRows));

// ----- Markdown -----
const today = new Date().toISOString().slice(0, 10);
const checkedDates = [...new Set(Object.values(cache).map((c) => c.checked_at))].sort();
const blocked = rows.filter((r) => /^(blocked|unreachable|error)/.test(cache[r.nombre_equipo_o_agente]?.status ?? ""));
const skipped = rows.filter((r) => /^skipped/.test(cache[r.nombre_equipo_o_agente]?.status ?? ""));

const md = [];
md.push("# Outreach drafts: realtor lead-response interviews");
md.push("");
md.push(`Generated ${today} by \`node scripts/outreach/draft.mjs\` from \`lista-equipos.csv\`${checkedDates.length ? ` and a homepage check on ${checkedDates.join(", ")}` : ""}. **Nothing has been sent.** These are drafts for Víctor to review and send by hand. The goal is listening interviews (Mom Test), not sales.`);
md.push("");
md.push("## How to use this");
md.push("");
md.push("1. Before each send, open the team's site or profile and confirm the observation is still true (the script reads static HTML only, so a widget loaded by JavaScript can be missed).");
md.push("2. If a team shows few signals, check the Meta Ad Library by hand (public, search the team name) for active ads, and adjust the first sentence.");
md.push("3. Fill in `[name]` and replace `[Tue 4pm]` / `[Thu 11am]` with two real slots from your calendar.");
md.push("4. Send **at most 15 a day**, yourself, through the channel listed. No links, no attachments, no fake inquiries.");
md.push("5. Use the Spanish version only where it's given (the team shows Spanish); otherwise send the English one.");
md.push("6. Log every send and reply in `outreach-drafts.csv` (`sent_on`, `channel_used`, `follow_up_on`, `reply`, `call_booked`, `notes`); re-runs keep those columns.");
md.push("7. If there's no answer after 4–5 days, send the follow-up line **once**, then stop.");
md.push("8. When someone says yes, book 15 minutes and run `guion-entrevista.md`: listen, no product, no prices.");
md.push("9. After each call, add notes to the **Interview log** in `docs/sales/realtor-lead-response.md` (fields from section 3 of the script).");
md.push("10. To refresh the signals later, run `node scripts/outreach/draft.mjs --fetch` (one request per site, then the drafts are rewritten).");
md.push("");
md.push("### Follow-up (once, 4–5 days later)");
md.push("");
md.push(`> ${FOLLOW_UP_EN}`);
md.push("");
md.push(`> ${FOLLOW_UP_ES}`);
md.push("");
md.push("## How the drafts were made");
md.push("");
md.push("- **Sources:** the research CSV (each signal keeps its source URL) plus, when `--fetch` is used, one GET of each team's homepage with an identifying User-Agent and a 12-second timeout. Brokerage portals and social sites are not fetched. No logins, no forms submitted, no personal phones or addresses collected.");
md.push("- **Homepage signals checked:** chat widget, WhatsApp link, text/SMS option, contact form as the only channel, Spanish content, posted office hours, lead-gen platforms (Ylopo, BoomTown, Lofty, kvCORE/BoldTrail, Real Geeks, Sierra), Zillow mentions.");
md.push("- **First sentence:** the most specific true observation available, in this order: Zillow Flex/Preferred hiring, lead-gen platform, chat, WhatsApp, office hours, English-only homepage in a bilingual market, contact form only, PLACE, Spanish content, Zillow, recruiting with leads, home valuation page, RealTrends listing.");
md.push(`- **Excluded:** teams listed as Mega/Enterprise or with more than 20 agents (${excluded.length}), listed at the end. ${noChannel.length} more teams have no public channel in the CSV.`);
if (blocked.length || skipped.length) {
    md.push("");
    md.push("**Sites not read in the homepage check:**");
    md.push("");
    for (const r of [...blocked, ...skipped]) md.push(`- ${r.nombre_equipo_o_agente}: ${cache[r.nombre_equipo_o_agente].status} (${cache[r.nombre_equipo_o_agente].url})`);
}
md.push("");
md.push(`## Drafts (${drafted.length})`);
md.push("");
md.push("| # | Priority | Team | Market | Channel |");
md.push("|---|---|---|---|---|");
drafted.forEach((it, i) => md.push(`| ${i + 1} | ${it.tier} | ${it.team} | ${shortCity(it.row)}, ${it.row.estado} | ${it.channel.primary.type}: ${it.channel.primary.value} |`));
md.push("");
drafted.forEach((it, i) => {
    md.push(`### ${i + 1}. ${it.team} (${it.tier})`);
    md.push("");
    md.push(`- **Market:** ${it.market}. **Size:** ${it.size}.`);
    md.push(`- **Send via:** ${it.channel.primary.type}: ${it.channel.primary.value}${it.channel.alternates.length ? `. Alternates: ${it.channel.alternates.map((c) => `${c.type}: ${c.value}`).join("; ")}` : ""}.`);
    md.push(`- **Homepage check:** ${it.site ? `${it.site.status} (${it.site.checked_at})` : "not run"}.`);
    md.push(`- **Signals:**`);
    for (const s of it.signals) md.push(`  - ${s.key}: ${s.detail}. Source: ${s.source} (${s.origin})`);
    if (!it.signals.length) md.push("  - none found; check the Meta Ad Library and the site by hand");
    md.push(`- **Opener based on:** ${it.obs.key}.`);
    md.push("");
    md.push(`> ${it.en}`);
    if (it.es) {
        md.push("");
        md.push(`> ${it.es}`);
    }
    md.push("");
});
if (noChannel.length) {
    md.push(`## No public channel in the CSV (${noChannel.length})`);
    md.push("");
    md.push("Find a business Instagram or a contact page by hand before drafting.");
    md.push("");
    for (const it of noChannel) md.push(`- ${it.team} (${it.tier}), ${it.market}. Source: ${firstUrl(it.row.fuente_url)}`);
    md.push("");
}
md.push(`## Excluded: clearly over ~15 agents (${excluded.length})`);
md.push("");
md.push("Likely buyers, but outside the 3–15 agent target and a longer sale. No drafts; revisit only if the first interviews point to larger teams.");
md.push("");
for (const it of excluded) md.push(`- **${it.team}** (${it.tier}), ${shortCity(it.row)}, ${it.row.estado}. Size: ${it.reason}. Channel: ${it.channel.primary ? `${it.channel.primary.type}: ${it.channel.primary.value}` : "none in CSV"}.`);
md.push("");
writeFileSync(OUT_MD, md.join("\n"));

console.log(`\nDrafts: ${drafted.length} · no channel: ${noChannel.length} · excluded: ${excluded.length} · not read: ${blocked.length + skipped.length}`);
