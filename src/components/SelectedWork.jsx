import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { PROJECTS } from "../data/content.js";

const featured = PROJECTS.find((p) => p.featured);
const rest = PROJECTS.filter((p) => !p.featured);

export default function SelectedWork({ reduced }) {
  return (
    <Section id="work" label="Selected work" glow="left">
      <SectionHeading
        reduced={reduced}
        eyebrow={["Selected work", "Challenge", "Action", "Result"]}
        title="Five builds, five domains."
      />

      {/* Each row is one Reveal so the two cards are direct grid items and
          stretch to equal height natively. */}
      <Reveal reduced={reduced} className="grid items-stretch gap-5 sm:grid-cols-2">
        {rest.slice(0, 2).map((p) => (
          <ProjectCard key={p.id} project={p} reduced={reduced} />
        ))}
      </Reveal>

      {featured && (
        <Reveal reduced={reduced} className="mt-5">
          <ProjectCard project={featured} reduced={reduced} featured />
        </Reveal>
      )}

      <Reveal
        reduced={reduced}
        className="mt-5 grid items-stretch gap-5 sm:grid-cols-2"
      >
        {rest.slice(2).map((p) => (
          <ProjectCard key={p.id} project={p} reduced={reduced} />
        ))}
      </Reveal>
    </Section>
  );
}
