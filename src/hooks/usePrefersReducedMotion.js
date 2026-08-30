import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Tracks the OS "reduce motion" preference and updates if the user
 * changes it while the page is open.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
