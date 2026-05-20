export type AudienceSegment = {
  id: string;
  title: string;
  bullets: readonly string[];
  /** Icon name, mapped to inline SVG in the component */
  icon: "star" | "bars";
};

export const AUDIENCE: readonly AudienceSegment[] = [
  {
    id: "startups",
    title: "Startups",
    icon: "star",
    bullets: [
      "Ship a polished MVP in weeks — not months",
      "Validate ideas with prototypes and real user feedback",
      "Find product-market fit with product-led growth experiments",
      "Scale your MVP without accumulating technical debt",
      "Startup-friendly pricing that protects your runway",
    ],
  },
  {
    id: "midsize",
    title: "Mid-size Companies",
    icon: "bars",
    bullets: [
      "Rebuild legacy apps without disrupting revenue",
      "Optimise UX to improve activation and retention",
      "Scale architecture to handle 10× users and data",
      "Integrate seamlessly with your existing tech stack",
      "Drive innovation with a fast-moving, senior team",
    ],
  },
] as const;
