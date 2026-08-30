import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import PhotoPlaceholder from "./PhotoPlaceholder.jsx";
import aboutSuit from "../assets/images/about-suit.jpg";

const PARAGRAPHS = [
  "I'm Tunisian, and I started out as a software engineer working on applied AI — the practical end of it, where a model has to actually earn its place in a product.",
  "Somewhere along the way I founded Tunisian Artists as a passion project. It kept growing until it wasn't a side thing anymore — it became a real platform, with an audience and sponsors attached.",
  "Now I'm in Kuala Lumpur doing an MBA, deliberately closing the gap between the tech I can build and the business strategy that decides whether it matters.",
];

export default function About({ reduced }) {
  return (
    <Section id="about" label="About" glow="right" fullHeight={false}>
      {/* Heading lives in the left column (not as a full-width block above
          the grid) so the photo column can start at the very top of the
          section, flush with the heading — no empty band above the photo. */}
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_0.82fr] lg:items-start">
        <div className="max-w-xl">
          <SectionHeading
            reduced={reduced}
            eyebrow={["About", "The short version"]}
            title="Engineer by training, builder by instinct."
          />
          <div className="space-y-6">
            {PARAGRAPHS.map((p, i) => (
              <Reveal
                key={i}
                reduced={reduced}
                as="p"
                delay={i * 0.08}
                className="text-lg leading-relaxed text-neutral-300"
              >
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal reduced={reduced} delay={0.1} className="mx-auto w-full max-w-sm lg:max-w-none">
          <PhotoPlaceholder
            src={aboutSuit}
            alt="Ahmed Louhaichi"
            position="center 20%"
            label="ABOUT_PHOTO_SUIT"
            hint="sharp · polished studio suit portrait"
          />
          <p
            tabIndex={0}
            className="group mt-3 flex items-start gap-2 text-[11px] leading-snug text-neutral-400 outline-none transition-colors duration-300 hover:text-neutral-200 focus-visible:text-neutral-200"
          >
            <span
              className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300"
              aria-hidden="true"
              style={{
                background: "color-mix(in srgb, var(--accent) 55%, transparent)",
              }}
            />
            <span>
              Same deal &mdash; AI-generated. This one&rsquo;s the
              business-strategy side of me.
            </span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
