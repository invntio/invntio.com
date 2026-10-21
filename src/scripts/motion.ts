// Shared motion for inner pages: the step rail (same as the home page's process) and smooth collapsibles.

// Measure each rail's track from the first node's centre to the last one's, in either orientation.
export function initRails() {
    document.querySelectorAll<HTMLElement>("[data-rail]").forEach((rail) => {
        const measure = () => {
            const nodes = rail.querySelectorAll<HTMLElement>(".node");
            if (nodes.length < 2) return;
            const box = rail.getBoundingClientRect();
            const a = nodes[0].getBoundingClientRect();
            const b = nodes[nodes.length - 1].getBoundingClientRect();
            rail.style.setProperty("--x0", `${a.left + a.width / 2 - box.left}px`);
            rail.style.setProperty("--y0", `${a.top + a.height / 2 - box.top}px`);
            rail.style.setProperty("--len", `${Math.max(b.left - a.left, b.top - a.top)}px`);
        };
        measure();
        new ResizeObserver(measure).observe(rail);
    });
}

// Open and close <details data-collapse> with a height and fade animation; the panel is its [data-panel] child.
export function initCollapsibles() {
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
    document.querySelectorAll<HTMLDetailsElement>("details[data-collapse]").forEach((details) => {
        const summary = details.querySelector("summary");
        const panel = details.querySelector<HTMLElement>("[data-panel]");
        if (!summary || !panel) return;
        let running: Animation | null = null;
        summary.addEventListener("click", (event) => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            event.preventDefault();
            running?.cancel();
            panel.style.overflow = "hidden";
            if (details.open) {
                details.classList.add("closing");
                running = panel.animate([{ height: `${panel.offsetHeight}px`, opacity: 1 }, { height: "0px", opacity: 0 }], { duration: 260, easing });
                running.onfinish = () => {
                    details.open = false;
                    details.classList.remove("closing");
                    panel.style.overflow = "";
                };
            } else {
                details.open = true;
                running = panel.animate([{ height: "0px", opacity: 0 }, { height: `${panel.offsetHeight}px`, opacity: 1 }], { duration: 320, easing });
                running.onfinish = () => (panel.style.overflow = "");
            }
        });
    });
}
