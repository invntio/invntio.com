import { getCollection } from "astro:content";
import { ui } from "../i18n/ui";
import { site } from "../config/site";

// Plain-text views of the site for AI assistants (llms.txt / llms-full.txt), built from
// the same sources as the pages so they never drift.

const fill = (text: string, lang: "en" | "es") =>
    text
        .replaceAll("{{email}}", site.email)
        .replaceAll("{{operator}}", site.operator)
        .replaceAll("{{location}}", site.location[lang])
        .replace(/\]\((\/[^)]*)\)/g, `](${site.url}$1)`);

export function summary() {
    const t = ui.en;
    const live = t.register.items.filter((i) => !i.hidden);
    return `# Invntio

> ${t.meta.description}

Invntio is an independent software studio based in ${site.location.en}. Clients work directly with the engineer who designs, builds, hosts and maintains their project. Every engagement starts with a written proposal; payments are processed by Stripe. The site is available in English (${site.url}/) and Spanish (${site.url}/es/).

Contact: ${site.email}

## Services

${t.services.items.map((s) => `- **${s.name}**: ${s.body} Typical stack: ${s.stack}.`).join("\n")}

## How an engagement works

${t.process.steps.map((s, i) => `${i + 1}. **${s.name}**: ${s.body}`).join("\n")}

## Hosting & maintenance plans

Included: ${t.plans.included.join("; ")}.
Not included (quoted separately): ${t.plans.excluded.join("; ")}.

## Products and client work (live)

${live.map((i) => `- [${i.name}](${i.url}): ${i.what} (${i.kind === "own" ? "own product" : "client"})`).join("\n")}

## Policies

- [Terms of Service](${site.url}/terms/): scope, payments, late payment, intellectual property, confidentiality, AI use, liability, Pennsylvania law
- [Refund & Cancellation Policy](${site.url}/refunds/): payments are non-refundable once made, with listed exceptions; plans cancel before renewal
- [Privacy Policy](${site.url}/privacy/): data collected, cookies (analytics only with consent), rights and retention

## Optional

- [Full text of this site for AI assistants](${site.url}/llms-full.txt)
- [Sitio en español](${site.url}/es/)
`;
}

export async function full() {
    const legal = await getCollection("legal");
    const order = ["terms", "refunds", "privacy"];
    const docs = legal
        .filter((e) => e.id.startsWith("en/"))
        .sort((a, b) => order.indexOf(a.id.slice(3)) - order.indexOf(b.id.slice(3)))
        .map((e) => `---\n\n# ${e.data.title}\n\nURL: ${site.url}/${e.id.slice(3)}/\nLast updated: ${e.data.updated.toISOString().slice(0, 10)}\n\n${fill(e.body ?? "", "en").trim()}\n`);
    return `${summary()}\n${docs.join("\n")}`;
}
