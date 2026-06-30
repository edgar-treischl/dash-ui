/**
 * Format a number with thousand separators
 * @param value - The number to format
 * @returns Formatted number string (e.g., "1.234")
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('de-DE').format(value)
}
