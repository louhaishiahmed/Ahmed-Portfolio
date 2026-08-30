/**
 * A framed image slot. When `src` is given it renders the photo; until
 * then it shows a labelled stand-in (mono label chip + art-direction
 * hint) in the same frame — rounded panel, tight chessboard texture,
 * bottom fade into the page background.
 */
export default function PhotoPlaceholder({
  label,
  hint,
  src,
  alt = "",
  priority = false,
  position = "center",
  className = "",
  aspect = "aspect-[4/5]",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${aspect} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={priority ? "high" : "auto"}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      ) : (
        <>
          <div
            className="chess-grid chess-grid--tight absolute inset-0 opacity-70"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%)",
            }}
          >
            <span className="rounded-md border border-line bg-ink/60 px-3 py-1 font-mono text-[11px] tracking-wider text-neutral-300">
              {label}
            </span>
            {hint && (
              <span className="max-w-[16rem] text-[11px] leading-relaxed text-neutral-400">
                {hint}
              </span>
            )}
          </div>
        </>
      )}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to top, var(--color-ink), transparent)",
        }}
      />
    </div>
  );
}
