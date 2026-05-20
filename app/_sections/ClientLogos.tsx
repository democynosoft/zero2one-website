import Image from "next/image";

import { Container } from "@/app/_components/ui/Container";
import { SectionLabel } from "@/app/_components/ui/SectionLabel";
import { CLIENT_LOGOS } from "@/app/_data/logos";

import styles from "./ClientLogos.module.css";

export function ClientLogos() {
  return (
    <section className={styles.section} aria-labelledby="logos-title">
      <Container>
        <SectionLabel className={styles.label}>
          <span id="logos-title">Trusted by</span>
        </SectionLabel>
        <div className={styles.grid}>
          {CLIENT_LOGOS.map((logo) => (
            <div key={logo.src} className={styles.item}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={44}
                sizes="(max-width: 500px) 120px, 140px"
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
