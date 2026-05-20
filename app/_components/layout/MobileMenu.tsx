"use client";

import { useEffect, useRef } from "react";

import { NAV_LINKS } from "@/app/_data/navigation";
import { Button } from "@/app/_components/ui/Button";
import { CloseIcon } from "@/app/_components/ui/Icon";

import styles from "./MobileMenu.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export function MobileMenu({ open, onClose, onNavigate }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={[styles.root, open ? styles.open : ""].filter(Boolean).join(" ")}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label="Site navigation"
    >
      <button
        ref={closeBtnRef}
        type="button"
        className={styles.close}
        aria-label="Close menu"
        onClick={onClose}
      >
        <CloseIcon size={24} />
      </button>

      <nav aria-label="Mobile primary" className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => onNavigate(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <Button
          href="#contact"
          className={styles.cta}
          onClick={(e) =>
            onNavigate(e as React.MouseEvent<HTMLAnchorElement>, "#contact")
          }
        >
          Let&rsquo;s chat
        </Button>
      </nav>
    </div>
  );
}
