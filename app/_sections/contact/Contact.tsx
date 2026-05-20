import { Container } from "@/app/_components/ui/Container";
import { SectionLabel } from "@/app/_components/ui/SectionLabel";
import { ClockIcon, MailIcon } from "@/app/_components/ui/Icon";
import { SITE } from "@/app/_lib/site";

import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.glow} aria-hidden />
      <Container className={styles.inner}>
        <div className={styles.left}>
          <SectionLabel>Get in touch</SectionLabel>
          <h2 id="contact-title" className={styles.title}>
            We share the same mission — turning your vision into reality.
          </h2>
          <p className={styles.lede}>
            We are committed to making your investment count and building
            something that truly matters. We want to hear your story and dream
            big with you.
          </p>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon} aria-hidden>
                <MailIcon size={16} />
              </span>
              <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            </li>
            <li>
              <span className={styles.contactIcon} aria-hidden>
                <ClockIcon size={16} />
              </span>
              <span>{SITE.contact.responseTime}</span>
            </li>
          </ul>
        </div>

        <div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
