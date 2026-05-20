"use client";

import { Container } from "@/app/_components/ui/Container";
import { MapleLeafIcon } from "@/app/_components/ui/Icon";
import { STATS } from "@/app/_data/stats";
import { useScrollRevealGroup } from "@/app/_lib/use-scroll-reveal";

import styles from "./StatsBar.module.css";

export function StatsBar() {
  const gridRef = useScrollRevealGroup();

  return (
    <aside className={styles.bar} aria-label="By the numbers">
      <Container as="div" className={styles.teaser}>
        <MapleLeafIcon size={22} className={styles.leaf} />
        <span>Proudly Canadian — built in Canada, serving globally</span>
      </Container>
      <Container ref={gridRef} className={styles.grid}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.cell}>
            <div className={[styles.value, "text-gradient-flame"].join(" ")}>
              {stat.value}
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </Container>
    </aside>
  );
}
