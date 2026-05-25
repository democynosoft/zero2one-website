export type ProjectStat = { value: string; label: string };

export type Project = {
  id: string;
  client: string;
  title: string;
  tags: readonly string[];
  description: string;
  stats: readonly ProjectStat[];
  preview: string;
  previewAlt: string;
  display: string;
  /** Absolute paths from /public used by the modal gallery */
  gallery: readonly { src: string; caption?: string }[];
  /** Tailwind-safe gradient class applied to the card visual */
  gradient: "covers" | "pando" | "halifax" | "collab";
};

export const PROJECTS: readonly Project[] = [
  {
    id: "covers",
    client: "Sports media",
    title: "Covers",
    tags: ["UX Design", "Research"],
    description:
      "Redesigned key sections of their site — including the data-heavy Scores and Matchups — to make complex stats easier to scan and navigate. An accessible, user-friendly experience with optimized load speed.",
    stats: [
      // { value: "1 mo", label: "Discovery & design" },
      { value: "100+", label: "User interviews" },
      { value: "UX", label: "Heuristics review" },
    ],
    preview: "/work/covers-preview.png",
    previewAlt: "Covers app redesign preview",
    display: "/work/covers-display.png",
    gallery: [
      { src: "/work/galleries/covers/1.png" },
      { src: "/work/galleries/covers/2.png" },
      { src: "/work/galleries/covers/3.png" },
      { src: "/work/galleries/covers/4.png" },
      { src: "/work/galleries/covers/5.png" },
    ],
    gradient: "covers",
  },
  {
    id: "pando",
    client: "Nonprofit tech",
    title: "Pando",
    tags: ["Product Design", "Dev"],
    description:
      "Refined their donations monitoring app through user testing to fix flow issues and uncover friction points. The interface was redesigned, screens simplified, and the app optimised for smoother navigation.",
    stats: [
      { value: "8%", label: "Monthly churn (↓ from 21%)" },
      { value: "3 min", label: "Session time (↑ from 30s)" },
    ],
    preview: "/work/pando-preview.png",
    previewAlt: "Pando donations app preview",
    display: "/work/pando-display.png",
    gallery: [
      { src: "/work/galleries/pando/1.png" },
      { src: "/work/galleries/pando/2.png" },
      { src: "/work/galleries/pando/3.png" },
      { src: "/work/galleries/pando/4.png" },
      { src: "/work/galleries/pando/5.png" },
    ],
    gradient: "pando",
  },
  {
    id: "halifax",
    client: "Transit & infrastructure",
    title: "Halifax Bridges",
    tags: ["Web Dev", "Mobile-first"],
    description:
      "Redesigned their website with a mobile-first approach, guided by user feedback and client input. Faster and responsive across all devices, with an optimized backend for better performance and easier admin control.",
    stats: [
      { value: "28%", label: "Weekly active users (↑ from 14%)" },
      { value: "7%", label: "MacPass CTR (↑ from <2%)" },
    ],
    preview: "/work/halifax-preview.png",
    previewAlt: "Halifax Bridges website redesign preview",
    display: "/work/halifax-display.png",
    gallery: [
      { src: "/work/galleries/halifax/1.png", caption: "Mobile-first website redesign" },
      { src: "/work/galleries/halifax/2.png" },
      { src: "/work/galleries/halifax/3.png" },
      { src: "/work/galleries/halifax/4.png" },
      { src: "/work/galleries/halifax/5.png" },
    ],
    gradient: "halifax",
  },
  {
    id: "collab",
    client: "Consumer mobile",
    title: "Collab",
    tags: ["iOS & Android", "GTM"],
    description:
      "Took their MVP mobile app to the next level — improving UX through testing and feedback, setting up a private beta, and optimising performance for a successful launch to Google Play and the App Store.",
    stats: [
      { value: "21%", label: "Stickiness (avg)" },
      { value: "26%", label: "Free-to-paid conversion" },
    ],
    preview: "/work/collab-preview.png",
    previewAlt: "Collab mobile app preview",
    display: "/work/collab-display.png",
    gallery: [
      { src: "/work/galleries/collab/1.png" },
      { src: "/work/galleries/collab/2.png" },
      { src: "/work/galleries/collab/3.png" },
      { src: "/work/galleries/collab/4.png" },
      { src: "/work/galleries/collab/5.png" },
    ],
    gradient: "collab",
  },
] as const;
