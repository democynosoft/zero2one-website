import { SITE } from "./site";

/**
 * Structured data (schema.org) for rich Google results.
 * Rendered as a single JSON-LD script in the root layout.
 */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/nav-logo.png`,
    description: SITE.description,
    slogan: SITE.tagline,
    email: SITE.contact.email,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.contact.email,
      contactType: "customer support",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
  } as const;
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en",
  } as const;
}
