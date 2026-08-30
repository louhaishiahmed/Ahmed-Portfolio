import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/**
 * A single count-up statistic.
 * Animates 0 → value the first time it enters the viewport.
 * When reduced motion is requested it renders the final value immediately.
 */
export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  note,
  reduced,
  size = "lg",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setN(value);
      return;
    }
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  const valueClass =
    size === "sm"
      ? "font-display text-2xl font-bold tabular-nums leading-none text-white sm:text-[1.75rem]"
      : "font-display text-4xl font-bold tabular-nums leading-none text-white sm:text-[2.75rem]";

  return (
    <div ref={ref}>
      <div className={valueClass}>
        {prefix}
        {Math.round(n)}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-xs leading-snug text-neutral-400">{label}</div>
      {note && (
        <div className="mt-0.5 text-[11px] leading-snug text-neutral-500">{note}</div>
      )}
    </div>
  );
}
