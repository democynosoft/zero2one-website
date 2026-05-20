"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { NAV_LINKS } from "@/app/_data/navigation";
import { Container } from "@/app/_components/ui/Container";
import { CloseIcon } from "@/app/_components/ui/Icon";
import { smoothScrollTo } from "@/app/_lib/smooth-scroll";

import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [tinted, setTinted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    menuToggleRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setHidden(y > lastY && y > 80);
        setTinted(y > 40);
        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      if (smoothScrollTo(href)) {
        e.preventDefault();
        setMenuOpen(false);
      }
    },
    [],
  );

  return (
    <>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <header
        id="site-header"
        className={[
          styles.nav,
          hidden ? styles.navHidden : "",
          tinted ? styles.navTinted : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Container className={styles.inner}>
          <a
            href="#top"
            className={styles.logo}
            aria-label="zero2one — back to top"
            onClick={(e) => handleAnchor(e, "#top")}
          >
            <Image
              src="/brand/nav-logo.png"
              alt="zero2one"
              width={120}
              height={40}
              priority
              sizes="120px"
            />
          </a>

          <nav aria-label="Primary" className={styles.links}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={styles.cta}
            onClick={(e) => handleAnchor(e, "#contact")}
          >
            Let&rsquo;s chat
          </a>

          <button
            ref={menuToggleRef}
            type="button"
            className={styles.hamburger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <CloseIcon size={24} />
            ) : (
              <span className={styles.hamburgerBars} aria-hidden>
                <span />
                <span />
                <span />
              </span>
            )}
          </button>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleAnchor}
      />
    </>
  );
}
