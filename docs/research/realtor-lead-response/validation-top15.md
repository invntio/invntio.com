# Visual validation: top 15 outreach drafts

Checked 2026-10-05 in Chrome. For each team: homepage loaded with about 5 s for widgets, then a screenshot, plus the contact page when that's the send channel. Instagram profiles were opened to confirm the account. Read-only: nothing was submitted or sent, and no chats or DMs were opened. Job-post claims were checked with a web search of the job boards (ZipRecruiter, Glassdoor, LinkedIn).

Openers marked FIX have already been rewritten in `outreach-drafts.md`. Only the opener sentence changed, in English and, where there is one, in Spanish. `outreach-drafts.csv` still has the old `opener_en` text, and re-running `draft.mjs` would overwrite these edits.

| # | Team | Chat | WhatsApp / SMS | Form | Spanish | Hours | Live / right team | Opener claim | Verdict | Send via |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Crawford Lorenzo | Yes ("Chat with us here" bubble) | No | Yes (/contact-us/) | No | Not seen | Yes | Offers chat | OK | IG @crawfordlorenzoteamnj (verified) |
| 2 | Jersey Property Group | No | No | Yes | No | "Hours of Operation" label, no hours | Yes | Hiring Zillow Flex agents | OK | https://www.happyclientsnj.com/contact-us: first and last name, email, phone (optional), subject, message |
| 3 | Michael Martinetti Group | No | No | Yes (footer and /contact-us/) | No | Not seen | Yes | Contact form is the main channel besides phone | OK | IG @michaelmartinettigroup (verified) |
| 4 | Oz Group | No | No | Yes (pop-up and /contact-us) | No | Not seen | Yes, now **eXp Realty** | Hiring Zillow Flex agents | FIX | IG @_ozgroup (verified) |
| 5 | The Nunez Group | No | No | Yes | No | Not seen | Yes | Site built on Ylopo | OK | https://www.thenunezgroup.com/contact-us: first and last name, email, phone, subject, message |
| 6 | Queens Home Team | No | No | Yes (/help/) | Only in the page title | Not seen | Yes | Contact form only besides phone | FIX | IG @queenshometeam (verified) |
| 7 | Rafael Ching Team | Yes (chatbot bubble) | No | Yes (/connect) | No switcher seen | Not seen | Yes | Offers chat | OK | IG @rafaelchingteam (verified) |
| 8 | The Behfar Team | No | WhatsApp floating button | Yes (/contact/) | No Spanish seen (Hebrew support link) | Not seen | Yes | Offers WhatsApp | OK | IG @thebehfarteam (verified; Karen Behfar) |
| 9 | Expansion Team (RE/MAX Edge) | No | "Call or Text 718-313-0214" | Yes (valuation and strategy forms) | No | Not seen | Yes | Zillow Premier Agent | FIX | IG @expansionteamnyc (verified) |
| 10 | Hammond Homes | No | No | Yes (/contact-us/) | Not seen | "Open 24 Hours" on contact page | Yes | Hiring Zillow Preferred agents | OK | **Contact page** https://hammond-homes.com/contact-us/: name, email, phone, buying/selling/both, message. IG @michaelhammondjr shows no Message button |
| 11 | Premier Home Team | Yes (chatbot bubble) | No | Yes (/connect) | No | Not seen | Yes | Offers chat | OK | IG @premier.home.team (verified) |
| 12 | Chris Lawlor Team | No | No | Yes | No | Not seen | Yes | Hiring Zillow Flex agents | OK | https://chrislawlorteam.com/contact: name, email*, phone, message*, buying/selling, "OK to contact"* checkbox. Alt: IG @chris_lawlor_team |
| 13 | DiCicco Team | No | No | Yes | No | Not seen | Yes | Team "presents itself as a Zillow Premier Agent" | FIX | https://diciccosells.com/contact/: first and last name, phone, email, message |
| 14 | Betancurth RE Group | No | No | Yes (homepage "Let's Get Started") | No (English-only) | Not seen | Yes | English-only site in Bayonne | FIX | Homepage form at https://bregrealty.com/: first and last name, email, phone (all required), buy/sell/both/invest, property type, how can we help, notes. Alt: steven@bregroupnj.com |
| 15 | Gruosso Group | No (floating phone button) | No | Yes (entry pop-up and /contact) | No | Not seen | Yes | Join page: lead gen is a big part of the team | FIX | IG @gruossogroup (verified; "G and G Agency") |

