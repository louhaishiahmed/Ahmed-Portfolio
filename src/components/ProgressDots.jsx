/**
 * The navigation. Deliberately not a navbar:
 *  - desktop: a vertical column of dots pinned to the right edge, each
 *    revealing its label on hover/focus, click / Enter / Space to jump.
 *  - mobile: a compact pill of dots floating at the bottom.
 *
 * Every dot is a real <button> in DOM order, so Tab moves through them
 * top-to-bottom and each shows a visible focus ring + its label.
 */
export default function ProgressDots({ sections, active, reduced }) {
  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
    // Move focus to the section so keyboard users land where they jumped.
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  return (
    <>
      {/* ---------- desktop ---------- */}
      <nav
        aria-label="Section navigation"
        className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 md:block"
      >
        <ul className="flex flex-col items-end gap-3">
          {sections.map((s) => {
            const isActive = s.id === active;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  aria-label={`Go to ${s.label} section`}
                  aria-current={isActive ? "true" : undefined}
                  data-focus-tight
                  className="group flex items-center gap-3 rounded-full p-2"
                >
                  <span
                    className={`text-[10px] font-medium uppercase tracking-[0.22em] transition-all duration-300 ${
                      isActive
                        ? "text-accent opacity-100"
                        : "translate-x-1 text-neutral-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    }`}
                  >
                    {s.label}
                  </span>
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isActive
                          ? "h-3 w-3 bg-accent"
                          : "h-[7px] w-[7px] bg-neutral-500 group-hover:h-2.5 group-hover:w-2.5 group-hover:bg-neutral-200 group-focus-visible:bg-neutral-200"
                      }`}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ---------- mobile ---------- */}
      <nav
        aria-label="Section navigation"
        className="fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden"
      >
        <ul className="flex items-center gap-1 rounded-full border border-line/70 bg-surface/85 px-2 py-1.5 backdrop-blur">
          {sections.map((s) => {
            const isActive = s.id === active;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  aria-label={`Go to ${s.label} section`}
                  aria-current={isActive ? "true" : undefined}
                  data-focus-tight
                  className="flex items-center justify-center rounded-full p-2"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-2.5 w-2.5 bg-accent"
                        : "h-2 w-2 bg-neutral-500"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
