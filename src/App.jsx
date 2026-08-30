import { SECTIONS } from "./data/sections.js";
import { useActiveSection } from "./hooks/useActiveSection.js";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion.js";
import ProgressDots from "./components/ProgressDots.jsx";
import AccentSwitcher from "./components/AccentSwitcher.jsx";
import BackToTop from "./components/BackToTop.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SelectedWork from "./components/SelectedWork.jsx";
import Toolkit from "./components/Toolkit.jsx";
import BeyondWork from "./components/BeyondWork.jsx";
import Contact from "./components/Contact.jsx";

// Stable reference for the IntersectionObserver hook.
const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function App() {
  const active = useActiveSection(SECTION_IDS);
  const reduced = usePrefersReducedMotion();

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <ProgressDots sections={SECTIONS} active={active} reduced={reduced} />
      <AccentSwitcher />
      <BackToTop reduced={reduced} />
      <CommandPalette reduced={reduced} />

      <main>
        <Hero reduced={reduced} />
        <About reduced={reduced} />
        <SelectedWork reduced={reduced} />
        <Toolkit reduced={reduced} />
        <BeyondWork reduced={reduced} />
        <Contact reduced={reduced} />
      </main>
    </>
  );
}
