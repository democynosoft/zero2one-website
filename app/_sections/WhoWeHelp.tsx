"use client";

import { Container } from "@/app/_components/ui/Container";
import { SectionLabel } from "@/app/_components/ui/SectionLabel";
import { BarsIcon, StarIcon } from "@/app/_components/ui/Icon";
import { AUDIENCE, type AudienceSegment } from "@/app/_data/audience";
import { useScrollRevealGroup } from "@/app/_lib/use-scroll-reveal";

import styles from "./WhoWeHelp.module.css";

function SegmentIcon({ icon }: { icon: AudienceSegment["icon"] }) {
  if (icon === "bars") return <BarsIcon size={20} />;
  return <StarIcon size={20} />;
}

export function WhoWeHelp() {
  const gridRef = useScrollRevealGroup();

  return (
    <section className={styles.who} aria-labelledby="who-title">
      <Container className={styles.header}>
        <SectionLabel>Who we help</SectionLabel>
        <h2 id="who-title" className="section-title">
          Built for teams at every stage.
        </h2>
      </Container>
      <Container ref={gridRef} className={styles.grid}>
        {AUDIENCE.map((segment) => (
          <article key={segment.id} className={styles.col}>
            <div className={styles.icon}>
              <SegmentIcon icon={segment.icon} />
            </div>
            <h3 className={styles.title}>{segment.title}</h3>
            <ul className={styles.list}>
              {segment.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </Container>
    </section>
  );
}
