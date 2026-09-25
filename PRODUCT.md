# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Small and mid-sized businesses in Latin America** that need a website, a web or mobile app, or an internal tool and have no technical team of their own.
- **Startups and founders** who need an MVP, SaaS product or mobile app built end to end.
- **Companies in the United States** that hire and pay in USD (through Stripe).

A secondary reader is the **payment-processor reviewer** (Stripe). They check that the site clearly states what is sold, how to make contact, and what the refund and cancellation terms are.

## Product Purpose

Invntio is a one-person software studio run by Víctor Velázquez Cid. The site exists to:

1. explain exactly what Invntio sells and how an engagement works;
2. let a prospective client get in touch (email or the contact form);
3. publish the Terms of Service, the Refund & Cancellation Policy and the Privacy Policy in plain language.

Success means a visitor understands the offer within seconds and contacts Invntio, and a Stripe reviewer finds every required disclosure without searching.

## Positioning

- **Direct line to the builder.** Clients talk to the engineer who does the work. There is no account manager in between.
- **End to end.** Design, development, infrastructure, hosting and maintenance all come from one provider.
- **Products of its own in production.** Invntio builds and runs its own products (Beavo, Axen, Bohío), not only client work.
- **Quality and security first.**

## Capabilities and Constraints

Services sold:
1. Custom Software Development: web apps, internal tools, SaaS.
2. Mobile Apps: native iOS (SwiftUI) and cross-platform (Flutter, React Native).
3. Website Design & Development: institutional sites, landing pages, catalogs, and blogs with a CMS the client can edit.
4. Systems Integration & APIs: NestJS, Quarkus, REST/GraphQL, webhooks.
5. Process Automation: n8n, Make, AI agents (Hermes Agent, OpenClaw, Claude API).
6. Hosting & Maintenance: monthly or annual plans covering hosting, security, backups, updates, support and optional content management.
7. Technical Consulting: architecture, DevOps and CI/CD, security review.

Engagement flow: Discovery call → Proposal & upfront payment → Build & review → Launch, handoff & ongoing support.

Commercial terms (confirmed September 2026):
- Fixed-price projects: the payment schedule is set in each written proposal, and small projects such as websites are paid 100% upfront. A payment is non-refundable once made.
- Recurring plans are billed monthly or annually. The client cancels before the next renewal. There are no refunds for past or partial periods.
- Hourly work is paid as a prepaid minimum block at the agreed rate. Overage requires the client's written approval and goes on the next invoice. Clients are notified when 80% of a block is used.
- Late payment: invoices are due in 7 days. At 7 days late, work pauses. At 15 days, hosting is suspended. At 30 days, the agreement may be terminated. No late fee is charged. Nothing is handed over until paid in full.
- Client delays: more than 10 business days without a response moves the timeline. After 60 days the project is closed and a restart needs a new proposal.
- Legal entity: **none shown**. The brand is "Invntio". The operator's name appears only on the legal pages.
- Location: Pennsylvania, United States. No street address is published.
- Contact: hello@invntio.com (email only; no phone published).
- Analytics: PostHog (project `invntio.com`), loaded only after cookie consent.
- Languages: English (`/`) and Spanish (`/es/`).
- Stack: Astro 7, static pages plus one on-demand route (/api/contact), deployed on Cloudflare Workers on push to main. The contact form posts to /api/contact (Cloudflare Turnstile + Cloudflare Email Service).

## Brand Commitments

- Name: **Invntio**. The logo and wordmark files are in `public/cdn/` and `public/images/logo.svg` / `dark-logo.svg`.
- The existing brand green is `#2cac7b`.
- Voice: plain, specific and professional. No hype and no placeholder or "coming soon" content, because Stripe rejects it.

## Evidence on Hand

- Own products: Beavo (iOS habit tracker, https://beavo.me), Axen (iOS training app, https://getaxen.com), Bohío (condominium management SaaS, https://bohio.app).
- Client work: The Global Merchants Group (https://www.theglobalmerchantsgroup.com/en/default-channel).
- OBJURI and CGD are client sites still in progress; show them only once they are live.
- There are **no testimonials, client logos, metrics or partner relationships**. Do not invent any. The technology logos are tools Invntio uses, not partners.
- Social accounts (GitHub, LinkedIn, Instagram) exist but are inactive, so they are not linked for now.

## Product Principles

1. Say exactly what is sold and what it costs to engage. Specific beats aspirational.
2. Every claim must be verifiable, and nothing is shown that isn't real and live.
3. Contact and policy information is always one click away.
4. Keep it small: one person, a few pages, maintainable by one person.

## Accessibility & Inclusion

Target WCAG 2.2 AA: contrast, visible focus, semantic headings, labelled form fields, alt text.
