import { execSync } from "node:child_process";

// Facts gathered once per build: which commit is deployed, and whether each product responds.

const fromGit = () => {
    try {
        return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    } catch {
        return "";
    }
};

export const commit = (process.env.WORKERS_CI_COMMIT_SHA || process.env.CF_PAGES_COMMIT_SHA || fromGit()).slice(0, 7);
export const builtAt = new Date();

const checks = new Map<string, Promise<number | null>>();

/** HTTP status of a URL at build time, or null if it did not answer. Cached per build. */
export function liveStatus(url: string): Promise<number | null> {
    if (!checks.has(url)) {
        checks.set(
            url,
            fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(8000) })
                .then((r) => r.status)
                .catch(() => null),
        );
    }
    return checks.get(url)!;
}
