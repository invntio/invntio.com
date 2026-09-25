import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { execSync } from "node:child_process";

// Build facts resolved in Node (pages prerender inside the Workers runtime, which has no git).
const gitCommit = () => {
    try {
        return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    } catch {
        return "";
    }
};
const commit = (process.env.WORKERS_CI_COMMIT_SHA || process.env.CF_PAGES_COMMIT_SHA || gitCommit()).slice(0, 7);

// https://astro.build/config
export default defineConfig({
    site: "https://invntio.com",
    output: "static",
    trailingSlash: "ignore",
    // Pages are static; only /api/* runs on demand. No sessions or image service needed.
    session: false,
    adapter: cloudflare({
        imageService: "passthrough",
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
    vite: {
        define: {
            __BUILD_COMMIT__: JSON.stringify(commit),
            __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
        },
    },
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: "en",
                locales: { en: "en-US", es: "es" },
            },
            lastmod: new Date(),
            // Unlaunched pages and the Spanish 404 stay out of the sitemap.
            filter: (page) => !/\/(es\/)?(work|404)\/?$/.test(page),
        }),
    ],
});
