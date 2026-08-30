import Reveal from "./Reveal.jsx";

/**
 * Shared section shell: full-height min, hairline top border, the faint
 * chessboard texture, and a single soft accent glow — the same backdrop
 * recipe the hero uses, so every section reads as one system.
 */
export function Section({
  id,
  label,
  children,
  className = "",
  glow = "left",
  fullHeight = true,
}) {
  const glowPos =
    glow === "right"
      ? "-right-[15%] top-[8%]"
      : glow === "center"
        ? "left-1/2 top-[2%] -translate-x-1/2"
        : "-left-[18%] top-[6%]";

  return (
    <section
      id={id}
      aria-label={label}
      className={`relative flex flex-col justify-center overflow-hidden border-t border-line/40 px-6 py-20 sm:px-10 sm:py-24 lg:px-20 ${
        fullHeight ? "min-h-screen" : ""
      } ${className}`}
    >
      <div
        className="chess-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      {/* Soft accent wash. A plain radial-gradient (no blur filter) — the
          gradient is already soft, and dropping the filter keeps scrolling
          cheap on low-power devices where 6 blurred layers would stack up. */}
      <div
        className={`pointer-events-none absolute ${glowPos} h-[40rem] w-[40rem] rounded-full`}
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 13%, transparent), transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/**
 * Section eyebrow + display heading, styled like the hero's kicker line.
 */
export function SectionHeading({ eyebrow, title, reduced, className = "" }) {
  return (
    <Reveal reduced={reduced} className={`mb-10 sm:mb-12 ${className}`}>
      {eyebrow && (
        <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400">
          {eyebrow.map((part, i) => (
            <span key={part} className="flex items-center gap-x-3">
              {i > 0 && <span className="text-accent">/</span>}
              {part}
            </span>
          ))}
        </p>
      )}
      <h2 className="text-balance font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[0.95] tracking-tight text-white">
        {title}
      </h2>
    </Reveal>
  );
}
