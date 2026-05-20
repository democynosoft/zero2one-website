"use client";

/**
 * Smooth-scroll to a hash target while offsetting for the fixed header.
 * Returns true when navigation was handled, false otherwise.
 */
export function smoothScrollTo(hash: string, offset = 72): boolean {
  if (!hash.startsWith("#")) return false;
  const target = document.querySelector(hash);
  if (!target) return false;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}
