export type ClientLogo = { src: string; alt: string };

export const CLIENT_LOGOS: readonly ClientLogo[] = [
  { src: "/logos/canada.png", alt: "Government of Canada" },
  { src: "/logos/nova-scotia.png", alt: "Government of Nova Scotia" },
  { src: "/logos/lowr.png", alt: "LOW6" },
  { src: "/logos/maplewave.png", alt: "Maplewave" },
  { src: "/logos/csa.png", alt: "Canadian Space Agency" },
  { src: "/logos/wattpad.png", alt: "Wattpad" },
] as const;
