"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import {
  CloseIcon,
} from "@/app/_components/ui/Icon";
import type { Project } from "@/app/_data/projects";

import styles from "./WorkModal.module.css";

type Props = {
  /** When null the modal stays unmounted. Always render with `key={project.id}`
   *  so React resets internal slide state on project change. */
  project: Project | null;
  onClose: () => void;
};

export function WorkModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Keyboard nav + body scroll lock + focus management
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className={styles.close}
        aria-label="Close gallery"
        onClick={onClose}
      >
        <CloseIcon size={18} />
      </button>

      <h2 id="modal-title" className={styles.srTitle}>
        {project.title} — project display
      </h2>

      <div className={styles.inner}>
        <div className={styles.slide}>
          <div className={styles.imageWrap}>
            <Image
              src={project.display}
              alt={`${project.title} project showcase`}
              width={1920}
              height={1080}
              sizes="(max-width: 800px) 90vw, 960px"
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
