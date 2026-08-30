import { useEffect, useState } from "react";

/**
 * TEMPORARY review aid — remove before launch.
 * Lets you preview the three candidate accent colours live by toggling
 * the `data-accent` attribute on <html>. The real accent is set once in
 * index.css (`:root { --accent: ... }`).
 */
const OPTIONS = [
  { id: "amber", name: "Amber", hex: "#f5a524" },
  { id: "coral", name: "Coral", hex: "#ff6f5e" },
  { id: "teal", name: "Deep teal", hex: "#17b8a6" },
];

export default function AccentSwitcher() {
  const [accent, setAccent] = useState("amber");

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
  }, [accent]);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full border border-line/70 bg-surface/85 px-3 py-2 backdrop-blur">
      <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500 sm:block">
        Accent
      </span>
      {OPTIONS.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => setAccent(o.id)}
          aria-pressed={accent === o.id}
          aria-label={`Preview ${o.name} accent`}
          title={o.name}
          className={`h-5 w-5 rounded-full border transition-transform ${
            accent === o.id
              ? "scale-110 border-white/80"
              : "border-white/10 hover:scale-105"
          }`}
          style={{ backgroundColor: o.hex }}
        />
      ))}
    </div>
  );
}