**Totals:** 9 OK, 6 FIX, 0 SKIP.

## Notes per team

1. **Crawford Lorenzo.** The chat bubble shows up after load ("Hi there! Have a question? Chat with us here."). The IG name now reads "Crawford Lorenzo & Baggio Home Selling Team", so use that name if you mention it.
2. **Jersey Property Group.** Zillow Flex postings from Jersey Property Group Realty are live on ZipRecruiter and Indeed (Manalapan, Jackson, Toms River and more). The Ylopo template has a floating "Open Contact Form" button but no chat.
3. **Martinetti.** No chat or text option, just a footer contact form plus phone. The IG bio links to a /book page.
4. **Oz Group.** The brand is now Oz Group powered by eXp Realty. The Zillow Flex postings found are older (2022) or don't name Zillow. The current Glassdoor post the research cites is titled "Leads Supplied, Appointments Set, Coaching Included", and the IG bio says "Leads • Coaching".
   New opener: *"I saw your job posts offer new agents leads supplied and appointments set."*
5. **Nunez.** The Ylopo template was confirmed (Ylopo assets in the page source). The contact form's consent text mentions "AI voice call" follow-up.
6. **Queens Home Team.** The header has phone and email icons, so "apart from the phone" was inaccurate. The /help/ page says to fill out the form and that they'll "get back to you ASAP". Spanish appears only in the SEO title, so send the English version.
   New opener: *"I noticed your contact page asks people to fill out the form and promises you'll get back to them ASAP."* The Spanish line was updated to match.
7. **Rafael Ching.** The chatbot bubble pops up after load. No Spanish or language switcher is visible, so English is safer.
8. **Behfar.** There's a floating WhatsApp button plus a WhatsApp icon in the top bar. Spanish isn't visible on the homepage, so send English.
9. **Expansion Team.** "Zillow Premier Agent" appears nowhere on the site, which only links to Zillow reviews. "Call or Text" is prominent.
   New opener: *"I noticed your homepage invites sellers to call or text you directly."*
10. **Hammond Homes.** The Zillow Preferred (Flex) postings are live (ZipRecruiter, Glassdoor, Indeed). The IG account is verified with 195k followers, and no Message button shows on the profile, so use the contact page. "Spanish" isn't visible on the current homepage, so send English.
11. **Premier Home Team.** The chatbot bubble is present (PLACE/Brivity template).
12. **Chris Lawlor.** The Zillow Flex postings are live on ZipRecruiter (Northampton, Nazareth). The site's /careers page doesn't mention Zillow. The form requires an "OK to contact" consent box.
13. **DiCicco.** The homepage says the team is "Led by Zillow Premier Agent Anthony DiCicco". The old wording called the team itself a Premier Agent.
    New opener: *"I saw on your homepage that the team is led by Zillow Premier Agent Anthony DiCicco."*
14. **Betancurth.** The site is English-only, but the leader was raised by Colombian immigrants in Bayonne, so the Spanish angle could come across as presumptuous. The form says "We typically respond within 1 business hour." The site is a new build (Lovable badge).
    New opener: *"I noticed the form on your website says you typically respond within 1 business hour."*
15. **Gruosso.** The join page's line is "More Leads, More Opportunities ... less time chasing business", so "big part of how the team works" overstated it. A contact-details pop-up opens on arrival.
    New opener: *"I saw on your join page that you offer agents more leads and less time chasing business."*
