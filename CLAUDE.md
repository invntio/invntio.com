# invntio.com

Business website for Invntio (Astro 7 on Cloudflare Workers). English at `/`, Spanish at `/es/`.

- **Pushing to `main` deploys to production.** Work on a branch and ask before merging.
- Copy and page data live in `src/i18n/ui.ts` (both languages); legal texts in `src/content/legal/{en,es}/`.
- Business facts and contact details: `src/config/site.ts`. Product context: `PRODUCT.md`. Design system: `DESIGN.md`.
- Contact form: Web3Forms (account tech@invntio.com, delivers to hello@invntio.com). Branch `feat/cloudflare-email`
  holds a parked Turnstile + Cloudflare Email Service version (needs Workers Paid).
- `llms.txt` and `llms-full.txt` are generated at build time from the site data (`src/lib/plain.ts`).

## Pending tasks

- [Launch OBJURI and CGD, and publish the /work page](docs/tasks/launch-objuri-cgd.md): when both client sites are live.
