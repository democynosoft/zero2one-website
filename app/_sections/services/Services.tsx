"use client";

import { useState } from "react";

import { Container } from "@/app/_components/ui/Container";
import { SectionLabel } from "@/app/_components/ui/SectionLabel";
import { ChevronRightCircle } from "@/app/_components/ui/Icon";
import { SERVICES } from "@/app/_data/services";
import { cn } from "@/app/_lib/cn";

import { SERVICE_DIAGRAMS } from "./diagrams";
import styles from "./Services.module.css";

export function Services() {
  const [active, setActive] = useState(SERVICES[0].id);

  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <Container className={styles.inner}>
        <div className={styles.left}>
          <SectionLabel>What we do</SectionLabel>
          <h2 id="services-title" className="section-title" style={{ marginTop: 16 }}>
            Full-stack capability.
            <br />
            Zero compromise.
          </h2>
          <p className="section-body" style={{ marginTop: 20 }}>
            We combine senior engineering talent with AI tools and automated
            workflows to deliver faster, smarter, and more scalable solutions —
            without sacrificing quality.
          </p>

          <ul className={styles.list} role="tablist" aria-label="Services">
            {SERVICES.map((service) => {
              const isActive = service.id === active;
              return (
                <li key={service.id}>
                  <button
                    type="button"
                    role="tab"
                    id={`tab-${service.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${service.id}`}
                    tabIndex={isActive ? 0 : -1}
                    className={cn(styles.item, isActive && styles.itemActive)}
                    onClick={() => setActive(service.id)}
                  >
                    <span className={styles.num}>{service.num}</span>
                    <span className={styles.name}>{service.name}</span>
                    <span className={styles.arrow} aria-hidden>
                      <ChevronRightCircle size={12} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.right}>
          <div className={styles.visual}>
            <div className={styles.visualBg} aria-hidden />
            {SERVICES.map((service) => {
              const isActive = service.id === active;
              const Diagram = SERVICE_DIAGRAMS[service.id];
              return (
                <div
                  key={service.id}
                  id={`panel-${service.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${service.id}`}
                  aria-hidden={!isActive}
                  className={cn(styles.diagram, isActive && styles.diagramActive)}
                >
                  <div className={styles.diagramWrap} aria-hidden>
                    <Diagram />
                  </div>
                  <div className={styles.label}>{service.diagramLabel}</div>
                  <div className={styles.title}>
                    {service.diagramTitle.split("\n").map((line, i, arr) => (
                      <span key={`${service.id}-${i}`}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
