export type NavLink = { label: string; href: string };

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact Us", href: "#contact" },
] as const;
