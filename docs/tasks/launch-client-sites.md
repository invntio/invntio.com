# Task: show the client sites (OBJURI, AJMG) on invntio.com

Two client sites run on Invntio's multi-tenant platform (repo `invntio-sites`, Payload CMS on Vercel). Their
entries already exist in the "Live now" register data in `src/i18n/ui.ts`, with `hidden: true`. The
"Products and clients" page (`/work`, `/es/work`) exists but is unlisted.

CGD was dropped; AJMG replaced it.

| Site | Organization | Tenant | Planned domain | Status (Sept 2026) |
| --- | --- | --- | --- | --- |
| OBJURI | Observatorio Global de Ciencias Jurídicas (Santo Domingo, República Dominicana) | `objuri` | objuri.com (client has not bought or delegated it yet) | Real content loaded; frontend redesign in progress. Preview only: https://invntio-sites-ten.vercel.app/?sitio=objuri |
| AJMG | Asociación de Jueces y Magistrados de Guatemala | `ajmg` | Not decided | Provisional content. Preview only: https://invntio-sites-ten.vercel.app/?sitio=ajmg |

OBJURI and AJMG have a formal cooperation agreement, which the portfolio may mention.

## Rules

- **Show a site only once it is live on its own domain.** Never link the Vercel preview URL.
- **AJMG: ask the owner before listing it.** The client relationship is confirmed, but consent to appear in the
  portfolio is not.
- Launch each site independently. When a site launches, update the table above. When both have launched, delete
  this file and its line in `CLAUDE.md`.

## Steps (per site)

1. **Check that it is live:** `curl -sL -o /dev/null -w '%{http_code}\n' https://<domain>`. Open it once to confirm
   it is the real site, not a parked domain or placeholder.
2. **Register entry**, in `src/i18n/ui.ts`, in BOTH `en` and `es`:
   - Set `url` and `domain` to the final values (AJMG currently has empty strings).
   - Remove `hidden: true`.
   - Review the `what` text. Approved descriptions:
     - OBJURI EN: "Institutional site for a legal-research observatory: international congresses, news, articles and academic alliances."
     - OBJURI ES: "Sitio institucional de un observatorio de ciencias jurídicas: congresos internacionales, noticias, artículos y alianzas académicas."
     - AJMG EN: "Institutional site for Guatemala's association of judges and magistrates: events, news, board, membership and documents."
     - AJMG ES: "Sitio institucional de la Asociación de Jueces y Magistrados de Guatemala: eventos, noticias, junta directiva, membresía y documentos."
     The register rows are short; use a shorter form there if the full sentence wraps badly.
   - Order: client work first, then own products. If the home register gets long (6+ rows), ask the owner whether
     to show a subset there and link to `/work` for the rest.
3. **Launch `/work`** (only with the first client launch):
   - `src/components/WorkPage.astro`: remove the `noindex` prop and the "not linked yet" comment.
   - `astro.config.mjs`: sitemap `filter` → `(page) => !/\/(es\/)?404\/?$/.test(page)`.
   - Add a "See all work" / "Ver todo el trabajo" link under the register in `src/components/Hero.astro` (strings in
     `src/i18n/ui.ts`, both languages, `localizePath("/work", lang)`), and optionally in the footer.
4. **Verify:** `npx astro check` → 0 errors; `npm run build`; the site appears on the home and `/work` with the live
   mark (the deploy-time check in `src/lib/build-info.ts` shows ○ if it did not respond); `dist/client/llms.txt`
   lists it; after the first launch, `dist/client/sitemap-0.xml` includes `/work/` and `/es/work/`.
5. **Monitoring:** tell the owner to add the domain to UptimeRobot (public status page linked in the footer).
6. **Publish:** commit on a branch and ask the owner before merging to `main`. **Pushing to `main` deploys to
   production.**
