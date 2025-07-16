import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    output: "static",
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
    site: "https://bohio.app",
    vite: {
        server: {
            allowedHosts: [
                "localweb.bohio.app",
                "bohio.app",
                "www.bohio.app",
                "localhost",
            ],
        },
    },
});
