# GMG catalog sync from We Sell Cellular

Research date: 2026-10-05. Web research only (public pages and the public Help Center). Nobody was contacted and no account was created.

**Client:** Global Merchants Group (GMG), https://theglobalmerchantsgroup.com. B2B wholesaler of inspected used and refurbished phones. The site runs on Next.js + Sanity, and the catalog is edited by hand.
**Fact from the owner:** GMG's inventory "lives in" We Sell Cellular (WSC), https://www.wesellcellular.com.
**Goal:** an add-on that keeps the website catalog in sync with that inventory automatically.

## TL;DR

- **WSC has no public API.** There are no developer docs, no API, no feed program, no dropship or reseller program and no integrations with Shopify, eBay or anything else mentioned anywhere on its site or in its Help Center (66 articles).
- **WSC does offer two spreadsheet outputs to logged-in buyers.**
  1. **Stock list export:** an Export button on the stock list downloads the entire list, or only the filtered view, as an **.xls** file.
  2. **Daily Stock Report:** an opt-in email with an **XLSX** attachment, sent early morning ET, Monday to Friday. It covers **only new stock and lower prices since yesterday**. It is a delta, not the full inventory.
- **WSC is a distributor that sells its own stock.** It buys from carriers and OEMs and grades the devices in Edgewood, NY. It is not a marketplace that hosts other sellers' inventory, so GMG is almost certainly a **buyer** there.
- **WSC's Terms of Use forbid** bots, scraping and republishing site material. A public catalog built straight from WSC's stock list, with WSC's prices and photos, carries contractual risk. GMG's own prices and our own copy are much safer.
- **Recommended path:** GMG exports a spreadsheet (from WSC or from its own records), and the add-on imports it into Sanity with mapping, markup and a preview step. The import can be a manual upload or come in by email. Before we quote, we need to know what "lives in WSC" means for them.

## 1. Does WSC offer an API, feed or export?

