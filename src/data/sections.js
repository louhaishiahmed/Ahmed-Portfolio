/**
 * The single source of truth for the scroll narrative.
 * The side progress-dot nav is generated from this list, and each
 * section on the page must render with the matching `id`.
 */
export const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "toolkit", label: "Toolkit" },
  { id: "beyond", label: "Beyond work" },
  { id: "contact", label: "Contact" },
];
