import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Subtle "back to top" affordance. Hidden until you're a screen and a
 * bit down the page, then fades in at the bottom-right — clear of the
 * mobile dot-nav (bottom-centre) and the accent switcher (bottom-left).
 */
export default function BackToTop({ reduced }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setShow(window.scrollY > window.innerHeight * 1.25);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    const hero = document.getElementById("hero");
    if (hero) {
      hero.setAttribute("tabindex", "-1");
      hero.focus({ preventScroll: true });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.22 }}
          className="fixed bottom-20 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/85 text-neutral-300 backdrop-blur transition-colors hover:border-accent hover:text-white focus-visible:border-accent focus-visible:text-white"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 13V4M4 8l4-4 4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
