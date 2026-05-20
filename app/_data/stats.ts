export type Stat = { value: string; label: string };

export const STATS: readonly Stat[] = [
  { value: "40+", label: "Products shipped" },
  { value: "98%", label: "Client satisfaction" },
  { value: "4×", label: "Avg. faster than in-house" },
  { value: "15+yr", label: "Industry experience" },
] as const;
