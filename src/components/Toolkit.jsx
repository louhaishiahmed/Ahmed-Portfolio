import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { TOOLKIT } from "../data/content.js";

export default function Toolkit({ reduced }) {
  return (
    <Section id="toolkit" label="Toolkit" glow="center" fullHeight={false}>
      <SectionHeading
        reduced={reduced}
        eyebrow={["Toolkit", "Three clusters"]}
        title="What I actually do."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {TOOLKIT.map((cluster, ci) => (
          <Reveal
            key={cluster.id}
            reduced={reduced}
            delay={ci * 0.1}
            className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-sm"
                aria-hidden="true"
                style={{ background: "var(--accent)" }}
              />
              <h3 className="font-display text-lg font-bold text-white">
                {cluster.title}
              </h3>
            </div>

            <ul className="flex flex-wrap gap-2">
              {cluster.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-ink/50 px-3 py-1.5 text-[13px] text-neutral-300 transition-colors duration-200 hover:border-accent/60 hover:text-white"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
