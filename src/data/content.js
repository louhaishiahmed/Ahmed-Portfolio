/**
 * Copy and numbers for the narrative sections below the hero.
 * Kept out of the components so wording can be tuned in one place.
 */
import tunisianArtists from "../assets/images/tunisian-artists.jpg";
import wayConnect from "../assets/images/way-connect.jpg";
import aivaRobot from "../assets/images/aiva-robot.jpg";
import orato from "../assets/images/orato.jpg";
import chessTournaments from "../assets/images/chess-tournaments.jpg";

/* ------------------------------------------------------------------ *
 * SELECTED WORK — challenge → action → result, one entry per card.
 * `featured: true` gets the large, full-width treatment (AIVA).
 * ------------------------------------------------------------------ */
export const PROJECTS = [
  {
    id: "tunisian-artists",
    name: "Tunisian Artists",
    kicker: "Platform · Community",
    image: tunisianArtists,
    photo: "WORK_PHOTO_TUNISIAN_ARTISTS",
    photoHint: "gallery wall · crowd at an opening",
    summary:
      "A passion project for Tunisia's art scene that grew into a platform sponsors pay to be part of.",
    stats: [
      { value: 175, suffix: "K+", label: "followers grown" },
      { value: 8, suffix: "M", label: "monthly impressions" },
    ],
    challenge:
      "Tunisian artists had the talent and no shared stage. Visibility was scattered across personal feeds and word of mouth, and brands that wanted to back the scene had no credible way in.",
    action:
      "Built and ran the platform end to end — content system, artist features, on-the-ground event coverage — and packaged a sponsorship offer that gave brands a real reason to sign.",
    result:
      "Grew to 175K+ followers and roughly 8M monthly impressions, closed recurring sponsors, and turned it into a reference point people across the ecosystem actually use.",
  },
  {
    id: "way-connect",
    name: "Way Connect",
    kicker: "Remote Operations",
    image: wayConnect,
    photo: "WORK_PHOTO_WAY_CONNECT",
    photoHint: "distributed team on a call grid",
    summary:
      "Led a 16-person remote operations team serving pharmacy clients in France.",
    stats: [
      { value: 16, suffix: "", label: "person remote team" },
      { value: 50, suffix: "%", label: "processing errors cut" },
    ],
    challenge:
      "A fully distributed team was processing sensitive work for French pharmacy clients, and the error rate was high enough to put those client relationships at risk.",
    action:
      "Rebuilt the workflow around clear ownership and layered QA checkpoints, ran structured training, and set feedback loops that caught mistakes before they reached the client.",
    result:
      "Cut processing errors by 50%, stabilised delivery across a 16-person distributed team, and kept the French pharmacy accounts.",
  },
  {
    id: "aiva",
    name: "AIVA",
    kicker: "AI Social Robot",
    featured: true,
    image: aivaRobot,
    photo: "WORK_PHOTO_AIVA",
    photoHint: "the robot mid-conversation with a crowd around it",
    summary:
      "An AI social robot that holds a room — conceived, built, and demoed in 21 days.",
    stats: [
      { value: 21, suffix: " days", label: "concept to working robot" },
      { value: 6, suffix: "+", label: "events presented at" },
    ],
    challenge:
      "Build an AI social robot that can actually hold a conversation and command attention in a noisy room — on a 21-day deadline, hardware included.",
    action:
      "Ran the full build: hardware assembly, a conversational AI stack with voice in and out, expressive motion, and the presence tuning that makes people want to keep talking to it.",
    result:
      "Shipped in 21 days and presented at 6+ events, where it reliably drew and held a crowd — the most striking thing on the floor each time.",
  },
  {
    id: "orato",
    name: "OratO",
    kicker: "AI Wearable · EdTech",
    image: orato,
    // Landscape re-crop (1600x948) — sits fine at the default centre.
    photo: "WORK_PHOTO_ORATO",
    photoHint: "the wearable clipped on, classroom behind",
    summary:
      "A wearable that captures and structures everything said in a classroom, hands-free.",
    stats: [{ value: 82, suffix: "%", label: "transcription accuracy" }],
    challenge:
      "Educators can't take notes and teach at the same time. They needed a hands-free way to capture a lesson and get it back as something structured and searchable.",
    action:
      "Built the wearable and the pipeline behind it — capture, speech-to-text tuned for classroom noise, and a pass that turns the raw stream into usable structure.",
    result:
      "Reached 82% transcription accuracy in real classroom conditions, giving teachers a reliable record without touching a device mid-lesson.",
  },
  {
    id: "chess-tournaments",
    name: "Chess Tournaments",
    kicker: "Events · Community",
    image: chessTournaments,
    photo: "WORK_PHOTO_CHESS",
    photoHint: "packed tournament hall, boards in rows",
    summary:
      "Took a local chess tournament from 90 players to 190 and into the local news.",
    stats: [
      { value: 90, suffix: "", label: "players, first edition" },
      { value: 190, suffix: "", label: "players, latest" },
    ],
    challenge:
      "A local tournament with 90 players and real potential to be the event for the regional chess community — if it could break out of its existing circle.",
    action:
      "Reworked the format and prize structure, lined up partners, and ran a promotion push aimed squarely at players and clubs who'd never shown up before.",
    result:
      "More than doubled turnout to 190 participants and picked up viral local coverage that put the tournament on the map.",
  },
];

/* ------------------------------------------------------------------ *
 * TOOLKIT — three clusters, rendered as a tag field (not a list).
 * ------------------------------------------------------------------ */
export const TOOLKIT = [
  {
    id: "strategy-ops",
    title: "Strategy & Ops",
    tags: [
      "Venture building",
      "Remote team leadership",
      "Process design",
      "Operations QA",
      "Project delivery",
      "Business strategy",
      "Fundraising & sponsorship",
    ],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    tags: [
      "Applied AI engineering",
      "LLMs & prompt systems",
      "Conversational agents",
      "Speech-to-text",
      "Computer vision",
      "Embedded & robotics",
      "Data analysis",
    ],
  },
  {
    id: "marketing-growth",
    title: "Marketing & Growth",
    tags: [
      "Community building",
      "Content strategy",
      "Social growth",
      "Brand partnerships",
      "Event production",
      "Storytelling",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * BEYOND WORK — the lighter section. Copy can have a wink.
 * ------------------------------------------------------------------ */
export const BEYOND = [
  {
    id: "chess",
    title: "Chess",
    line: "Coached it, ran tournaments for it, still get beaten by my own phone.",
  },
  {
    id: "magic",
    title: "Magic",
    line: "Yes, I can make a card disappear. No, I won't tell you how.",
  },
  {
    id: "sailing",
    title: "Sailing",
    line: "The best strategy calls happen with no wifi and a horizon to look at.",
  },
];
