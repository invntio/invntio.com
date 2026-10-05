# Outreach drafts: realtor lead-response interviews

Generated 2026-10-05 by `node scripts/outreach/draft.mjs` from `lista-equipos.csv` and a homepage check on 2026-10-05. **Nothing has been sent.** These are drafts for Víctor to review and send by hand. The goal is listening interviews (Mom Test), not sales.

## How to use this

1. Before each send, open the team's site or profile and confirm the observation is still true (the script reads static HTML only, so a widget loaded by JavaScript can be missed).
2. If a team shows few signals, check the Meta Ad Library by hand (public, search the team name) for active ads, and adjust the first sentence.
3. Fill in `[name]` and replace `[Tue 4pm]` / `[Thu 11am]` with two real slots from your calendar.
4. Send **at most 15 a day**, yourself, through the channel listed. No links, no attachments, no fake inquiries.
5. Use the Spanish version only where it's given (the team shows Spanish); otherwise send the English one.
6. Log every send and reply in `outreach-drafts.csv` (`sent_on`, `channel_used`, `follow_up_on`, `reply`, `call_booked`, `notes`); re-runs keep those columns.
7. If there's no answer after 4–5 days, send the follow-up line **once**, then stop.
8. When someone says yes, book 15 minutes and run `guion-entrevista.md`: listen, no product, no prices.
9. After each call, add notes to the **Interview log** in `docs/sales/realtor-lead-response.md` (fields from section 3 of the script).
10. To refresh the signals later, run `node scripts/outreach/draft.mjs --fetch` (one request per site, then the drafts are rewritten).

### Follow-up (once, 4–5 days later)

> Hi [name], just bringing this back up in case it got buried. Even 15 minutes of your perspective would help a lot, and if now is a bad time, no problem at all.

> Hola [nombre], le escribo de nuevo por si se le pasó mi mensaje. Aunque sean 15 minutos, su experiencia me ayudaría mucho; y si ahora no es buen momento, no se preocupe.

## How the drafts were made

- **Sources:** the research CSV (each signal keeps its source URL) plus, when `--fetch` is used, one GET of each team's homepage with an identifying User-Agent and a 12-second timeout. Brokerage portals and social sites are not fetched. No logins, no forms submitted, no personal phones or addresses collected.
- **Homepage signals checked:** chat widget, WhatsApp link, text/SMS option, contact form as the only channel, Spanish content, posted office hours, lead-gen platforms (Ylopo, BoomTown, Lofty, kvCORE/BoldTrail, Real Geeks, Sierra), Zillow mentions.
- **First sentence:** the most specific true observation available, in this order: Zillow Flex/Preferred hiring, lead-gen platform, chat, WhatsApp, office hours, English-only homepage in a bilingual market, contact form only, PLACE, Spanish content, Zillow, recruiting with leads, home valuation page, RealTrends listing.
- **Excluded:** teams listed as Mega/Enterprise or with more than 20 agents (10), listed at the end. 5 more teams have no public channel in the CSV.

**Sites not read in the homepage check:**

