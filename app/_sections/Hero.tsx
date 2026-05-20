import { Button } from "@/app/_components/ui/Button";
import { Container } from "@/app/_components/ui/Container";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden />

      <Container className={styles.content}>
        <p className={styles.tag}>
          <span aria-hidden className={styles.tagDash} />
          AI-Powered Software Development
        </p>
        <h1 id="hero-title" className={styles.title}>
          Let&rsquo;s take your product
          <br />
          <em className="text-gradient-flame">to the next level.</em>
        </h1>
        <p className={styles.sub}>
          We plug into your team and build like it&rsquo;s our product. No red
          tape. Just execution.
        </p>
        <div className={styles.actions}>
          <Button href="#contact">Let&rsquo;s go!</Button>
          <Button href="#work" variant="secondary">
            See our work
          </Button>
        </div>
      </Container>

      <div className={styles.scrollHint} aria-hidden>
        <span className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
