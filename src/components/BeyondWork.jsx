import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { BEYOND } from "../data/content.js";

export default function BeyondWork({ reduced }) {
  return (
    <Section id="beyond" label="Beyond work" glow="right" fullHeight={false}>
      <SectionHeading
        reduced={reduced}
        eyebrow={["Beyond work", "Off the clock"]}
        title="Three things I do for the love of it."
      />

      <div className="grid gap-5 sm:grid-cols-3">
        {BEYOND.map((item, i) => (
          <Reveal
            key={item.id}
            reduced={reduced}
            delay={i * 0.08}
            className="rounded-xl border border-line/70 bg-surface/40 p-6 transition-colors duration-300 hover:border-line hover:bg-surface/70"
          >
            <h3 className="font-display text-base font-bold uppercase tracking-[0.12em] text-neutral-300">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {item.line}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