- Jason Rodriguez Realty Team: blocked (HTTP 403) (https://www.jasonrodriguezteam.com/)
- The Eric Leadbetter Team: blocked (HTTP 403) (https://theericleadbetterteam.com/)
- The Rosa Ylonka Perez Team: blocked (HTTP 403) (https://rosaylonkaperez.ironvalleyrealestate.com/)
- Jason Mitchell Group (oficina NY): unreachable (ERR_TLS_CERT_ALTNAME_INVALID) (https://www.mitchellgroupny.com/)
- NJ Property Experts: skipped (brokerage portal or social site, not fetched) (https://www.coldwellbankerhomes.com/nj/westfield/team/the-lisa-stafford-team/tid_1400/)
- The Evans Llorens (Barriga) Team: skipped (brokerage portal or social site, not fetched) (https://www.elliman.com/real-estate-agent/steven-llorens/22997)
- The Tony Murphy Sales Team: skipped (brokerage portal or social site, not fetched) (https://www.houlihanlawrence.com/bio/thetonymurphysalesteam)

## Drafts (46)

| # | Priority | Team | Market | Channel |
|---|---|---|---|---|
| 1 | Alta | Crawford Lorenzo Home Selling Team | Morristown, NJ | Instagram DM: @crawfordlorenzoteamnj |
| 2 | Alta | Jersey Property Group Realty | Neptune, NJ | Contact page: https://www.happyclientsnj.com/contact-us |
| 3 | Alta | Michael Martinetti Group | Westfield, NJ | Instagram DM: @michaelmartinettigroup |
| 4 | Alta | Oz Group (Joe Oz Real Estate Group) | Montclair, NJ | Instagram DM: @_ozgroup |
| 5 | Alta | The Nunez Group | Fort Lee, NJ | Contact page: https://www.thenunezgroup.com/contact-us |
| 6 | Alta | Queens Home Team | East Elmhurst, NY | Instagram DM: @queenshometeam |
| 7 | Alta | Rafael Ching Real Estate Team | Garden City, NY | Instagram DM: @rafaelchingteam |
| 8 | Alta | The Behfar Team | Midwood, Brooklyn, NY | Instagram DM: @thebehfarteam |
| 9 | Alta | The Expansion Team at RE/MAX Edge | Brooklyn, NY | Instagram DM: @expansionteamnyc |
| 10 | Alta | Hammond Homes (Michael Hammond Jr.) | Collegeville, PA | Instagram DM: @michaelhammondjr |
| 11 | Alta | Premier Home Team | Philadelphia, PA | Instagram DM: @premier.home.team |
| 12 | Alta | The Chris Lawlor Team | Easton, PA | Website form: https://chrislawlorteam.com/ |
| 13 | Alta | The DiCicco Team (Anthony DiCicco) | Newtown, PA | Contact page: https://diciccosells.com/contact/ |
| 14 | Media | Betancurth Real Estate Group | Bayonne, NJ | Contact page: https://bregrealty.com/ |
| 15 | Media | Gruosso Group | Shrewsbury, NJ | Instagram DM: @gruossogroup |
| 16 | Media | Holmquist Group powered by PLACE | Morristown, NJ | Instagram DM: @theholmquistteam |
| 17 | Media | Links Residential | Bergenfield, NJ | Instagram DM: @linksnj |
| 18 | Media | Michael Tejada Real Estate Team (Tejada Team) | Montclair, NJ | Contact page: https://tejadateam.com/contact |
| 19 | Media | NJ Property Experts | Westfield, NJ | Instagram DM: @njpropertyexperts |
| 20 | Media | The Destination NJ Home Selling Team | Hillsborough, NJ | Instagram DM: @destination.nj |
| 21 | Media | The Parlay Group | Ridgewood, NJ | Instagram DM: @theparlaygroupre |
| 22 | Media | Jamie Realty Group (Jamie Zheng Team) | Flushing, NY | Instagram DM: @jamierealtor_ny |
| 23 | Media | Melanie Kishk Century 21 Team | Brooklyn, NY | Contact page: https://www.century21.com/real-estate-agent/profile/melanie-kishk-P25405999 |
| 24 | Media | The Byrne Homes Team | White Plains, NY | Website form: https://www.westchestercountyresidences.com/ |
| 25 | Media | The Debbie Carpluk Team | Massapequa, NY | Instagram DM: @thecarplukteam |
| 26 | Media | The Evans Llorens (Barriga) Team | Bayside, NY | Website form: https://www.elliman.com/real-estate-agent/steven-llorens/22997 |
| 27 | Media | The Galluzzo Team | Dix Hills, NY | Instagram DM: @thegalluzzoteam_longislandny |
| 28 | Media | The Goldbar Team (Juan Barreneche) | Long Island City, Queens, NY | Instagram DM: @goldbarluxuryhomes |
| 29 | Media | The Tony Murphy Sales Team | Yonkers, NY | Website form: https://www.houlihanlawrence.com/bio/thetonymurphysalesteam |
| 30 | Media | The Zappulla Team | New Dorp, Staten Island, NY | Facebook page message: https://www.facebook.com/ZappullaTeam/ |
| 31 | Media | Jason Rodriguez Realty Team | Philadelphia, PA | Website form: https://www.jasonrodriguezteam.com/ |
| 32 | Media | Philly Home Girls | Philadelphia, PA | Instagram DM: @phillyhomegirls |
| 33 | Media | The Eric Leadbetter Team | Bethlehem, PA | Instagram DM: @theericleadbetterteam |
| 34 | Media | The Rosa Ylonka Perez Team | Allentown, PA | Contact page: https://rosaylonkaperez.ironvalleyrealestate.com/ |
| 35 | Media | Venture Philly Group | Philadelphia, PA | Instagram DM: @venturephilly |
| 36 | Baja | LuxeLife Group powered by PLACE | Millburn, NJ | Instagram DM: @luxelifegroup |
| 37 | Baja | Opulent Living Team | Hoboken, NJ | Instagram DM: @maryanskigroup |
| 38 | Baja | Premiere Home Group (Stefanie Prettyman) | Pennington, NJ | Instagram DM: @stefsells_nj |
| 39 | Baja | Radius Realty Group | Westfield, NJ | Contact page: https://www.radiusrealtynj.com/connect |
| 40 | Baja | Target Team | Woodcliff Lake, NJ | Instagram DM: @thetargetteam |
| 41 | Baja | Urban Coast Group | Hoboken, NJ | Contact page: https://www.urbancoastgroup.com/contact |
| 42 | Baja | City Block Team (Jeff Block) | Philadelphia, PA | Instagram DM: @cityblockteam |
| 43 | Baja | Jim Romano and the Suburbs2City Team | Blue Bell, PA | Instagram DM: @suburbs2cityteam |
| 44 | Baja | Lehigh Valley Just Listed | Northampton, PA | Contact page: https://www.lehighvalleyjustlisted.com/about/ |
| 45 | Baja | Solara | Philadelphia, PA | Contact page: https://solarateam.com/contact |
| 46 | Baja | South Philly Real Estate Team (Vinny Fracassi) | Philadelphia, PA | Instagram DM: @southphillyvinny |

### 1. Crawford Lorenzo Home Selling Team (Alta)

- **Market:** Morristown, NJ (North NJ (Morris)). **Size:** Large team según RealTrends (11-20 agentes).
- **Send via:** Instagram DM: @crawfordlorenzoteamnj. Alternates: Contact page: https://crawfordlorenzohomesellingteam.com/contact-us/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - chat_widget: chat widget (LeadConnector) in the page code. Source: https://crawfordlorenzohomesellingteam.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://crawfordlorenzohomesellingteam.com/ (homepage check 2026-10-05)
  - office_hours: office hours listed as Mon–Fri 9–5 (per directories). Source: https://crawfordlorenzohomesellingteam.com/ (research CSV)
  - valuation: home valuation page. Source: https://crawfordlorenzohomesellingteam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/crawford-lorenzo-home-selling-team-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** chat_widget.

> Hi [name], I noticed you offer chat on your website. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 2. Jersey Property Group Realty (Alta)

- **Market:** Neptune / Freehold / Lakewood, NJ (Central NJ (Monmouth)). **Size:** n/d (estimación: equipo pequeño-mediano según su página de agentes).
- **Send via:** Contact page: https://www.happyclientsnj.com/contact-us.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - lead_platform: Ylopo. Source: https://www.happyclientsnj.com/ (homepage check 2026-10-05)
  - zillow: mentions Zillow. Source: https://www.happyclientsnj.com/ (homepage check 2026-10-05)
  - zillow_hiring: job posts / recruiting for Zillow Flex leads. Source: https://www.indeed.com/q-Real-Estate-Agent-l-New-Jersey-jobs.html (research CSV)
- **Opener based on:** zillow_hiring.

> Hi [name], I saw your team is hiring agents to work Zillow Flex leads. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 3. Michael Martinetti Group (Alta)

- **Market:** Westfield / Scotch Plains, NJ (Central NJ (Union)). **Size:** Large team según RealTrends (11-20 agentes).
- **Send via:** Instagram DM: @michaelmartinettigroup. Alternates: Contact page: https://michaelmartinettigroup.com/contact-us/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://michaelmartinettigroup.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://michaelmartinettigroup.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://michaelmartinettigroup.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/michael-martinetti-group-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** contact_form_only.

> Hi [name], I noticed that, apart from the phone, the main way to reach you on your website is the contact form. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 4. Oz Group (Joe Oz Real Estate Group) (Alta)

- **Market:** Montclair (HQ) / Morristown / Asbury Park, NJ (Central NJ (Monmouth) / North NJ). **Size:** n/d (recluta en Monmouth, Morris, Essex, Union y Somerset).
- **Send via:** Instagram DM: @_ozgroup. Alternates: Contact page: https://www.ozgroupnj.com/contact-us.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - lead_platform: Ylopo. Source: https://www.ozgroupnj.com/ (homepage check 2026-10-05)
  - zillow: mentions Zillow. Source: https://www.ozgroupnj.com/ (homepage check 2026-10-05)
  - zillow_hiring: job posts / recruiting for Zillow Flex leads. Source: https://www.glassdoor.com/job-listing/jv?jl=1010272147740 (research CSV)
- **Opener based on:** zillow_hiring.

> Hi [name], I saw your team is hiring agents to work Zillow Flex leads. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 5. The Nunez Group (Alta)

- **Market:** Fort Lee, NJ (North NJ (Bergen/Hudson)). **Size:** 14 agentes (HousingWire, 2024); Large team según RealTrends.
- **Send via:** Contact page: https://www.thenunezgroup.com/contact-us.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - lead_platform: Ylopo. Source: https://www.thenunezgroup.com/ (homepage check 2026-10-05)
  - zillow: mentions Zillow. Source: https://www.thenunezgroup.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://www.thenunezgroup.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-nunez-group-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** lead_platform.

> Hi [name], I noticed your website is built on Ylopo, so you clearly put real effort into bringing in new inquiries. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 6. Queens Home Team (Alta)

- **Market:** East Elmhurst / Jackson Heights, NY (New York metro (Queens)). **Size:** Medium Team (RealTrends); 8 miembros visibles en web/Zillow.
- **Send via:** Instagram DM: @queenshometeam. Alternates: Contact page: https://www.queenshometeam.com/help/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://www.queenshometeam.com/ (homepage check 2026-10-05)
  - spanish_content: homepage mentions Spanish ("Spanish Speaking"). Source: https://www.queenshometeam.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://www.queenshometeam.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://www.queenshometeam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/queens-home-team-new-york-keller-williams/ (research CSV)
- **Opener based on:** contact_form_only.

> Hi [name], I noticed that, apart from the phone, the main way to reach you on your website is the contact form. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi que, aparte del teléfono, la forma principal de contactarlos en su web es el formulario. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 7. Rafael Ching Real Estate Team (Alta)

- **Market:** Garden City, NY (New York metro (Long Island/Queens)). **Size:** 7 agentes (RealTrends) - Medium Team.
- **Send via:** Instagram DM: @rafaelchingteam. Alternates: Website form: https://www.rafaelchingteam.com/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: Brivity (PLACE). Source: https://www.rafaelchingteam.com/ (homepage check 2026-10-05)
  - chat_widget: live chat on the website (per research). Source: https://www.rafaelchingteam.com/ (research CSV)
  - valuation: home valuation page. Source: https://www.rafaelchingteam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/rafael-ching-real-estate-team-new-york-keller-williams/ (research CSV)
  - spanish_content: bilingual per research: Sí (se presenta como equipo multilingüe; idiomas concretos n/d). Source: https://www.rafaelchingteam.com/ (research CSV)
- **Opener based on:** chat_widget.

> Hi [name], I noticed you offer chat on your website. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi que ofrecen chat en su web. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 8. The Behfar Team (Alta)

- **Market:** Midwood, Brooklyn, NY (New York metro (Brooklyn)). **Size:** 14 agentes (web) / 15 miembros (perfil Zillow, snippet).
- **Send via:** Instagram DM: @thebehfarteam. Alternates: Email: office@thebehfarteam.com; Contact page: https://www.thebehfarteam.com/contact/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - whatsapp: WhatsApp contact link. Source: https://www.thebehfarteam.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://www.thebehfarteam.com/ (homepage check 2026-10-05)
  - office_hours: office hours listed as Mon–Fri 9–5 (per directories). Source: https://www.thebehfarteam.com/ (research CSV)
  - valuation: home valuation page. Source: https://www.thebehfarteam.com/ (research CSV)
  - spanish_content: bilingual per research: Sí (EN, ES, FR, farsi, hebreo). Source: https://www.thebehfarteam.com/ (research CSV)
- **Opener based on:** whatsapp.

> Hi [name], I noticed you offer WhatsApp as a way to reach the team. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi que ofrecen WhatsApp para contactar al equipo. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 9. The Expansion Team at RE/MAX Edge (Alta)

- **Market:** Brooklyn (Bath Ave / Bay Ridge), NY (New York metro (Brooklyn/Queens/Staten Island)). **Size:** 6 agentes (RealTrends) - Medium Team.
- **Send via:** Instagram DM: @expansionteamnyc. Alternates: Email: info@expansionteamnyc.com; Contact page: https://expansionteamnyc.com/contact/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - sms: "call or text" on the homepage. Source: https://expansionteamnyc.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://expansionteamnyc.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://expansionteamnyc.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-expansion-team-new-york-remax-edge/ (research CSV)
- **Opener based on:** zillow.

> Hi [name], I saw your team presents itself as a Zillow Premier Agent. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 10. Hammond Homes (Michael Hammond Jr.) (Alta)

- **Market:** Collegeville (Montgomery) / Reading, PA (Greater Philadelphia (suburbios)). **Size:** Medium (6–10, RealTrends); 7 agentes en web.
- **Send via:** Instagram DM: @michaelhammondjr. Alternates: Contact page: https://hammond-homes.com/contact-us/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - spanish_content: homepage mentions Spanish ("Spanish"). Source: https://hammond-homes.com/ (homepage check 2026-10-05)
  - lead_platform: Ylopo. Source: https://hammond-homes.com/ (homepage check 2026-10-05)
  - zillow_hiring: job posts / recruiting for Zillow Preferred leads. Source: https://tallo.com/talent/job/sales/real-estate-agent-or-broker/pa/west-chester/zillow-preferred-flex-real-e-4ac5824a (research CSV)
  - valuation: home valuation page. Source: https://hammond-homes.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/hammond-homes-pennsylvania-keller-williams/ (research CSV)
- **Opener based on:** zillow_hiring.

> Hi [name], I saw your team is hiring agents to work Zillow Preferred leads. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi que su equipo está contratando agentes para atender leads de Zillow Preferred. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 11. Premier Home Team (Alta)

- **Market:** Philadelphia, PA (Greater Philadelphia). **Size:** Large (11–20 agentes, categoría RealTrends).
- **Send via:** Instagram DM: @premier.home.team. Alternates: Contact page: https://www.premierhometeam.com/connect.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: Brivity (PLACE). Source: https://www.premierhometeam.com/ (homepage check 2026-10-05)
  - chat_widget: live chat on the website (per research). Source: https://www.premierhometeam.com/ (research CSV)
  - join_leads: join/careers page talks about providing leads to agents. Source: https://www.premierhometeam.com/careers (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/premier-home-team-pennsylvania-keller-williams/ (research CSV)
- **Opener based on:** chat_widget.

> Hi [name], I noticed you offer chat on your website. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 12. The Chris Lawlor Team (Alta)

- **Market:** Easton / Bethlehem, PA (Lehigh Valley). **Size:** Large; 11 agentes (RealTrends).
- **Send via:** Website form: https://chrislawlorteam.com/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://chrislawlorteam.com/ (homepage check 2026-10-05)
  - zillow: mentions Zillow. Source: https://chrislawlorteam.com/ (homepage check 2026-10-05)
  - zillow_hiring: job posts / recruiting for Zillow Flex leads. Source: https://www.indeed.com/viewjob?jk=874df9bd47461d03 (research CSV)
  - valuation: home valuation page. Source: https://chrislawlorteam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-chris-lawlor-team-pennsylvania-coldwell-banker-hearthside/ (research CSV)
- **Opener based on:** zillow_hiring.

> Hi [name], I saw your team is hiring agents to work Zillow Flex leads. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 13. The DiCicco Team (Anthony DiCicco) (Alta)

- **Market:** Newtown, PA (Greater Philadelphia (Bucks)). **Size:** Medium/Small (n/d exacto).
- **Send via:** Contact page: https://diciccosells.com/contact/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - zillow: mentions Zillow Premier Agent. Source: https://diciccosells.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://diciccosells.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/dicicco-team-pennsylvania-keller-williams/ (research CSV)
- **Opener based on:** zillow.

> Hi [name], I saw your team presents itself as a Zillow Premier Agent. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 14. Betancurth Real Estate Group (Media)

- **Market:** Bayonne / Fairfield, NJ (North NJ (Hudson)). **Size:** Large team según RealTrends (11-20); el sitio muestra 5 agentes.
- **Send via:** Contact page: https://bregrealty.com/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - valuation: home valuation page. Source: https://bregrealty.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/betancurth-real-estate-group-new-jersey-the-real-brokerage-inc/ (research CSV)
- **Opener based on:** no_spanish.

> Hi [name], I noticed your homepage is English-only even though you work in Bayonne, and I'm curious how Spanish-speaking inquiries get handled. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 15. Gruosso Group (Media)

- **Market:** Shrewsbury, NJ (Central NJ (Monmouth)). **Size:** Medium team según RealTrends (6-10 agentes).
- **Send via:** Instagram DM: @gruossogroup. Alternates: Contact page: https://www.gruossogroup.com/contact.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - join_leads: join/careers page talks about providing leads to agents. Source: https://www.gruossogroup.com/join (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/gruosso-group-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** join_leads.

> Hi [name], I saw on your join page that lead generation is a big part of how the team works. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 16. Holmquist Group powered by PLACE (Media)

- **Market:** Morristown, NJ (North NJ (Morris)). **Size:** Medium team según RealTrends (6-10 agentes).
- **Send via:** Instagram DM: @theholmquistteam. Alternates: Contact page: https://www.holmquistgroup.com/connect.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: Brivity (PLACE). Source: https://www.holmquistgroup.com/ (homepage check 2026-10-05)
  - join_leads: join/careers page talks about providing leads to agents. Source: https://www.holmquistgroup.com/careers (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/holmquist-group-powered-by-place-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** other_platform.

> Hi [name], I saw your team is powered by PLACE. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 17. Links Residential (Media)

- **Market:** Bergenfield / Montclair, NJ (North NJ (Bergen/Passaic/Hudson)). **Size:** Large team según RealTrends (11-20 agentes).
- **Send via:** Instagram DM: @linksnj. Alternates: Website form: https://linksnj.com/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://linksnj.com/ (homepage check 2026-10-05)
  - other_platform: Luxury Presence. Source: https://linksnj.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://linksnj.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://linksnj.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/links-residential-new-jersey-exp-realty/ (research CSV)
- **Opener based on:** contact_form_only.

> Hi [name], I noticed that, apart from the phone, the main way to reach you on your website is the contact form. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 18. Michael Tejada Real Estate Team (Tejada Team) (Media)

- **Market:** Montclair, NJ (North NJ (Essex/Union)). **Size:** Medium team según RealTrends (6-10 agentes).
- **Send via:** Contact page: https://tejadateam.com/contact.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - lead_platform: Lofty (per research). Source: https://tejadateam.com/ (research CSV)
  - zillow: Zillow profile linked (per research). Source: https://www.realtrends.com/team-profile/michael-tejada-real-estate-team-new-jersey-remax-select/ (research CSV)
  - valuation: home valuation page. Source: https://tejadateam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/michael-tejada-real-estate-team-new-jersey-remax-select/ (research CSV)
- **Opener based on:** lead_platform.

> Hi [name], I noticed your website is built on Lofty, so you clearly put real effort into bringing in new inquiries. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 19. NJ Property Experts (Media)

- **Market:** Westfield, NJ (Central NJ (Union)). **Size:** 12 agentes (RealTrends); Large team.
- **Send via:** Instagram DM: @njpropertyexperts. Alternates: Contact page: https://www.coldwellbankerhomes.com/nj/westfield/team/the-lisa-stafford-team/tid_1400/.
- **Homepage check:** skipped (brokerage portal or social site, not fetched) (2026-10-05).
- **Signals:**
  - zillow: Zillow profile linked (per research). Source: https://www.realtrends.com/team-profile/nj-property-experts-new-jersey-coldwell-banker-realty/ (research CSV)
  - valuation: home valuation page. Source: https://www.coldwellbankerhomes.com/nj/westfield/team/the-lisa-stafford-team/tid_1400/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/nj-property-experts-new-jersey-coldwell-banker-realty/ (research CSV)
- **Opener based on:** zillow.

> Hi [name], I came across your team on Zillow. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 20. The Destination NJ Home Selling Team (Media)

- **Market:** Hillsborough, NJ (Central NJ (Somerset/Middlesex)). **Size:** Medium team según RealTrends (6-10 agentes).
- **Send via:** Instagram DM: @destination.nj. Alternates: Contact page: https://www.destinationnj.com/contact.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - zillow: mentions Zillow. Source: https://destinationnj.com/ (homepage check 2026-10-05)
  - chat_widget: chat widget (LeadConnector) in the page code. Source: https://destinationnj.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://www.destinationnj.com (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-destination-nj-home-selling-team-new-jersey-remax-supreme-the-destination-nj-home-selling-team/ (research CSV)
- **Opener based on:** chat_widget.

> Hi [name], I noticed you offer chat on your website. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 21. The Parlay Group (Media)

- **Market:** Ridgewood / Secaucus, NJ (North NJ (Bergen/Hudson)). **Size:** 12 agentes + 2 staff (HousingWire); Large team según RealTrends.
- **Send via:** Instagram DM: @theparlaygroupre. Alternates: Contact page: https://theparlaygroupre.com/contact.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://theparlaygroupre.com/ (homepage check 2026-10-05)
  - other_platform: Luxury Presence. Source: https://theparlaygroupre.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://theparlaygroupre.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://theparlaygroupre.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-parlay-group-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** contact_form_only.

> Hi [name], I noticed that, apart from the phone, the main way to reach you on your website is the contact form. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 22. Jamie Realty Group (Jamie Zheng Team) (Media)

- **Market:** Flushing, NY (New York metro (Queens)). **Size:** n/d.
- **Send via:** Instagram DM: @jamierealtor_ny. Alternates: Contact page: https://www.jamierealtygroup.com/contact.html.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://www.jamierealtygroup.com/ (homepage check 2026-10-05)
  - spanish_content: homepage mentions Spanish ("Spanish"). Source: https://www.jamierealtygroup.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://www.jamierealtygroup.com/ (homepage check 2026-10-05)
- **Opener based on:** contact_form_only.

> Hi [name], I noticed that, apart from the phone, the main way to reach you on your website is the contact form. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi que, aparte del teléfono, la forma principal de contactarlos en su web es el formulario. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 23. Melanie Kishk Century 21 Team (Media)

- **Market:** Brooklyn (Avenue P), NY (New York metro (Brooklyn)). **Size:** n/d.
- **Send via:** Contact page: https://www.century21.com/real-estate-agent/profile/melanie-kishk-P25405999.
- **Homepage check:** no website in CSV (2026-10-05).
- **Signals:**
  - zillow: team profile with reviews on Zillow (per research). Source: https://www.zillow.com/profile/melaniekishk (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/agent-profile/melanie-kishk-new-york/ (research CSV)
  - spanish_content: bilingual per research: Sí (EN, hebreo, español). Source: n/d (research CSV)
- **Opener based on:** zillow.

> Hi [name], I came across your team's reviews on Zillow. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi las reseñas de su equipo en Zillow. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 24. The Byrne Homes Team (Media)

- **Market:** White Plains, NY (New York metro (Westchester)). **Size:** 5-6 agentes (RealTrends).
- **Send via:** Website form: https://www.westchestercountyresidences.com/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - office_hours: "Office Hours Monday - 9 am-8 pm Tuesday - 9 am-8 pm Wednesday - 9 am-8 pm Thursday - 9 am-". Source: https://www.westchestercountyresidences.com/ (homepage check 2026-10-05)
  - lead_platform: Ylopo. Source: https://www.westchestercountyresidences.com/ (homepage check 2026-10-05)
  - zillow: mentions Zillow. Source: https://www.westchestercountyresidences.com/ (homepage check 2026-10-05)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-byrne-homes-team-new-york-christie-s-int-l-real-estate-group/ (research CSV)
- **Opener based on:** lead_platform.

> Hi [name], I noticed your website is built on Ylopo, so you clearly put real effort into bringing in new inquiries. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 25. The Debbie Carpluk Team (Media)

- **Market:** Massapequa / East Islip, NY (New York metro (Long Island)). **Size:** Large Team (RealTrends; nº exacto n/d).
- **Send via:** Instagram DM: @thecarplukteam. Alternates: Contact page: https://www.carplukteam.com/contact.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-debbie-carpluk-team-new-york-keller-williams/ (research CSV)
- **Opener based on:** realtrends.

> Hi [name], I came across your team on the RealTrends 2026 rankings for NY. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 26. The Evans Llorens (Barriga) Team (Media)

- **Market:** Bayside, NY (New York metro (Queens)). **Size:** 6 (RealTrends) / 10 (bio Elliman).
- **Send via:** Website form: https://www.elliman.com/real-estate-agent/steven-llorens/22997.
- **Homepage check:** skipped (brokerage portal or social site, not fetched) (2026-10-05).
- **Signals:**
  - zillow: Zillow profile linked (per research). Source: https://www.realtrends.com/team-profile/the-evans-llorens-team-new-york-douglas-elliman/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-evans-llorens-team-new-york-douglas-elliman/ (research CSV)
  - spanish_content: bilingual per research: Sí ('multicultural', idiomas n/d). Source: https://www.elliman.com/real-estate-agent/steven-llorens/22997 (research CSV)
- **Opener based on:** zillow.

> Hi [name], I came across your team on Zillow. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi a su equipo en Zillow. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 27. The Galluzzo Team (Media)

- **Market:** Dix Hills (Suffolk), NY (New York metro (Long Island)). **Size:** 4 (web) - Small Team (RealTrends).
- **Send via:** Instagram DM: @thegalluzzoteam_longislandny. Alternates: Website form: https://galluzzoteam.com/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://galluzzoteam.com/ (homepage check 2026-10-05)
  - other_platform: Luxury Presence. Source: https://galluzzoteam.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://galluzzoteam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-galluzzo-team-new-york-compass/ (research CSV)
- **Opener based on:** contact_form_only.

> Hi [name], I noticed that, apart from the phone, the main way to reach you on your website is the contact form. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 28. The Goldbar Team (Juan Barreneche) (Media)

- **Market:** Long Island City, Queens, NY (New York metro (Queens/Long Island)). **Size:** n/d.
- **Send via:** Instagram DM: @goldbarluxuryhomes. Alternates: Instagram DM: @latinoagent; Website form: https://www.goldbarteam.com/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - zillow: Zillow profile linked (per research). Source: https://www.zillow.com/profile/goldbarteam (research CSV)
  - join_leads: join/careers page talks about providing leads to agents. Source: https://www.joingoldbar.com/ (research CSV)
  - spanish_content: bilingual per research: Sí (líder es presidente de NAHREP Queens; marca @latinoagent). Source: https://www.goldbarteam.com/ (redirige a joingoldbar.com) (research CSV)
- **Opener based on:** zillow.

> Hi [name], I came across your team on Zillow. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi a su equipo en Zillow. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 29. The Tony Murphy Sales Team (Media)

- **Market:** Yonkers, NY (New York metro (Westchester/Bronx)). **Size:** n/d.
- **Send via:** Website form: https://www.houlihanlawrence.com/bio/thetonymurphysalesteam.
- **Homepage check:** skipped (brokerage portal or social site, not fetched) (2026-10-05).
- **Signals:**
  - zillow: Zillow profile linked (per research). Source: https://www.zillow.com/profile/tmurphyrealtor (research CSV)
- **Opener based on:** zillow.

> Hi [name], I came across your team on Zillow. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 30. The Zappulla Team (Media)

- **Market:** New Dorp, Staten Island, NY (New York metro (Staten Island)). **Size:** n/d (equipo familiar).
- **Send via:** Facebook page message: https://www.facebook.com/ZappullaTeam/.
- **Homepage check:** no website in CSV (2026-10-05).
- **Signals:**
  - zillow: team profile with reviews on Zillow (per research). Source: https://www.zillow.com/profile/PZappulla2013 (research CSV)
- **Opener based on:** zillow.

> Hi [name], I came across your team's reviews on Zillow. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 31. Jason Rodriguez Realty Team (Media)

- **Market:** Philadelphia (NE Philly), PA (Greater Philadelphia). **Size:** Small; 2 agentes (RealTrends).
- **Send via:** Website form: https://www.jasonrodriguezteam.com/.
- **Homepage check:** blocked (HTTP 403) (2026-10-05).
- **Signals:**
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/jason-rodriguez-realty-team-pennsylvania-remax-affiliates/ (research CSV)
  - spanish_content: bilingual per research: Sí (español y portugués). Source: https://www.jasonrodriguezteam.com/ (research CSV)
- **Opener based on:** realtrends.

> Hi [name], I came across your team on the RealTrends 2026 rankings for PA. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi a su equipo en los rankings de RealTrends 2026 de PA. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 32. Philly Home Girls (Media)

- **Market:** Philadelphia, PA (Greater Philadelphia). **Size:** Large; 16 agentes (RealTrends).
- **Send via:** Instagram DM: @phillyhomegirls. Alternates: Contact page: https://www.phillyhomegirls.com/contact-us.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - valuation: home valuation page. Source: https://www.phillyhomegirls.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/philly-home-girls-pennsylvania-elfant-wissahickon-realtors/ (research CSV)
- **Opener based on:** no_spanish.

> Hi [name], I noticed your homepage is English-only even though you work in Philadelphia, and I'm curious how Spanish-speaking inquiries get handled. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 33. The Eric Leadbetter Team (Media)

- **Market:** Bethlehem, PA (Lehigh Valley). **Size:** Large; 15 agentes (RealTrends).
- **Send via:** Instagram DM: @theericleadbetterteam. Alternates: Contact page: https://theericleadbetterteam.com/contact/.
- **Homepage check:** blocked (HTTP 403) (2026-10-05).
- **Signals:**
  - zillow: team profile with reviews on Zillow (per research). Source: https://www.realtrends.com/team-profile/the-eric-leadbetter-team-pennsylvania-coldwell-banker-hearthside/ (research CSV)
  - valuation: home valuation page. Source: https://theericleadbetterteam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-eric-leadbetter-team-pennsylvania-coldwell-banker-hearthside/ (research CSV)
- **Opener based on:** zillow.

> Hi [name], I came across your team's reviews on Zillow. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 34. The Rosa Ylonka Perez Team (Media)

- **Market:** Allentown, PA (Lehigh Valley). **Size:** Large (11–20, categoría RealTrends).
- **Send via:** Contact page: https://rosaylonkaperez.ironvalleyrealestate.com/.
- **Homepage check:** blocked (HTTP 403) (2026-10-05).
- **Signals:**
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-rosa-ylonka-perez-team-pennsylvania-iron-valley-real-estate-of-lehigh-valley/ (research CSV)
  - spanish_content: bilingual per research: Sí (español). Source: https://rosaylonkaperez.ironvalleyrealestate.com/ (research CSV)
- **Opener based on:** realtrends.

> Hi [name], I came across your team on the RealTrends 2026 rankings for PA. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi a su equipo en los rankings de RealTrends 2026 de PA. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 35. Venture Philly Group (Media)

- **Market:** Philadelphia, PA (Greater Philadelphia). **Size:** Large; 19 agentes (RealTrends).
- **Send via:** Instagram DM: @venturephilly. Alternates: Contact page: https://www.venturephilly.com/contact-us-2/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://www.venturephilly.com/ (homepage check 2026-10-05)
  - zillow: mentions Zillow. Source: https://www.venturephilly.com/ (homepage check 2026-10-05)
  - join_leads: join/careers page talks about providing leads to agents. Source: https://www.venturephilly.com/join-our-team (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/venture-philly-pennsylvania-keller-williams/ (research CSV)
- **Opener based on:** no_spanish.

> Hi [name], I noticed your homepage is English-only even though you work in Philadelphia, and I'm curious how Spanish-speaking inquiries get handled. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 36. LuxeLife Group powered by PLACE (Baja)

- **Market:** Millburn / Short Hills, NJ (North NJ (Essex)). **Size:** Large team según RealTrends (11-20 agentes).
- **Send via:** Instagram DM: @luxelifegroup. Alternates: Contact page: https://luxeliferealestategroup.com/connect.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: Brivity (PLACE). Source: https://www.luxeliferealestategroup.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://www.luxeliferealestategroup.com/ (homepage check 2026-10-05)
  - join_leads: join/careers page talks about providing leads to agents. Source: https://luxeliferealestategroup.com/careers-with-us (research CSV)
  - valuation: home valuation page. Source: https://luxeliferealestategroup.com (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/luxelife-group-powered-by-place-new-jersey-exp-realty/ (research CSV)
- **Opener based on:** other_platform.

> Hi [name], I saw your team is powered by PLACE. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 37. Opulent Living Team (Baja)

- **Market:** Hoboken, NJ (North NJ (Hudson)). **Size:** Large team según RealTrends (11-20 agentes).
- **Send via:** Instagram DM: @maryanskigroup. Alternates: Contact page: https://www.opulentlivingteam.com/connect.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: Brivity (PLACE). Source: https://www.opulentlivingteam.com/ (homepage check 2026-10-05)
  - zillow: Zillow profile linked (per research). Source: https://www.realtrends.com/team-profile/opulent-living-team-new-jersey-keller-williams/ (research CSV)
  - join_leads: join/careers page talks about providing leads to agents. Source: https://www.opulentlivingteam.com/careers (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/opulent-living-team-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** other_platform.

> Hi [name], I saw your team is powered by PLACE. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 38. Premiere Home Group (Stefanie Prettyman) (Baja)

- **Market:** Pennington, NJ (Central NJ (Mercer)). **Size:** Medium team según RealTrends (6-10 agentes).
- **Send via:** Instagram DM: @stefsells_nj. Alternates: Contact page: https://www.premierehomegroup.com/connect.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: PLACE / Brivity. Source: https://blog.premierehomegroup.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/premiere-home-group-new-jersey-the-real-brokerage-inc/ (research CSV)
- **Opener based on:** other_platform.

> Hi [name], I saw your team is powered by PLACE. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 39. Radius Realty Group (Baja)

- **Market:** Westfield, NJ (Central NJ (Union/Middlesex)). **Size:** 11 agentes (RealTrends); Large team.
- **Send via:** Contact page: https://www.radiusrealtynj.com/connect.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: Brivity (PLACE). Source: https://www.radiusrealtynj.com/ (homepage check 2026-10-05)
  - zillow: Zillow profile linked (per research). Source: https://www.realtrends.com/team-profile/radius-realty-group-new-jersey-keller-williams/ (research CSV)
  - join_leads: join/careers page talks about providing leads to agents. Source: https://www.radiusrealtynj.com/careers (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/radius-realty-group-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** other_platform.

> Hi [name], I saw your team is powered by PLACE. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 40. Target Team (Baja)

- **Market:** Woodcliff Lake, NJ (North NJ (Bergen)). **Size:** Medium team según RealTrends (6-10 agentes).
- **Send via:** Instagram DM: @thetargetteam. Alternates: Contact page: https://www.targetreteam.com/connect.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: Brivity (PLACE). Source: https://www.targetreteam.com/ (homepage check 2026-10-05)
  - chat_widget: live chat on the website (per research). Source: https://www.targetreteam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/target-team-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** chat_widget.

> Hi [name], I noticed you offer chat on your website. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 41. Urban Coast Group (Baja)

- **Market:** Hoboken, NJ (North NJ (Hudson)). **Size:** 11 agentes (RealTrends); Large team.
- **Send via:** Contact page: https://www.urbancoastgroup.com/contact.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - other_platform: Brivity (PLACE). Source: https://www.urbancoastgroup.com/ (homepage check 2026-10-05)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/urban-coast-group-new-jersey-keller-williams/ (research CSV)
- **Opener based on:** other_platform.

> Hi [name], I noticed your website runs on Brivity. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 42. City Block Team (Jeff Block) (Baja)

- **Market:** Philadelphia, PA (Greater Philadelphia). **Size:** Large (11–20 agentes, categoría RealTrends).
- **Send via:** Instagram DM: @cityblockteam. Alternates: Contact page: https://cityblockteam.com/contact-us/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://cityblockteam.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://cityblockteam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/city-block-team-pennsylvania-compass/ (research CSV)
- **Opener based on:** no_spanish.

> Hi [name], I noticed your homepage is English-only even though you work in Philadelphia, and I'm curious how Spanish-speaking inquiries get handled. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 43. Jim Romano and the Suburbs2City Team (Baja)

- **Market:** Blue Bell / Lafayette Hill, PA (Greater Philadelphia (Montgomery)). **Size:** Small; 5 agentes (RealTrends).
- **Send via:** Instagram DM: @suburbs2cityteam. Alternates: Contact page: https://suburbs2city.com/contact/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - valuation: home valuation page. Source: https://suburbs2city.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/the-suburbs2city-team-pennsylvania-keller-williams/ (research CSV)
- **Opener based on:** valuation.

> Hi [name], I came across your home valuation page while looking at teams in Blue Bell. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 44. Lehigh Valley Just Listed (Baja)

- **Market:** Northampton, PA (Lehigh Valley). **Size:** 9 agentes (web).
- **Send via:** Contact page: https://www.lehighvalleyjustlisted.com/about/.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - spanish_content: Spanish text on the homepage ("Casas en venta"). Source: https://www.lehighvalleyjustlisted.com/ (homepage check 2026-10-05)
  - lead_platform: Real Geeks. Source: https://www.lehighvalleyjustlisted.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://www.lehighvalleyjustlisted.com/ (research CSV)
- **Opener based on:** lead_platform.

> Hi [name], I noticed your website is built on Real Geeks, so you clearly put real effort into bringing in new inquiries. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

> Hola [nombre], vi que su web está hecha con Real Geeks, así que se nota que invierten en atraer consultas nuevas. Tengo un pequeño estudio de software y estoy investigando cómo los equipos inmobiliarios manejan las consultas nuevas, sobre todo de noche, los fines de semana y por Instagram o WhatsApp. No le voy a vender nada: solo me serviría mucho su consejo durante 15 minutos. ¿Le queda bien el [mar 4pm] o el [jue 11am]?

### 45. Solara (Baja)

- **Market:** Philadelphia, PA (Greater Philadelphia). **Size:** Large; 14 agentes (RealTrends).
- **Send via:** Contact page: https://solarateam.com/contact.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - contact_form_only: contact form on the homepage; no chat, WhatsApp or text option in the page code. Source: https://solarateam.com/ (homepage check 2026-10-05)
  - other_platform: Luxury Presence. Source: https://solarateam.com/ (homepage check 2026-10-05)
  - zillow: links to a Zillow profile. Source: https://solarateam.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://solarateam.com/ (research CSV)
  - realtrends: listed in RealTrends 2026 team rankings. Source: https://www.realtrends.com/team-profile/solara-pennsylvania-keller-williams/ (research CSV)
- **Opener based on:** no_spanish.

> Hi [name], I noticed your homepage is English-only even though you work in Philadelphia, and I'm curious how Spanish-speaking inquiries get handled. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

### 46. South Philly Real Estate Team (Vinny Fracassi) (Baja)

- **Market:** Philadelphia (South Philly), PA (Greater Philadelphia). **Size:** n/d.
- **Send via:** Instagram DM: @southphillyvinny. Alternates: Contact page: https://www.southphillyrealestateteam.com/contact-us.
- **Homepage check:** ok (2026-10-05).
- **Signals:**
  - sms: "Call or Text" on the homepage. Source: https://www.southphillyrealestateteam.com/ (homepage check 2026-10-05)
  - valuation: home valuation page. Source: https://www.southphillyrealestateteam.com/ (research CSV)
- **Opener based on:** no_spanish.

> Hi [name], I noticed your homepage is English-only even though you work in Philadelphia, and I'm curious how Spanish-speaking inquiries get handled. I run a small software studio and I'm researching how real estate teams handle new inquiries, especially nights, weekends and Instagram/WhatsApp messages. There's no pitch here; I'd just value your advice for 15 minutes. Would [Tue 4pm] or [Thu 11am] work?

## No public channel in the CSV (5)

Find a business Instagram or a contact page by hand before drafting.

- The Forray Team (Baja), Williamsburg, Brooklyn, NY (New York metro (Brooklyn)). Source: https://www.realtrends.com/team-profile/the-forray-team-new-york-corcoran/
- The Gold Team (Baja), New York (Manhattan), NY (New York metro (Manhattan)). Source: https://www.realtrends.com/team-profile/the-gold-team-new-york-corcoran/
- The Hackett Home Team at Compass (Baja), Bronxville, NY (New York metro (Westchester)). Source: https://www.realtrends.com/team-profile/the-hackett-home-team-at-compass-new-york-compass/
- The Schiff Team (Baja), Long Island City, NY (New York metro (Queens)). Source: https://www.realtrends.com/team-profile/the-schiff-team-new-york-douglas-elliman/
- Totally Westchester Team at Compass (Baja), Scarsdale, NY (New York metro (Westchester)). Source: https://www.realtrends.com/team-profile/totally-westchester-team-at-compass-new-york-compass/

## Excluded: clearly over ~15 agents (10)

Likely buyers, but outside the 3–15 agent target and a longer sale. No drafts; revisit only if the first interviews point to larger teams.

- **Unify Real Estate Team** (Alta), Cranford, NJ. Size: Enterprise team según RealTrends (51+ agentes). Channel: Instagram DM: @stunningnjhomes.
- **Gary Mercer Team** (Alta), West Chester, PA. Size: Mega (RealTrends); 11 agentes según perfil web. Channel: Instagram DM: @sharramercer.
- **Q&U Team (Eli Qarkaxhia Team)** (Alta), Philadelphia, PA. Size: Mega (RealTrends); 3 oficinas (Center City, Main Line, South Jersey). Channel: Contact page: https://qanduteam.com/contact-us.
- **Rowack Real Estate Team** (Media), Monroe, NJ. Size: Enterprise team (RealTrends 51+); ~70 agentes según directorios. Channel: Contact page: https://www.rowackrealestateteam.com/contactus/.
- **The Alliance Team (Vincent Koo Team)** (Media), Forest Hills, Queens, NY. Size: n/d (equipo 'Mega Icon' de eXp; estimación: grande). Channel: Instagram DM: @allianceallin.
- **The Cliff Lewis Experience** (Media), Allentown, PA. Size: Mega; 55 agentes + 10 de soporte (web). Channel: Instagram DM: @clifflewisexperience.
- **The Mike McCann Team** (Media), Philadelphia, PA. Size: Mega; 28 agentes (RealTrends); #1 PA por volumen. Channel: Instagram DM: @themccannteam.
- **Tom Toole Sales Group** (Media), West Chester, PA. Size: Mega; ~70+ agentes (web). Channel: Instagram DM: @tomtoolesalesgroup.
- **Jason Mitchell Group (oficina NY)** (Baja), Staten Island, NY. Size: Enterprise (nacional, 22 estados). Channel: Website form: https://www.mitchellgroupny.com/.
- **The Rarity Real Estate Team (Jim Roche)** (Baja), Philadelphia, PA. Size: Enterprise; 50+ agentes (web). Channel: Contact page: https://rarityre.com/contact.
