/// <reference types="astro/client" />

// Minimal Workers runtime typing for the on-demand API route (full `wrangler types`
// output conflicts with the DOM types used by client scripts).
declare module "cloudflare:workers" {
    export const env: Record<string, unknown>;
}
