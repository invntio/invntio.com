// Cloudflare's "404-page" handling looks for 404.html files; Astro builds /es/404 as a folder.
import { copyFileSync, rmSync, existsSync } from "node:fs";

const from = "dist/es/404/index.html";
if (existsSync(from)) {
    copyFileSync(from, "dist/es/404.html");
    rmSync("dist/es/404", { recursive: true });
}
