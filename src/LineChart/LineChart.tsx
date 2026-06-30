import { memo, useState } from 'react'
import { SCHOOL_TYPE_COLORS, SCHOOL_TYPES, CHART_WIDTH, CHART_HEIGHT, CHART_PADDING } from '../retention'
import type { SchoolType, SchoolYear } from '../retention'
import { formatNumber } from '../utils/formatters'

/**
 * Data structure for retention data points
 */
export type RetentionDatum = {
  syear: SchoolYear
  stype: SchoolType
  group: string
  number: number
  year: string
  n_overall: number
  percent: number
}

type LineChartProps = {
  data: Map<SchoolType, RetentionDatum[]>
  minYear: number
  maxYear: number
}

type HoveredPoint = {
  schoolType: SchoolType
  syear: string
  value: number
  x: number
  y: number
} | null

/**
 * Line chart component - Multi-series line chart for retention trends over time
 * @param data - Map of school types to retention data points
 * @param minYear - Minimum year to display
 * @param maxYear - Maximum year to display
 */
function LineChartComponent({ data, minYear, maxYear }: LineChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<HoveredPoint>(null)
  
  // Get all years from the data
  const allYearsSet = new Set<string>()
  const schoolYearMap = new Map<string, string>() // year -> syear mapping
  data.forEach((schoolTypeData) => {
    schoolTypeData.forEach((d) => {
      allYearsSet.add(d.year)
      schoolYearMap.set(d.year, d.syear)
    })
  })
  const allYears = Array.from(allYearsSet).map(y => parseInt(y)).sort((a, b) => a - b)

  // Calculate scales
  const chartInnerWidth = CHART_WIDTH - CHART_PADDING.left - CHART_PADDING.right
  const chartInnerHeight = CHART_HEIGHT - CHART_PADDING.top - CHART_PADDING.bottom

  // Y-axis: retention count
  const maxRetention = Math.max(
    ...(Array.from(data.values()).flat().map(d => d.number) || [0])
  )
  const yScale = (value: number) =>
    CHART_HEIGHT - CHART_PADDING.bottom - (value / maxRetention) * chartInnerHeight

  // X-axis: year
  const yearRange = Math.max(...allYears) - Math.min(...allYears) || 1
  const xScale = (year: string) => {
    const yearNum = parseInt(year)
    return CHART_PADDING.left + ((yearNum - Math.min(...allYears)) / yearRange) * chartInnerWidth
  }

  // Y-axis ticks
  const yTicks = [0, Math.round(maxRetention / 4), Math.round(maxRetention / 2), Math.round((maxRetention * 3) / 4), maxRetention]

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
      className="line-chart"
      role="img"
      aria-label="Liniendiagramm der Klassenwiederholungen im Zeitverlauf nach Schultyp"
    >
      {/* Y-axis grid lines and labels */}
      {yTicks.map((tick) => {
        const y = yScale(tick)
        return (
          <g key={`y-${tick}`}>
            <line
              x1={CHART_PADDING.left}
              x2={CHART_WIDTH - CHART_PADDING.right}
              y1={y}
              y2={y}
              className="line-chart__grid-line"
              stroke="#e5e7eb"
              strokeWidth={1}
            />
            <text
              x={CHART_PADDING.left - 10}
              y={y + 4}
              className="line-chart__axis-label line-chart__axis-label--y"
              fontSize="12"
              fill="#666"
              textAnchor="end"
            >
              {formatNumber(tick)}
            </text>
          </g>
        )
      })}

      {/* X-axis labels */}
      {allYears.map((year) => {
        const x = xScale(year.toString())
        const schoolYear = schoolYearMap.get(year.toString()) || year.toString()
        return (
          <text
            key={`x-${year}`}
            x={x}
            y={CHART_HEIGHT - CHART_PADDING.bottom + 24}
            textAnchor="middle"
            className="line-chart__axis-label"
            fontSize="12"
            fill="#666"
          >
            {schoolYear}
          </text>
        )
      })}

      {/* Axes */}
      <line
        x1={CHART_PADDING.left}
        x2={CHART_WIDTH - CHART_PADDING.right}
        y1={CHART_HEIGHT - CHART_PADDING.bottom}
        y2={CHART_HEIGHT - CHART_PADDING.bottom}
        className="line-chart__axis-line"
        stroke="#333"
        strokeWidth={2}
      />
      <line
        x1={CHART_PADDING.left}
        x2={CHART_PADDING.left}
        y1={CHART_PADDING.top}
        y2={CHART_HEIGHT - CHART_PADDING.bottom}
        className="line-chart__axis-line"
        stroke="#333"
        strokeWidth={2}
      />

      {/* Axis labels */}
      <text
        x={CHART_WIDTH / 2}
        y={CHART_HEIGHT - 10}
        textAnchor="middle"
        className="line-chart__axis-title"
        fontSize="16"
        fontWeight="500"
        fill="#333"
      >
        Schuljahr {minYear}/{maxYear}
      </text>
      <text
        x={15}
        y={CHART_HEIGHT / 2}
        textAnchor="middle"
        className="line-chart__axis-title"
        transform={`rotate(-90 15 ${CHART_HEIGHT / 2})`}
        fontSize="16"
        fontWeight="500"
        fill="#333"
      >
        Anzahl Wiederholungen
      </text>

      {/* Lines and points for each school type */}
      {SCHOOL_TYPES.map((schoolType) => {
        const schoolTypeData = data.get(schoolType) || []
        if (schoolTypeData.length === 0) return null

        // Create path for line
        const pathData = schoolTypeData
          .map((d: RetentionDatum, i: number) => {
            const x = xScale(d.year)
            const y = yScale(d.number)
            return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
          })
          .join(' ')

        return (
          <g key={schoolType}>
            <path
              d={pathData}
              stroke={SCHOOL_TYPE_COLORS[schoolType]}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {schoolTypeData.map((d: RetentionDatum) => {
              const cx = xScale(d.year)
              const cy = yScale(d.number)
              return (
                <circle
                  key={`${schoolType}-${d.year}`}
                  cx={cx}
                  cy={cy}
                  r={hoveredPoint?.schoolType === schoolType && hoveredPoint?.syear === d.syear ? 7 : 5}
                  fill={SCHOOL_TYPE_COLORS[schoolType]}
                  style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                  onMouseEnter={() =>
                    setHoveredPoint({
                      schoolType,
                      syear: d.syear,
                      value: d.number,
                      x: cx,
                      y: cy,
                    })
                  }
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              )
            })}
          </g>
        )
      })}

      {/* Tooltip */}
      {hoveredPoint && (() => {
        const tooltipHeight = 50
        const tooltipWidth = 130
        const tooltipPadding = 10
        // Position tooltip above point by default, or below if it would be cropped
        const tooltipY = hoveredPoint.y - tooltipHeight - tooltipPadding < CHART_PADDING.top
          ? hoveredPoint.y + tooltipPadding + 10
          : hoveredPoint.y - tooltipHeight - tooltipPadding
        
        return (
          <g>
            {/* Tooltip background */}
            <rect
              x={hoveredPoint.x - tooltipWidth / 2}
              y={tooltipY}
              width={tooltipWidth}
              height={tooltipHeight}
              rx={6}
              fill="white"
              stroke={SCHOOL_TYPE_COLORS[hoveredPoint.schoolType]}
              strokeWidth={2}
              className="line-chart__tooltip-bg"
              filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
            />
            {/* Tooltip text - School Type */}
            <text
              x={hoveredPoint.x}
              y={tooltipY + 16}
              textAnchor="middle"
              className="line-chart__tooltip-text line-chart__tooltip-label"
              fontSize="14"
              fontWeight="500"
              fill="#333"
            >
              {hoveredPoint.schoolType}
            </text>
            {/* Tooltip text - Year */}
            <text
              x={hoveredPoint.x}
              y={tooltipY + 28}
              textAnchor="middle"
              className="line-chart__tooltip-text line-chart__tooltip-label"
              fontSize="12"
              fill="#666"
              fontWeight="400"
            >
              {hoveredPoint.syear}
            </text>
            {/* Tooltip text - Value */}
            <text
              x={hoveredPoint.x}
              y={tooltipY + 42}
              textAnchor="middle"
              className="line-chart__tooltip-text"
              fontSize="14"
              fontWeight="600"
              fill="#333"
            >
              {formatNumber(hoveredPoint.value)}
            </text>
          </g>
        )
      })()}
    </svg>
  )
}

export const LineChart = memo(LineChartComponent)
