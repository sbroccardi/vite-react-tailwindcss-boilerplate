// One-Line Helper Function to Join Tailwind Classes
// https://medium.com/@matijazib/one-line-helper-function-to-join-tailwind-classes-babab4f82d9d
export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(" ");
}
