# Task: launch OBJURI and CGD on invntio.com

**Trigger:** do this only when both client sites are live: https://objuri.com and https://cambioglobalcgd.com
respond with HTTP 200 and show the real sites (not a placeholder or parked domain).
If only one is live, launch that one and leave this task open for the other.

**When finished:** delete this file and remove its line from the "Pending tasks" list in `CLAUDE.md`,
in the same commit as the launch.

## Context

- OBJURI (Observatorio Global de Ciencias Jurídicas) and CGD (Cambio Global para el Desarrollo) are client
  sites built by Invntio (multi-tenant Payload CMS, repo `invntio-sites`).
- Their entries already exist in the "Live now" register data, hidden with `hidden: true`.
- The "Products and clients" page (`/work`, `/es/work`) exists but is unlisted: `noindex`, excluded from the
  sitemap and not linked anywhere. It launches together with these clients.

## Steps

1. **Check the sites are live:**
   `curl -sL -o /dev/null -w '%{http_code}\n' https://objuri.com` (same for `https://cambioglobalcgd.com`).
   Open each once to confirm it is the real site. If the final domain differs (for example
   `cambioglobalparaeldesarrollo.com`), update `url` and `domain` accordingly.
2. **Show them in the register:** in `src/i18n/ui.ts`, in BOTH the `en` and `es` dictionaries, change
   `hidden: true` to `hidden: false` (or remove the property) for the OBJURI and CGD items. Review the `what`
   descriptions with the owner if unsure. Order: client work first, then own products.
   The home register shows every visible item; if the list feels long (6+ rows), ask the owner whether the home
   should show only a subset and link to `/work` for the rest.
3. **Launch `/work`:**
   - `src/components/WorkPage.astro`: remove the `noindex` prop from `<Layout …>` and the comment saying it is
     not linked yet.
   - `astro.config.mjs`: in the sitemap `filter`, remove `work` so the regex only excludes `404`:
     `filter: (page) => !/\/(es\/)?404\/?$/.test(page),`
   - Link it: add a "See all work" / "Ver todo el trabajo" link under the register in `src/components/Hero.astro`
     (strings go in `src/i18n/ui.ts`, both languages, using `localizePath("/work", lang)`), and optionally a
     footer link in `src/components/Footer.astro`.
4. **Verify:**
   - `npx astro check` → 0 errors, and `npm run build` completes.
   - `dist/client/sitemap-0.xml` now lists `/work/` and `/es/work/`.
   - `dist/client/work/index.html` has no `noindex`, shows OBJURI and CGD with the live mark (the deploy-time
     check in `src/lib/build-info.ts` marks a site ○ if it did not respond).
   - `dist/client/llms.txt` lists them (it is generated from the same data).
5. **Publish:** commit on a branch, then ask the owner before merging to `main`.
   **Pushing to `main` deploys to production** (Cloudflare Workers).
6. **Clean up:** delete this file and its line in `CLAUDE.md` (see "When finished").
