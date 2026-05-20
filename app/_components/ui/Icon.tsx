import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function withDefaults({ size = 16, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16",
    "aria-hidden": true,
    focusable: false,
    ...rest,
  };
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...withDefaults({ ...props, viewBox: "0 0 14 14" })}>
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftSmallIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path
        d="M10 3L5 8l5 5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightSmallIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path
        d="M6 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path
        d="M2 4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <path
        d="M2 4l6 5 6-5"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <circle cx={8} cy={8} r={6} stroke="currentColor" strokeWidth={1.2} />
      <path
        d="M8 4v4l3 2"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      focusable={false}
      {...props}
    >
      <path
        d="M10 2L12.5 7.5L18 8.27L14 12.14L14.9 17.7L10 15L5.1 17.7L6 12.14L2 8.27L7.5 7.5L10 2Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BarsIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      focusable={false}
      {...props}
    >
      <rect x={2} y={10} width={4} height={8} rx={1} stroke="currentColor" strokeWidth={1.3} />
      <rect x={8} y={6} width={4} height={12} rx={1} stroke="currentColor" strokeWidth={1.3} />
      <rect x={14} y={2} width={4} height={16} rx={1} stroke="currentColor" strokeWidth={1.3} />
    </svg>
  );
}

export function MapleLeafIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2015 -2000 4030 4030"
      aria-hidden
      focusable={false}
      {...props}
    >
      <path
        fill="currentColor"
        d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z"
      />
    </svg>
  );
}

export function ChevronRightCircle({ size = 28, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      focusable={false}
      {...props}
    >
      <path
        d="M2 6h8M7 3l3 3-3 3"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
