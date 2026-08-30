import { Section } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

const EMAIL = "ahmed.louhaishi@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/ahmed-louhaishi-03a37b222/";
const CV_URL = "/Ahmed-Louhaichi-CV.pdf";
const WHATSAPP_URL = "https://wa.me/60172746224";

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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors duration-200 hover:border-accent hover:text-white focus-visible:border-accent focus-visible:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.25 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24Zm-3.9 4.4c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.14.18 1.9 2.9 4.66 4.06.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.35-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.44-.46-.61-.47-.16 0-.34-.01-.52-.01Z" />
            </svg>
            WhatsApp
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
