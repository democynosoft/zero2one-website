import { forwardRef } from "react";
import type { ElementType, ReactNode } from "react";

import { cn } from "@/app/_lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ as: Tag = "div", children, className }, ref) {
    return (
      <Tag ref={ref} className={cn("container-shell", className)}>
        {children}
      </Tag>
    );
  },
);
