import Image from "next/image";

import { Button } from "@/app/_components/ui/Button";
import { Container } from "@/app/_components/ui/Container";
import { SectionLabel } from "@/app/_components/ui/SectionLabel";

import styles from "./Pitch.module.css";

export function Pitch() {
  return (
    <section className={styles.pitch} aria-labelledby="pitch-title">
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <SectionLabel>The reality</SectionLabel>
          <h2 id="pitch-title" className={styles.title}>
            The right vision, but the wrong vehicle.
          </h2>
          <p className={styles.body}>
            Everyone talks about why companies fail, but we&rsquo;d rather focus
            on how they succeed. We&rsquo;ve been in your shoes and we know how
            to flip the odds.
          </p>
          <p className={styles.body}>
            AI can give you a head start, but it can&rsquo;t take you across the
            finish line. That&rsquo;s where we step in and help take it to the
            next level.
          </p>
          <Button href="#contact" className={styles.cta}>
            Talk to us
          </Button>
        </div>
        <div className={styles.visual}>
          <Image
            src="/images/pitch.png"
            alt="Astronaut in the wrong vehicle — a visual metaphor for misaligned product execution"
            fill
            sizes="(max-width: 1200px) 100vw, 560px"
            className={styles.image}
          />
        </div>
      </Container>
    </section>
  );
}
