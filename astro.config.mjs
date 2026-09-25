import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://invntio.com",
    output: "static",
    trailingSlash: "ignore",
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
    i18n: {
        defaultLocale: "en",
        locales: ["en", "es"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    redirects: {
        "/terms-of-use": "/terms",
        "/privacy-policy": "/privacy",
    },
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: "en",
                locales: { en: "en-US", es: "es" },
            },
            // Unlaunched pages stay out of the sitemap.
            filter: (page) => !/\/(es\/)?work\/?$/.test(page),
        }),
    ],
});
