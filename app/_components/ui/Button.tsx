import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/app/_lib/cn";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = LinkProps | NativeButtonProps;

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

const sizeClass: Record<Size, string> = {
  md: styles.md,
  sm: styles.sm,
};

function getClasses(variant: Variant, size: Size, className?: string) {
  return cn(styles.btn, variantClass[variant], sizeClass[size], className);
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const {
      href,
      variant = "primary",
      size = "md",
      className,
      children,
      ...rest
    } = props;
    return (
      <a href={href} className={getClasses(variant, size, className)} {...rest}>
        {children}
      </a>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className,
    children,
    type = "button",
    ...rest
  } = props;
  return (
    <button
      type={type}
      className={getClasses(variant, size, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
