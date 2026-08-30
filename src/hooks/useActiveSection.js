import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently occupying the middle of the
 * viewport. Drives the active state of the side progress-dot nav.
 *
 * `ids` must be a stable array reference (define it at module scope).
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const seen = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          seen.set(entry.target.id, entry.intersectionRatio);
        }
        let best = null;
        let bestRatio = 0;
        for (const [id, ratio] of seen) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      {
        // Only count a section once it's near the vertical centre.
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
