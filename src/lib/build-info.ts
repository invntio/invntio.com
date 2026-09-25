// Facts gathered once per build: which commit is deployed, and whether each product responds.
// __BUILD_COMMIT__ and __BUILD_TIME__ are injected by astro.config.mjs.

declare const __BUILD_COMMIT__: string;
declare const __BUILD_TIME__: string;

export const commit = __BUILD_COMMIT__;
export const builtAt = new Date(__BUILD_TIME__);

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
