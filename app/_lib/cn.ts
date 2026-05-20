/**
 * Minimal className combiner. Lighter than clsx — we don't need
 * object syntax anywhere in this project.
 */
export function cn(
  ...values: ReadonlyArray<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}
