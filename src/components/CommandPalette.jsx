import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A small command-palette-style overlay — and a lightly hidden Easter egg.
 *
 * Open it with the "/" key (anywhere outside a text field) or the "/"
 * button pinned bottom-right. Type a section name to jump. Type something
 * like "are these real" / "fake" / "magic" and it owns up to the photos
 * with a bit of flair. Esc — or a click outside — makes it vanish.
 */
const COMMANDS = [
  { id: "about", label: "About", hint: "Section" },
  { id: "work", label: "Selected Work", hint: "Section" },
  { id: "toolkit", label: "Toolkit", hint: "Section" },
  { id: "beyond", label: "Beyond Work", hint: "Section" },
  { id: "contact", label: "Contact", hint: "Section" },
  { id: "__top", label: "Back to top", hint: "Jump", top: true },
];

const REVEALS = [
  {
    test: (q) => /magic|trick|card|wizard|illusion/.test(q),
    title: "Nice try. 🃏",
    body: "A magician never reveals his secrets. The AI-generated photos, though? Those I'll happily admit to.",
  },
  {
    test: (q) => /real|fake|genuine|photoshop|generated|notreal|aiphoto/.test(q),
    title: "Ta-da. 🎩",
    body: "Neither of those photos is real — just well-directed pixels. Also I do actual card tricks, ask me sometime.",
  },
];

export default function CommandPalette({ reduced }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const restoreRef = useRef(null);

  const close = () => setOpen(false);

  // Open on "/" from anywhere that isn't a text input.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      const tag = t?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || t?.isContentEditable) return;
      e.preventDefault();
      setOpen((v) => !v);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // While open: focus the input, lock body scroll, Esc to close, and
  // restore focus to whatever was focused before on close.
  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement;
    setQuery("");
    const id = requestAnimationFrame(() => inputRef.current?.focus());

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      restoreRef.current?.focus?.();
    };
  }, [open]);

  const normalized = query.toLowerCase().replace(/[^a-z]/g, "");
  const reveal = useMemo(
    () =>
      normalized.length >= 3
        ? REVEALS.find((r) => r.test(normalized)) ?? null
        : null,
    [normalized]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter(
      (c) => c.label.toLowerCase().includes(q) || c.id.includes(q)
    );
  }, [query]);

  const run = (cmd) => {
    close();
    if (cmd.top) {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      return;
    }
    const el = document.getElementById(cmd.id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  const onInputKeyDown = (e) => {
    if (e.key === "Enter" && !reveal && results[0]) {
      e.preventDefault();
      run(results[0]);
    }
  };

  // Keep Tab inside the dialog while it's open (aria-modal).
  const onDialogKeyDown = (e) => {
    if (e.key !== "Tab") return;
    const nodes = dialogRef.current?.querySelectorAll("input, button");
    if (!nodes || nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const panelMotion = reduced
    ? {}
    : {
        initial: { opacity: 0, y: -8, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -8, scale: 0.98 },
        transition: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        aria-haspopup="dialog"
        className="fixed bottom-4 right-4 z-50 flex h-10 items-center gap-2 rounded-full border border-line bg-surface/85 px-3 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-300 backdrop-blur transition-colors hover:border-accent hover:text-white focus-visible:border-accent focus-visible:text-white"
      >
        <kbd className="rounded border border-line bg-ink/60 px-1.5 py-0.5 font-mono text-[11px] not-italic leading-none text-neutral-200">
          /
        </kbd>
        <span className="hidden sm:inline">Menu</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[14vh]"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? {} : { opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />

            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="Command menu"
              onKeyDown={onDialogKeyDown}
              className="relative w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/50"
              {...panelMotion}
            >
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Jump to a section… or ask me something"
                aria-label="Type a command"
                className="w-full border-b border-line bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-neutral-400 focus:outline-none"
              />

              {reveal ? (
                <div className="p-5">
                  <p className="font-display text-base font-bold text-white">
                    {reveal.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {reveal.body}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                    Press Esc to make this vanish
                  </p>
                </div>
              ) : (
                <ul className="max-h-72 overflow-y-auto p-2">
                  {results.length ? (
                    results.map((c) => (
                      <li key={c.id}>
                        <button
                          type="button"
                          onClick={() => run(c)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-neutral-300 transition-colors hover:bg-ink/70 hover:text-white focus-visible:bg-ink/70 focus-visible:text-white focus-visible:outline-none"
                        >
                          <span>{c.label}</span>
                          <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                            {c.hint}
                          </span>
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="px-3 py-6 text-center text-sm text-neutral-400">
                      Nothing matches. Try “work”, “contact” — or ask whether the
                      photos are real.
                    </li>
                  )}
                </ul>
              )}

              <div className="flex items-center gap-3 border-t border-line px-4 py-2.5 text-[11px] text-neutral-400">
                <span>
                  <span className="text-neutral-200">&crarr;</span> to run
                </span>
                <span>
                  <span className="text-neutral-200">Esc</span> to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
