import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StatCounter from "./StatCounter.jsx";
import PhotoPlaceholder from "./PhotoPlaceholder.jsx";

/**
 * One expandable project. Collapsed: photo, name, one-line summary, the
 * headline numbers. Click / tap / Enter toggles the challenge → action →
 * result detail open with a height animation (skipped for reduced motion).
 *
 * Non-featured cards stack (photo on top, full width) so every thumbnail
 * is the exact same size regardless of the source image's dimensions —
 * the card never sizes to the image. The featured card (AIVA) keeps the
 * larger side-by-side treatment.
 */
export default function ProjectCard({ project, reduced, featured = false }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const {
    name,
    kicker,
    summary,
    stats,
    image,
    imagePosition,
    photo,
    photoHint,
    challenge,
    action,
    result,
  } = project;

  const detail = [
    { label: "Challenge", body: challenge },
    { label: "Action", body: action },
    { label: "Result", body: result },
  ];

  const photoEl = (
    <PhotoPlaceholder
      src={image}
      alt={image ? name : undefined}
      position={imagePosition ?? "center"}
      label={photo}
      hint={photoHint}
      aspect={featured ? "aspect-square" : "aspect-[3/2]"}
    />
  );

  const textEl = (
    <div>
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400">
        {kicker}
      </p>
      <h3
        className={`font-display font-extrabold leading-[0.95] tracking-tight text-white ${
          featured ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-3 text-neutral-400 ${
          featured ? "text-base sm:text-lg" : "text-sm sm:text-base"
        }`}
      >
        {summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-x-10 gap-y-5">
        {stats.map((s) => (
          <StatCounter
            key={s.label}
            {...s}
            reduced={reduced}
            size={featured ? "lg" : "sm"}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-surface/70 transition-colors duration-300 ${
        featured
          ? "border-accent/40 hover:border-accent/70 focus-within:border-accent/70"
          : "border-line hover:border-neutral-500 focus-within:border-neutral-500"
      }`}
    >
      {featured && (
        <div
          className="pointer-events-none absolute -right-[12%] -top-[30%] h-[26rem] w-[26rem] rounded-full"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 15%, transparent), transparent 60%)",
          }}
        />
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="relative flex w-full flex-1 flex-col gap-6 rounded-2xl p-6 text-left outline-none transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-8"
      >
        {featured ? (
          <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center sm:gap-10">
            {photoEl}
            {textEl}
          </div>
        ) : (
          <>
            {photoEl}
            {textEl}
          </>
        )}

        <span className="mt-auto flex items-center gap-2 pt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          <span className="border-b border-transparent transition-colors duration-200 group-hover:border-accent/60">
            {open ? "Close" : "Expand"}
          </span>
          <span
            className={`text-sm leading-none transition-transform duration-300 ${
              open ? "rotate-45" : "group-hover:rotate-90"
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="detail"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={reduced ? {} : { height: "auto", opacity: 1 }}
            exit={reduced ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
            style={{ willChange: "height" }}
          >
            <dl
              className={`grid gap-6 border-t border-line py-7 sm:grid-cols-3 ${
                featured ? "px-6 sm:px-8" : "px-6"
              }`}
            >
              {detail.map((d) => (
                <div key={d.label}>
                  <dt className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                    {d.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-300">
                    {d.body}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
