import type { ReactNode } from "react";

import { cn } from "@/app/_lib/cn";

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("section-label", className)}>{children}</p>;
}
