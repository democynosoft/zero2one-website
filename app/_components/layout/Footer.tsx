import Image from "next/image";

import { Container } from "@/app/_components/ui/Container";
import { NAV_LINKS } from "@/app/_data/navigation";
import { SITE } from "@/app/_lib/site";

import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.logo} aria-label={`${SITE.name} — back to top`}>
          <Image
            src="/brand/nav-logo.png"
            alt={SITE.name}
            width={64}
            height={18}
            sizes="64px"
          />
        </a>
        <span className={styles.copy}>
          © {year} {SITE.name}. All rights reserved.
        </span>
        <nav aria-label="Footer" className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
