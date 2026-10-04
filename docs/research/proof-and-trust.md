# Proof and trust signals for invntio.com

Research date: 2026-10-03. Scope: what proof to show on the site of a small B2B software studio with few clients and few reviews, which numbers help or hurt, and how to frame a paid entry offer.

Only claims that could be checked against the linked source are kept. Where a source could not be fetched directly (CXL returns 403 to automated fetches), the claim is taken from CXL's own published summary as indexed by search, and is marked as such. Lines marked **Inference** are our reasoning from the sources, not a finding of theirs.

---

## 1. What the research says

### Social proof works best under uncertainty, and from people like the buyer

- Cialdini, *Influence*, ch. 4: "We are most vulnerable to the need for social proof when we are most uncertain", and social proof "operates most powerfully when we are observing the behavior of people just like us." ([media-studies.ca excerpt](https://www.media-studies.ca/articles/influence_ch4.htm))
- **Inference:** a US small-business owner hiring an unknown studio is very uncertain, so proof matters a lot; and one testimonial from a similar business (a US wholesaler, a condo association) is worth more than a famous logo from an unrelated sector.

### Small numbers backfire

- Cialdini's Petrified Forest study: a sign saying many visitors had removed wood raised theft to 7.9%, versus 2.9% with no sign and 1.7% with a plain request. Pointing at a "norm" signals what is normal, even when you meant otherwise. ([Marketing Week / Richard Shotton](https://www.marketingweek.com/richard-shotton-behavioural-science-save-planet/), [Cardinal Path](https://www.cardinalpath.com/blog/persuasive-web-design-part-23-beware-negative-social-proof))
- NN/g: "too few people approve" can backfire; a study participant dismissed content with 1,000 shares as not popular enough. NN/g also warns to test implementations "and not simply accept that *any* social proof feature is beneficial." ([NN/g, Social Proof in the User Experience](https://www.nngroup.com/articles/social-proof-ux/))
- CXL: low counts can trigger negative social proof; when numbers are low, don't broadcast them and lean on qualitative proof instead; a share counter showing 0 is "anti-social proof." (CXL, [Social Proof: Definition, Types, Examples](https://cxl.com/blog/is-social-proof-really-that-important/), from indexed summary)

### What gets noticed and remembered

- CXL original eye-tracking research: testimonials with text drew more attention than logo strips; viewers were significantly more likely to remember high-profile logos (not low-profile ones), testimonials with photos (not without), and press mentions. Their summary line: photos are memorable, logos and numbers are not. (CXL, [Which Types of Social Proof Work Best?](https://cxl.com/research-study/social-proof/), from indexed summary)
- **Inference:** a strip of unknown small-business logos does little. A named, specific quote does more. A photo helps recall; for a brand-forward studio, the photo can be of the client or of the shipped work, not of the founder.

### What makes a services site credible (NN/g)

- Four credibility factors: design quality; upfront disclosure (pricing, fees, contact, policies); comprehensive, correct and current content (including showing your work process, not only results); and being connected to the rest of the web, because "users trust outside sources more than company-sponsored testimonials." ([NN/g, Trustworthiness in Web Design](https://www.nngroup.com/articles/trustworthy-design/))
- B2B trust: testimonials that show a reservation turning into confidence are particularly effective; offer case studies; "Show the price; and if the price is variable, offer common pricing scenarios"; give several contact channels, at least email and phone. ([NN/g, What B2B Designers Can Learn from B2C About Building Trust](https://www.nngroup.com/articles/b2b-trust-from-b2c/))
- About pages: users want what you do, company origins, how you work, real photos over stock, and many contact options; they verify claims on review sites and search. ([NN/g, About Us Information on Websites](https://www.nngroup.com/articles/about-us-information-on-websites/))

### Books

- **Building a StoryBrand** (Donald Miller): the brand is the guide, not the hero; demonstrate authority with testimonials, statistics, awards and logos, in "just the right amount"; about three short testimonials is enough. ([Nat Eliason notes](https://www.nateliason.com/notes/building-a-story-brand-donald-miller), [Julian Paul notes](https://julianpaul.me/blog/book-takeaways-building-a-storybrand))
- **The Win Without Pitching Manifesto** (Blair Enns): "We will diagnose before we prescribe", "We will not solve problems before we are paid", "We will address issues of money early". Charge for the diagnosis "just like doctors charge for MRIs". ([Rick Lindquist notes](https://www.ricklindquist.com/notes/the-win-without-pitching-manifesto-by-blair-enns))
- **The Business of Expertise** (David C. Baker): expertise comes from pattern-matching in a narrow focus; positioning (vertical or horizontal) is what makes you hard to substitute. ([Helios Design summary](https://www.heliosdesign.com/blog/web/insights-from-the-business-of-expertise.html)) **Inference:** focus is itself proof. "We build B2B ordering sites for wholesalers" convinces more than a list of every service.

### What successful small studios actually show

| Studio | What is on the home page | Takeaway |
|---|---|---|
| [Lickability](https://lickability.com/) (small iOS studio, NYC) | Featured case studies, named client quotes with titles, client list, partner badges, a Clutch ranking, "get back to you within 2 business days" | Named quotes with role; a concrete response-time promise |
| [Tighten](https://tighten.com/) (Laravel consultancy) | A few case studies, one quote, authority through the Laravel book, podcasts, open source. **No numeric stats.** | Expertise shown through things they made and published, not counts |
| [The Iconfactory](https://iconfactory.com/) | Own apps featured on the App Store and Apple Arcade next to client work; no testimonials | Own products serve as portfolio |
| [Designjoy](https://www.designjoy.co/) (productized design) | Public price, refund guarantee in first week, delivery time, short intro call | Risk reversal and price transparency do much of the trust work |
| [37signals](https://en.wikipedia.org/wiki/37signals) | Started as a web design consultancy in 1999; Basecamp began as its own product in 2003 | Own products are a credible origin story for a studio |

Note that the studios that show big numbers (Lickability: "hundreds of apps", "tens of millions of users") have years of volume behind them. Tighten, a well-known firm, shows none.

---

## 2. Ranking: what converts for a small studio with few clients and reviews

Ranked by how much each element can do for Invntio now, based on the sources above. The order is our synthesis, not a published ranking.

1. **One deep, specific case study** with the client named, the problem, what was built, a concrete outcome and a timeline (NN/g B2B; CXL). The outcome can be a fact, not a percentage.
2. **A named testimonial from that client**, ideally the "I was unsure, then..." shape (NN/g B2B), with name, role and company. Photo of the person or of the product, not stock.
3. **Shipped, verifiable work** that a visitor can open: a live site, an App Store listing (Iconfactory and 37signals pattern; NN/g "connected to the web").
4. **Risk reversal and transparency**: published price ranges, written fixed-price proposals, warranty, refund policy, response-time promise (NN/g upfront disclosure; Designjoy; Lickability).
5. **Third-party verification**: a Clutch profile with a verified review, Google Business reviews (NN/g: outside sources beat self-published testimonials). Clutch reviews are checked by an editor, and phone reviews are done by a Clutch analyst. ([Clutch help center](https://help.clutch.co/en/knowledge/who-conducts-phone-interviews))
6. **Process and expertise content**: how the work is done, written guides (Tighten pattern; NN/g "show your process").
7. **Operational facts**: location, US phone, founding year, bilingual service, public status page. Weak alone, useful as a quiet trust strip.
8. **Count metrics** (clients, projects, years): only once the numbers are large. Currently they would hurt.

---

## 3. Numbers: which help, which backfire

**Backfire now**
- Counts of clients, projects, reviews or years: "1 client", "3 projects", "1 year", "1 review". Small counts signal "few people chose this" (Cialdini, NN/g, CXL).
- Star ratings built on one review, or a Clutch badge showing "0 reviews" or "pending".
- Vanity totals that can't be checked ("100% client satisfaction", "10,000+ lines of code", "500 cups of coffee").
- Percentages from tiny samples ("100% on-time delivery" with one project). Technically true and misleading.

**Worth showing (specific, verifiable, about the work, not volume)**
- **Speed**: "GMG: B2B wholesale site live in one week." A duration is proof of skill and doesn't depend on volume.
- **Uptime**: the real 30- or 90-day figure from the public UptimeRobot page, linked, so anyone can check it. Show it only if the figure is good, and keep the link live, not a static screenshot.
- **Response-time commitment**: "Reply within one business day" (Lickability pattern). It's a promise, not a count, so it doesn't depend on volume.
- **Policy numbers**: "30-day warranty", "credited 100% toward the project", "fixed price in writing". These numbers reduce risk.
- **Product facts**: "Beavo is live on the App Store" with a link and, if the rating is good and has a meaningful count, the rating.
- **Outcome numbers from the client**, when the client gives them and agrees to publish them (orders per week moved online, hours saved).

**Rule of thumb (Inference):** show a number only if (a) it would still impress if the visitor checked it, and (b) it measures quality, speed or risk, not popularity. Replace counts with named examples until the count is big enough to do the talking.

---

## 4. Specific suggestions for Invntio

Brand-forward and faceless is compatible with the research: NN/g wants authenticity and real photos, not necessarily a founder's face. Use real screenshots of shipped work and real client photos or logos instead of stock and team portraits. The "who's behind this" need can be met with origins, how the studio works, where it's based, and who answers the phone.

**GMG (the one public client project)**
- Make it a full case study page, not a portfolio tile: problem, constraints, what was built, "live in one week", what changed for them after. Link to the live site.
- Ask GMG for a two- or three-sentence quote with name and role, in their words, ideally covering a doubt they had beforehand. Offer to draft it for them to edit.
- Ask GMG to leave the pending Clutch review (or move the pending one through the analyst call). One verified Clutch review is worth more than any self-published text (NN/g). Until it's published, don't show a Clutch badge.
- Also ask for a Google Business Profile review: that's where US small businesses search.

**Own products (Beavo, Axen, Bohio)**
- Present them as "Products we build and run", separate from client work, so it's clear they're not clients. This follows the Iconfactory and 37signals pattern.
- Beavo: App Store badge and link. It shows the studio can ship and maintain an iOS app through Apple review.
- Axen and Bohio: label them honestly as "in early access". Don't imply customers or traction you don't have. Bohio can support a "we understand condo associations" angle if that becomes a niche (Baker's vertical positioning).

**Institutional client sites in progress**
- Don't list them until they're live on their own domain and the client has agreed (already the plan in `docs/tasks/launch-client-sites.md`). "Coming soon" tiles for unnamed clients look like padding.
- When they launch, ask each one for a quote at handover, when goodwill is highest. Three short testimonials is the StoryBrand target.

**Risk reversal and transparency (the strongest assets right now)**
- Put a compact "How we work" strip near every primary call to action: fixed price in a written proposal, 30-day warranty, clear refund policy, reply within one business day.
- Publish "starting at" prices or common scenarios per service (NN/g: show the price, or common pricing scenarios when it varies).
- Link the refund policy and warranty terms where they're mentioned, so the claims are checkable.

**Operational trust strip (footer or About)**
- "Based in Pennsylvania, US · Founded 2024 · English and Spanish · US phone · Live status page". Keep "Founded 2024" factual and low-key; don't turn it into a "years in business" number.
- Link the UptimeRobot page as "Status" in the footer. For a studio that also sells hosting, a public, honest status page is direct proof of the hosting service. (Inference; no study found on status pages as conversion signals.)

**What not to do**
- No counters (clients, projects, years, reviews).
- No unknown-logo strip until there are 5+ recognizable or relevant logos.
- No "trusted by" headline above one logo.
- No stock photos of "the team".

---

## 5. The paid entry offer ($75–100 diagnostic, credited toward the project)

**What the experts say**
- Enns: diagnose before prescribing; don't solve problems before being paid; talk about money early. Name it, formalize it and describe it on one page, as a standard part of your method, not something made up per client. Diagnosis and prescription are sold together: the diagnostic ends in findings and a recommendation with timeline and budget. Price guideline for larger engagements: roughly 10% of the total, 5–15% range; rookie mistake is making it too long, too expensive or too documented. ([2Bobs, Phase Your Client Engagements](https://2bobs.com/podcast/phase-your-client-engagements); [Rick Lindquist notes](https://www.ricklindquist.com/notes/the-win-without-pitching-manifesto-by-blair-enns))
- Brennan Dunn (Roadmapping): a small fixed-price engagement that delivers some value on its own and prepares the client for the larger project; by the time the proposal arrives, the prospect is already a paying client. Charging lowers sales overhead and screens out non-buyers, and a low-risk first step lowers perceived risk: "Decrease risk and the elasticity of what clients will pay goes up." ([Double Your Freelancing, 3 Reasons](https://doubleyourfreelancing.com/3-reasons-roadmapping/), [What Is Roadmapping](https://doubleyourfreelancing.com/lesson/what-is-roadmapping/))
- Jonathan Stark: the value of a roadmap is a large reduction in uncertainty; his own roadmapping offer had a fixed price, a short pre-qualifying questionnaire before the payment link, a recorded call, a written deliverable within a week, and a 100% money-back guarantee. ([jonathanstark.com/roadmap](https://jonathanstark.com/roadmap), [How is a roadmap different from a Why Conversation?](https://jonathanstark.com/daily/20170503-how-is-a-roadmap-different-from-a-why-conversation))
- Crediting the fee toward the project: none of Enns, Dunn or Stark (in the sources checked) endorses or forbids it. It's common agency practice and answers the "am I paying twice?" objection. ([84em](https://84em.com/blog/why-larger-projects-require-paid-discovery/))

**Recommendations for Invntio**
- **Name it as a deliverable, not a call.** "Project Diagnostic" or "Project Roadmap" (ES: "Diagnóstico del proyecto"), not "consultation" or "discovery call". The client is buying an answer, not time.
- **Say what they receive**: a 45–60 minute session plus a short written summary within two business days: what to build, what not to build, risks, a rough timeline and a price range (Enns: findings plus recommendations; keep it short). The written summary is what makes $75–100 feel fair, and it doubles as the proposal draft.
- **Price**: $75–100 is far below Enns's ~10% and Stark's $1,295; it works as a commitment filter, not as revenue. Pick one fixed number and publish it ($95 or $99). Don't make it hourly.
- **Credit and risk reversal**: "100% credited to your project if you go ahead within 60 days" and "If the session isn't useful, we refund it" (Stark-style guarantee). The time window keeps the credit from becoming an open-ended discount.
- **Qualify before payment**: a short form (what you need, timeline, budget range) before the payment link, as Stark did, so neither side wastes the session.
- **Keep a free path for very small requests** (a short reply by email) so the fee doesn't block simple questions. The paid diagnostic is for real projects. (Inference.)

---

## Top 5 recommendations

1. Turn GMG into a full named case study with "live in one week" and a client quote, and get the Clutch review published. Show no counts until they're large.
2. Put risk reversal next to every call to action: written fixed price, 30-day warranty, refund policy, reply-time promise, and publish starting prices.
3. Show Beavo, Axen and Bohio as "Products we build and run" with honest status labels, linked to the App Store or the product site.
4. Add verifiable operational facts (Pennsylvania, founded 2024, EN/ES, US phone, live status page) as a quiet strip, linked where possible.
5. Launch the paid "Project Diagnostic": fixed published price, written summary as the deliverable, 100% credited within 60 days, refund if not useful, short qualifying form before payment.
