// Single source for business facts shown across the site.
// Replace the placeholders below once confirmed.
export const site = {
    name: "Invntio",
    url: "https://invntio.com",
    email: "hello@invntio.com",
    location: { en: "Pennsylvania, United States", es: "Pensilvania, Estados Unidos" },
    // Shown on the legal pages only.
    operator: "Víctor Velázquez Cid",
    // PostHog project API key (public, starts with "phc_"). Empty = analytics and cookie banner off.
    posthogKey: "phc_kvZZbXFCUjvaoqxb5LX4EZbLfbqsPwfr9guBjLMXQUpa",
    posthogHost: "https://us.i.posthog.com",
    // Web3Forms access key for the contact form.
    formAccessKey: "e5b00ac6-2ecf-4676-9f34-46349f17ee46",
    legalUpdated: "2026-09-25",
} as const;

export const isPlaceholder = (value: string) => value.startsWith("[");
