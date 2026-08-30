import { motion } from "framer-motion";
import StatCounter from "./StatCounter.jsx";
import PhotoPlaceholder from "./PhotoPlaceholder.jsx";
import heroHoodie from "../assets/images/hero-hoodie.jpg";

const STATS = [
  { value: 175, suffix: "K+", label: "followers grown", note: "Tunisian Artists platform" },
  { value: 8, suffix: "M", label: "monthly impressions" },
  { value: 16, suffix: "", label: "person remote team, led", note: "fully distributed" },
  { value: 50, suffix: "%", label: "processing errors cut", note: "by that team" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero({ reduced }) {
  // When reduced motion is on, render everything in its final state.
  const groupProps = reduced
    ? { initial: false }
    : { initial: "hidden", animate: "visible", variants: container };
  const childVariants = reduced ? undefined : item;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 sm:px-10 lg:px-20"
    >
      {/* backdrop: chessboard texture + a single accent glow */}
      <div className="chess-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-[20%] -top-[10%] h-[60rem] w-[60rem] rounded-full"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 16%, transparent), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, var(--color-ink), transparent)" }}
      />

      <motion.div
        {...groupProps}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
      >
        {/* ---------------- left: the pitch ---------------- */}
        <div>
          <motion.p
            variants={childVariants}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400"
          >
            <span>MBA · Digital Leadership</span>
            <span className="text-accent">/</span>
            <span>AI engineering</span>
            <span className="text-accent">/</span>
            <span>Kuala Lumpur</span>
          </motion.p>

          <motion.h1
            variants={childVariants}
            className="font-display text-[clamp(2.75rem,7.5vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight text-white"
          >
            Ahmed
            <br />
            Louhaichi
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mt-7 max-w-xl text-xl font-medium text-neutral-100 sm:text-2xl"
          >
            I build things from zero{" "}
            <span className="text-accent">and scale them.</span>
          </motion.p>

          <motion.p
            variants={childVariants}
            className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400"
          >
            Repeatedly, across domains that share almost nothing — an art platform
            to 175K followers, a 16-person operations team, an AI social robot in
            21 days, national chess tournaments. Different fields, same instinct:
            start at zero, find the leverage, scale.
          </motion.p>

          <motion.ul
            variants={childVariants}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-9 sm:max-w-xl"
          >
            {STATS.map((s) => (
              <li key={s.label}>
                <StatCounter {...s} reduced={reduced} />
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ---------------- right: the portrait ---------------- */}
        <motion.div
          variants={childVariants}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <PhotoPlaceholder
            src={heroHoodie}
            alt="Ahmed Louhaichi"
            priority
            position="center 20%"
            label="HERO_PHOTO_HOODIE"
            hint="moody · dark · dramatic hoodie portrait"
          />

          {/* the deliberate wink — subtle, brightens on hover/focus */}
          <p
            tabIndex={0}
            className="group mt-3 flex items-start gap-2 text-[11px] leading-snug text-neutral-400 outline-none transition-colors duration-300 hover:text-neutral-200 focus-visible:text-neutral-200"
          >
            <span
              className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300"
              aria-hidden="true"
              style={{ background: "color-mix(in srgb, var(--accent) 55%, transparent)" }}
            />
            <span>
              AI-generated — I&rsquo;m an AI engineer, it felt wrong not to practice
              what I preach.
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute inset-x-0 bottom-8 hidden justify-center sm:flex">
        <motion.div
          className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-400"
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={
            reduced ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <span>Scroll</span>
          <span
            className="h-8 w-px"
            style={{ background: "linear-gradient(to bottom, #525252, transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