| Channel | Exists? | Details | Source |
|---|---|---|---|
| REST / developer API | **No evidence** | Not mentioned on the site, in the Help Center or in third-party profiles. Searches for "We Sell Cellular API" only return eBay and Amazon feed APIs. | [Home](https://www.wesellcellular.com/), [About](https://www.wesellcellular.com/about), [Help Center](https://wesellcellular.zendesk.com/hc/en-us) |
| Stock list export (.xls) | **Yes** | "From the stock list, select the export button and choose to export the entire stock list, or only what you are filtered on." Downloads as .xls. Manual, requires login. | [Can I export your stock list?](https://wesellcellular.zendesk.com/hc/en-us/articles/360022153592-Can-I-export-your-stock-list) |
| Daily Stock Report (XLSX by email) | **Yes, opt-in** | Email with an XLSX attachment of **new stock and lower prices since yesterday**, early morning ET, Mon to Fri. Opt in via the stock list's DAILY REPORT link. | [Daily Stock Report](https://wesellcellular.zendesk.com/hc/en-us/articles/360037714731-How-can-I-opt-in-to-a-daily-report-of-new-inventory-and-lower-prices-Daily-Stock-Report) |
| Stock Alerts (email) | Yes | Per-device email alerts when new units arrive. These are notifications, not data. | [Stock Alerts](https://wesellcellular.zendesk.com/hc/en-us/articles/360032184051-How-can-I-get-an-Alert-when-devices-I-want-are-added) |
| IMEI list per order | Yes | Downloadable from the order detail page once an order has shipped. This list covers what GMG actually **bought**. | [IMEI list](https://wesellcellular.zendesk.com/hc/en-us/articles/360022162792-Is-an-IMEI-list-available-for-my-order) |
| Order invoices | Yes | Downloadable per order. | Help Center article list ("Where can I download an invoice for my order?") |
| Bulk offer import (upload) | Yes, inbound only | Buyers can upload a spreadsheet of offers. This goes into WSC, not out of it. | [Import Offers](https://wesellcellular.zendesk.com/hc/en-us/articles/9673380584852-New-You-Can-Import-Offers) |
| Integrations / dropship / reseller program | **No evidence** | Nothing on the site or in the Help Center. | [About](https://www.wesellcellular.com/about) |

Other relevant facts:

- Inventory and pricing are visible only to **verified accounts**. Buyers need resale or tax-exemption documents and a business license. Stock is grouped by category, lock status, grade, manufacturer, model, capacity and carrier, each group with a quantity and a minimum price. ([How do I view pricing?](https://wesellcellular.zendesk.com/hc/en-us/articles/360022344091-How-do-I-view-pricing), [How can I see your stock list?](https://wesellcellular.zendesk.com/hc/en-us/articles/360022153452-How-can-I-see-your-stock-list))
- The stock list "is updated throughout the day". ([How often is your inventory updated?](https://wesellcellular.zendesk.com/hc/en-us/articles/360022153472-How-often-is-your-inventory-updated))
- The buyer portal is https://buy.wesellcellular.com/. The marketing site runs on Wix.

## 2. Relationship model: is GMG a buyer, or does WSC host its stock?

WSC says it "purchase[s] used phones directly from major carriers and manufacturers" and tests and grades them in its own warehouse. It sells that stock to "small retailers, repair shops, wholesalers, refurbishers, and smaller distributors". We found no consignment, seller or third-party-inventory program. ([About](https://www.wesellcellular.com/about), [Wireless Dealer Magazine](https://wirelessdealermagazine.com/we-sell-cellular-streamlines-the-buying-process-for-small-buyers/))

So **GMG is a WSC buyer.** "Our inventory lives in WSC" most likely means one of these:

- **(a) Sourcing catalog (most likely).** GMG's sellable catalog is effectively WSC's stock list. GMG quotes its own customers from it and buys from WSC when an order comes in, a kind of virtual stock. The website would then show **WSC stock resold at GMG's prices**.
- **(b) Purchased lots.** GMG buys lots at WSC, and its order history (IMEI lists, invoices) is the record of what it owns. The website would show **GMG's own stock**, which came from WSC.

The public GMG site today shows iPhone 14 to 16 models with fixed prices ($499 to $1,199). It shows no quantities and no grades and does not mention WSC. That fits a curated, hand-priced list better than a mirror of a live feed.

**This has to be confirmed with GMG.** It decides both the data source and the terms risk.

## 3. Terms: scraping and republishing

WSC [Terms of Use](https://www.wesellcellular.com/terms-of-use):

- **Prohibited uses:** you may not "use any robot, spider, or other automatic device, process, or means to access the Site for any purpose, including monitoring or copying any of the material on the Site". Manual copying or monitoring "not expressly authorized" is also prohibited without written consent.
- **Intellectual property:** you may not "reproduce, distribute, modify, create derivative works of, publicly display ... republish, download, store, or transmit" site material. Narrow exceptions cover cache, printing and one copy for evaluation. There is also a ban on using the site "for any commercial gain for purposes of competing with the Company". Using photos or graphics apart from their accompanying text is prohibited too.
- The [Terms of Sale](https://www.wesellcellular.com/terms-of-sale) do not restrict reselling the devices themselves. Resale is the whole point, and buyers must file resale certificates. Device brand names belong to their owners.

Implications:

- **Scraping buy.wesellcellular.com is clearly against the ToS.** Logging in with GMG's credentials from a bot is just as forbidden, and it puts GMG's buyer account at risk.
- **Republishing WSC's stock list wholesale** (its listings, its prices, its photos) on a public site arguably counts as "republish / publicly display". It also exposes GMG's supplier and margin to competitors. Using the export file is something WSC itself offers, but the ToS still bars republishing its *material*.
- **Lower-risk pattern:** publish GMG's own product records with **GMG's prices** (markup applied), our own or manufacturer-neutral photos, and generic model, grade and capacity data, with quantities shown only if GMG wants. Facts like "iPhone 13, 128 GB, Grade A, 40 units" are not WSC's copyrighted material. The exact layout, photos and prices are.
- If GMG wants to mirror WSC stock closely, it should **ask its WSC rep for written OK**. The ToS refer to "prior written consent". The rep may also know of a feed that isn't public.
- Not legal advice. GMG should decide, ideally after a quick check with its rep.

## 4. Integration options, ranked by feasibility

| # | Option | Feasibility | Effort (our side) | Risks |
|---|---|---|---|---|
| 1 | **Bulk spreadsheet importer in Sanity.** GMG uploads the WSC .xls export, or their own sheet. We map columns, apply markup rules, show a diff preview and publish. | **High.** Works today with what WSC offers. | ~2–4 days: a Studio tool or small upload page, XLS/XLSX/CSV parsing (SheetJS), model normalization, upsert by key, preview, and marking missing items as sold out. | Manual step. Freshness depends on GMG uploading, which can be daily or a few times a week. If WSC changes its column format the mapping breaks, so the parser should be tolerant. ToS risk is low if we publish GMG's prices and our photos. |
| 2 | **Scheduled import by email.** GMG forwards the export, or opts into the Daily Stock Report and auto-forwards it, to an inbound address such as `gmg-stock@…` (e.g. a Cloudflare Email Worker). We parse the attachment and run the same importer. | **Medium-high.** | +1–2 days on top of #1. | The Daily Stock Report is a **delta** (new stock and price drops only). It does not report items that sold out, so stale listings pile up unless GMG also sends a full export from time to time, e.g. weekly. Needs an auto-forward rule in GMG's mailbox, which they set up themselves. Breaks quietly if forwarding stops, so we should alert when no file arrives. |
| 3 | **Email parsing of the body of daily lists or alerts.** | Low. Same source as #2 but more fragile. | 1–2 days | Only worth it if no attachment exists. The XLSX attachment already exists, so it is better to use #2. |
| 4 | **Official API.** | **Not available publicly.** | n/a until one exists | Worth one question to the WSC rep. If one shows up, we'd swap the importer's source and keep everything downstream. |
| 5 | **Scraping buy.wesellcellular.com.** | Technically possible, **not recommended.** | 2–4 days + ongoing upkeep | **Explicitly prohibited** by the Terms of Use (robots, spiders, automated monitoring and copying). It would use GMG's buyer credentials and could get their account suspended. The portal requires login and changes without notice. **We should not offer it.** |

**Recommendation:** build #1 first (the importer is the core), then add #2 as the "automatic" upgrade. Use a full export at least weekly, plus the daily delta if they want.

**Pricing fit:** about $500 one-time covers #1 + #2. The monthly fee covers the inbound mailbox, monitoring and alerts, mapping fixes when WSC changes columns, and support for the current site.

**Data model notes for Sanity:** key each product by model + capacity + grade + lock status/carrier. Keep `wscGroupKey` and `lastSeenAt` fields. Rows missing from the last *full* import become `available=false` instead of being deleted. Keep GMG's own price fields (`markupPct` or a manual override) separate from the imported cost. Never publish the raw WSC cost.

## 5. Questions to ask GMG

1. When you say the inventory is in We Sell Cellular, do you show your customers what WSC has in stock (and buy when an order comes in), or only what you have already bought there?
2. Can your account export the stock list to Excel (there's an Export button on the stock list), and do you get the Daily Stock Report by email? Has your rep ever offered you API access or a feed?
3. (Optional) How do you set your web prices: a fixed percentage over the WSC price, or by hand?

## Suggested message (Spanish)

> ¡Hola Felix y Karina! Muchas gracias por la cena de ayer y por la invitación. Alejandra y yo la pasamos muy bien.
>
> Estuve viendo lo de conectar el catálogo de la web con We Sell Cellular para que se actualice solo. Para saber cuál es la mejor forma, tengo dos preguntas:
>
> 1. En su cuenta de We Sell Cellular, ¿pueden descargar el inventario en Excel/CSV (en la lista de stock hay un botón de "Export") o reciben el reporte diario por correo? ¿Alguna vez les ofrecieron acceso a API?
> 2. Lo que quieren mostrar en la web, ¿es lo que We Sell Cellular tiene disponible (y ustedes compran cuando les piden) o solo lo que ustedes ya compraron?
>
> Si se puede conectar, serían unos $500 de configuración inicial más $100 al mes, que también incluye el soporte del sitio actual. ¡Quedo atento!

## Sources

- WSC home: https://www.wesellcellular.com/
- WSC about: https://www.wesellcellular.com/about
- WSC Terms of Use: https://www.wesellcellular.com/terms-of-use
- WSC Terms of Sale: https://www.wesellcellular.com/terms-of-sale
- WSC Help Center: https://wesellcellular.zendesk.com/hc/en-us (the full article list was checked through Zendesk's public Help Center API, `/api/v2/help_center/en-us/articles.json`)
  - Export stock list: https://wesellcellular.zendesk.com/hc/en-us/articles/360022153592-Can-I-export-your-stock-list
  - Daily Stock Report: https://wesellcellular.zendesk.com/hc/en-us/articles/360037714731-How-can-I-opt-in-to-a-daily-report-of-new-inventory-and-lower-prices-Daily-Stock-Report
  - Stock Alerts: https://wesellcellular.zendesk.com/hc/en-us/articles/360032184051-How-can-I-get-an-Alert-when-devices-I-want-are-added
  - View pricing: https://wesellcellular.zendesk.com/hc/en-us/articles/360022344091-How-do-I-view-pricing
  - See stock list: https://wesellcellular.zendesk.com/hc/en-us/articles/360022153452-How-can-I-see-your-stock-list
  - Inventory updates: https://wesellcellular.zendesk.com/hc/en-us/articles/360022153472-How-often-is-your-inventory-updated
  - IMEI list: https://wesellcellular.zendesk.com/hc/en-us/articles/360022162792-Is-an-IMEI-list-available-for-my-order
  - Import offers: https://wesellcellular.zendesk.com/hc/en-us/articles/9673380584852-New-You-Can-Import-Offers
- Wireless Dealer Magazine on WSC: https://wirelessdealermagazine.com/we-sell-cellular-streamlines-the-buying-process-for-small-buyers/
- GMG site: https://theglobalmerchantsgroup.com
