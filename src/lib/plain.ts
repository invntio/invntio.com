import { getCollection } from "astro:content";
import { ui } from "../i18n/ui";
import { site } from "../config/site";

// Plain-text views of the site for AI assistants (llms.txt / llms-full.txt), built from
// the same sources as the pages so they never drift.

const fill = (text: string, lang: "en" | "es") =>
    text
        .replaceAll("{{email}}", site.email)
        .replaceAll("{{phone}}", site.phone.display)
        .replaceAll("{{operator}}", site.operator)
        .replaceAll("{{location}}", site.location[lang])
        .replace(/\]\((\/[^)]*)\)/g, `](${site.url}$1)`);

const caseUrl = (slug: string) => `${site.url}/work/${slug}/`;

// One case study as plain text (English).
function caseStudy(c: (typeof ui.en.cases.items)[number]) {
    const t = ui.en.cases;
    return `---

# Case study: ${c.name}

URL: ${caseUrl(c.slug)}
Live site: ${c.url}

${c.outcome} ${c.lede}

- ${t.industry}: ${c.industry}
- ${t.built}: ${c.built}
- ${t[c.when.label]}: ${c.when.text}

## ${t.challenge}

${c.challenge.join("\n\n")}

## ${t.built}

${c.items.map((item) => `- ${item}`).join("\n")}

${t.stackLabel}: ${c.stack}.

## ${c.flow.title}

${c.flow.steps.map((s, i) => `${i + 1}. ${s.name}: ${s.body}`).join("\n")}

## ${t.result}

${c.results.map((r) => `- **${r.title}**: ${r.body}`).join("\n")}
`;
}

export function summary() {
    const t = ui.en;
    const live = t.register.items.filter((i) => !i.hidden);
    return `# Invntio

> ${t.meta.description}

Invntio is an independent software studio based in ${site.location.en}. Clients work directly with the engineer who designs, builds, hosts and maintains their project. Every engagement starts with a written proposal; payments are processed by Stripe. The site is available in English (${site.url}/) and Spanish (${site.url}/es/).

Contact: ${site.email} · ${site.phone.display}

## Services

${t.services.items.map((s) => `- **${s.name}**: ${s.body} Typical stack: ${s.stack}.`).join("\n")}

## How an engagement works

${t.process.steps.map((s, i) => `${i + 1}. **${s.name}**: ${s.body}`).join("\n")}

## Work with us

How to start a project, with prices, guarantees, common questions and the contact form: ${site.url}/work-with-us/ (Spanish: ${site.url}/es/trabaja-con-nosotros/)

${t.hire.ways.items.map((w) => `- **${w.name}** (${w.terms.replace("\u00a0", " ")}): ${w.body}`).join("\n")}

## Project Diagnostic (the recommended way to start)

A paid 30-minute video session (Cal Video) about the client's project, for ${site.diagnostic.currency} ${site.diagnostic.price}, paid when booking (Stripe).

Book online: ${site.diagnostic.url}

- It answers "what does my project need?", for owners with a problem or an idea who are not technical.
- Within 2 business days the client receives a one-page written recommendation: the right approach (custom software, an existing tool or automation), the technology or tools it needs and a rough budget range. It is theirs to keep, even if they don't continue.
- The full fee is credited toward the project if they hire Invntio within 60 days of the session.
- If the session isn't useful, the client gets a full refund on request within 7 days of the session.
- Reschedule or cancel up to 1 business day before for a full refund. Later cancellations and no-shows are not refunded.
- Sessions in English or Spanish.

## Technical Session (help with what you already have)

A paid 60-minute hands-on video session with screen sharing, for ${site.session.currency} ${site.session.price}, paid when booking (Stripe). For founders with a team, businesses that already have a technical provider, or anyone stuck with something half-built.

Book online: ${site.session.url}

- Typical uses: reviewing the architecture or code of an app or site; unblocking an integration that isn't working; a second opinion on another vendor's quote or proposal; choosing a stack before building.
- Sold on its own; not credited toward a project.
- Reschedule or cancel up to 1 business day before for a full refund. Later cancellations and no-shows are not refunded.
- Sessions in English or Spanish.

Prefer to write first? The contact form at ${site.url}/work-with-us/#write and ${site.email} are free; we reply within 1 business day, Monday to Friday.

## Common questions

${t.hire.faq.items.map((f) => `- **${f.q}** ${f.a}`).join("\n")}

## Hosting & maintenance plans

Included: ${t.plans.included.join("; ")}.
Not included (quoted separately): ${t.plans.excluded.join("; ")}.

## Products and client work (live)

${live.map((i) => `- [${i.name}](${i.url}): ${i.what} (${i.kind === "own" ? "own product" : "client"})`).join("\n")}

## Case studies

${t.cases.items.map((c) => `- [${c.name}](${caseUrl(c.slug)}): ${c.outcome}`).join("\n")}

## Policies

- [Terms of Service](${site.url}/terms/): scope, payments, late payment, intellectual property, confidentiality, AI use, liability, Pennsylvania law
- [Refund & Cancellation Policy](${site.url}/refunds/): payments are non-refundable once made, with listed exceptions; Project Diagnostic refund and credit rules; Technical Session cancellation rules; plans cancel before renewal
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
    return `${summary()}\n${ui.en.cases.items.map(caseStudy).join("\n")}\n${docs.join("\n")}`;
}
