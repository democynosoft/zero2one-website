"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

import { Container } from "@/app/_components/ui/Container";
import { SectionLabel } from "@/app/_components/ui/SectionLabel";
import { Tag } from "@/app/_components/ui/Tag";
import { PROJECTS, type Project } from "@/app/_data/projects";

import { WorkModal } from "./WorkModal";
import styles from "./Work.module.css";

const GRADIENT_CLASS: Record<Project["gradient"], string> = {
  covers: styles.gradCovers,
  pando: styles.gradPando,
  halifax: styles.gradHalifax,
  collab: styles.gradCollab,
};

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeProject = openId
    ? PROJECTS.find((p) => p.id === openId) ?? null
    : null;

  const onOpen = useCallback((id: string) => setOpenId(id), []);
  const onClose = useCallback(() => setOpenId(null), []);

  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <Container className={styles.header}>
        <div>
          <SectionLabel>Selected work</SectionLabel>
          <h2 id="work-title" className="section-title" style={{ marginTop: 16 }}>
            The results speak
            <br />
            for themselves.
          </h2>
        </div>
        <p className="section-body" style={{ maxWidth: 360 }}>
          Real projects. Real metrics. A track record built case by case, client
          by client.
        </p>
      </Container>

      <Container className={styles.grid}>
        {PROJECTS.map((project) => (
          <article key={project.id} className={styles.card}>
            <div className={[styles.visual, GRADIENT_CLASS[project.gradient]].join(" ")}>
              <Image
                src={project.preview}
                alt={project.previewAlt}
                fill
                sizes="(max-width: 1200px) 100vw, 540px"
                className={styles.image}
              />
            </div>
            <div className={styles.body}>
              <div className={styles.bodyHeader}>
                <div className={styles.client}>{project.client}</div>
                <button
                  type="button"
                  className={styles.cta}
                  onClick={() => onOpen(project.id)}
                  aria-label={`View ${project.title} project`}
                >
                  View project <span aria-hidden>↗</span>
                </button>
              </div>
              <div>
                {project.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.stats}>
                {project.stats.map((stat) => (
                  <div key={stat.label} className={styles.statItem}>
                    <div className={[styles.statValue, "text-gradient-flame"].join(" ")}>
                      {stat.value}
                    </div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </Container>

      {activeProject && (
        <WorkModal
          key={activeProject.id}
          project={activeProject}
          onClose={onClose}
        />
      )}
    </section>
  );
}
