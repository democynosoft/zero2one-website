/**
 * Central site configuration.
 * Edit here and the change propagates across metadata, JSON-LD,
 * sitemap, robots.txt, footer copyright, and contact links.
 */
export const SITE = {
  name: "zero2one",
  legalName: "zero2one Digital",
  tagline: "Premium product delivery without the red tape.",
  description:
    "We plug into your team and build like it's our product. AI-powered software development, design, and growth for startups and mid-size companies.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://zero2one.digital",
  locale: "en_US",
  contact: {
    email: "hello@zero2one.digital",
    responseTime: "Response within 24 hours",
  },
  social: {
    // Add real handles when available.
  },
  keywords: [
    "AI software development",
    "product strategy",
    "UI/UX design",
    "mobile app development",
    "web development",
    "AI agents",
    "workflow automation",
    "QA automation",
    "growth analytics",
    "MVP development",
    "Canadian software agency",
    "Halifax software studio",
  ],
} as const;

export type SiteConfig = typeof SITE;
