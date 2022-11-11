export function weeksBetween(initialDate, finalDate) {
  return Math.round((finalDate - initialDate) / (7 * 24 * 60 * 60 * 1000));
}