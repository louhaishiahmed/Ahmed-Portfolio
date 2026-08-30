import { Section } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

const EMAIL = "ahmed.louhaishi@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/ahmed-louhaishi-03a37b222/";
const CV_URL = "/Ahmed-Louhaichi-CV.pdf";

export default function Contact({ reduced }) {
  return (
    <Section id="contact" label="Contact" glow="center" className="flex items-center">
      <div className="w-full">
        <Reveal reduced={reduced}>
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400">
            Contact
          </p>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-white">
            Let&rsquo;s talk.
          </h2>
          <p className="mt-5 max-w-md text-lg text-neutral-400">
            Building something at the edge of tech and strategy? That&rsquo;s the
            conversation I want to have.
          </p>
        </Reveal>

        <Reveal reduced={reduced} delay={0.1} className="mt-10">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block font-display text-xl font-bold text-white underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent focus-visible:text-accent sm:text-2xl"
          >
            {EMAIL}
          </a>
        </Reveal>

        <Reveal reduced={reduced} delay={0.16} className="mt-8 flex flex-wrap gap-4">
          <a
            href={CV_URL}
            download="Ahmed-Louhaichi-CV.pdf"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] focus-visible:scale-[1.03] motion-reduce:transform-none"
          >
            Download CV
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-200 hover:border-accent hover:text-white focus-visible:border-accent focus-visible:text-white"
          >
            LinkedIn
          </a>
        </Reveal>

        <Reveal
          reduced={reduced}
          delay={0.22}
          as="p"
          className="mt-16 text-[11px] uppercase tracking-[0.24em] text-neutral-400"
        >
          Ahmed Louhaichi &middot; Kuala Lumpur
        </Reveal>
      </div>
    </Section>
  );
}
