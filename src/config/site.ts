// Single source for business facts shown across the site.
// Replace the placeholders below once confirmed.
export const site = {
    name: "Invntio",
    url: "https://invntio.com",
    email: "[CONTACT_EMAIL]",
    phone: "[PHONE]",
    // Digits only, with country code, e.g. "12155550123". Used for the WhatsApp link.
    whatsapp: "[PHONE]",
    location: { en: "Pennsylvania, United States", es: "Pensilvania, Estados Unidos" },
    // Shown on the legal pages only.
    operator: "Víctor Velázquez Cid",
    // Web3Forms access key for the contact form.
    formAccessKey: "50248df4-7ae0-46bb-9a9d-47b24d889d3f",
    legalUpdated: "2026-09-25",
} as const;

export const isPlaceholder = (value: string) => value.startsWith("[");
