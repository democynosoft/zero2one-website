export type Service = {
  /** Two-digit number for display, e.g. "01" */
  num: string;
  /** Stable id used for keys / aria controls */
  id: string;
  /** Short list label */
  name: string;
  /** Diagram caption label */
  diagramLabel: string;
  /** Diagram title — supports `\n` for line break */
  diagramTitle: string;
};

export const SERVICES: readonly Service[] = [
  {
    num: "01",
    id: "strategy",
    name: "Product Strategy & AI Discovery",
    diagramLabel: "01 — Strategy & AI Discovery",
    diagramTitle: "AI-accelerated\nstrategy.",
  },
  {
    num: "02",
    id: "design",
    name: "UI/UX Design & Rapid Prototyping",
    diagramLabel: "02 — Design & Rapid Prototyping",
    diagramTitle: "From concept\nto prototype fast.",
  },
  {
    num: "03",
    id: "engineering",
    name: "Mobile & Web Development",
    diagramLabel: "03 — AI-assisted Development",
    diagramTitle: "Ship faster\nwith AI-assist.",
  },
  {
    num: "04",
    id: "automation",
    name: "AI Agents & Workflow Automation",
    diagramLabel: "04 — Agents & Automation",
    diagramTitle: "Agents that work\nwhile you sleep.",
  },
  {
    num: "05",
    id: "qa",
    name: "Automated QA & Performance",
    diagramLabel: "05 — Automated QA",
    diagramTitle: "Automated tests.\nZero surprises.",
  },
  {
    num: "06",
    id: "growth",
    name: "AI-driven Growth & Analytics",
    diagramLabel: "06 — AI-driven Growth",
    diagramTitle: "Predict, optimise,\nand scale.",
  },
] as const;
