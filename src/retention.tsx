// Color scheme for school types
export const SCHOOL_TYPE_COLORS: Record<SchoolType, string> = {
  'GS': '#264653',            // blue
  'MS': '#2a9d8f',            // red
  'RS': '#e9c46a',            // green
  'GY': '#f4a261',            // amber
  'IGS': '#e76f51',           // purple
}

// Chart configuration
export const CHART_WIDTH = 800
export const CHART_HEIGHT = 500
export const CHART_PADDING = {
  top: 40,
  right: 60,
  bottom: 80,
  left: 90,
}


// Format percentage for display
/**
 * Formats a number as a percentage string with 2 decimal places
 * @param value - Numeric value to format
 * @returns Formatted string (e.g., "42.50%")
 */
export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`
}


export const SCHOOL_TYPES = ['GS', 'MS', 'RS', 'GY', 'IGS'] as const

// Mapping from old school type names to new abbreviations
export const SCHOOL_TYPE_MAPPING: Record<string, SchoolType> = {
  'Grundschulen': 'GS',
  'Mittel-/Hauptschulen': 'MS',
  'Realschulen': 'RS',
  'Gymnasien': 'GY',
  'Int. Gesamtschulen': 'IGS',
  'Gesamt': 'IGS', // legacy mapping
}

// Reverse mapping from abbreviations to display labels
export const SCHOOL_TYPE_LABELS: Record<SchoolType, string> = {
  'GS': 'GS',
  'MS': 'MS',
  'RS': 'RS',
  'GY': 'GY',
  'IGS': 'IGS',
}

// School years available for selection
export const SCHOOL_YEARS = [
  '2024/25',
  '2023/24',
  '2022/23',
  '2021/22',
  '2020/21',
] as const

export type SchoolType = (typeof SCHOOL_TYPES)[number]
export type SchoolTypeFilter = SchoolType | 'All school types'
export type SchoolYear = string // e.g., "2024/25"