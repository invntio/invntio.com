// Single source for business facts shown across the site.
// Replace the placeholders below once confirmed.
export const site = {
    name: "Invntio",
    url: "https://invntio.com",
    email: "info@invntio.com",
    location: { en: "Pennsylvania, United States", es: "Pensilvania, Estados Unidos" },
    // Shown on the legal pages only.
    operator: "Víctor Velázquez Cid",
    // PostHog project API key (public, starts with "phc_"). Empty = analytics and cookie banner off.
    posthogKey: "phc_kvZZbXFCUjvaoqxb5LX4EZbLfbqsPwfr9guBjLMXQUpa",
    posthogHost: "https://us.i.posthog.com",
    // Contact form: Cloudflare Turnstile (public site key) + Cloudflare Email Service.
    // "1x00000000000000000000AA" is Cloudflare's always-pass test key; replace with the real one.
    turnstileSiteKey: "1x00000000000000000000AA",
    formFrom: { email: "forms@invntio.com", name: "invntio.com" },
    legalUpdated: "2026-09-25",
} as const;

export const isPlaceholder = (value: string) => value.startsWith("[");
