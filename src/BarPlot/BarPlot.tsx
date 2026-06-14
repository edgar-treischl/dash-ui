// src/BarPlot.tsx
import { memo } from 'react'
import {
  CHART_HEIGHT,
  CHART_PADDING,
  CHART_WIDTH,
  formatPercent,
  SCHOOL_TYPE_COLORS,
  SCHOOL_TYPE_LABELS,
  type SchoolType,
} from '../retention' // adjust path if needed

type BarData = {
  type: SchoolType
  count: number
  percent: number
}

type BarPlotProps = {
  data: BarData[]
  year: string
  maxPercent?: number
}

type ComponentPeek = {
  description: string
  categories: string[]
  madeFrom: string[]
}

function BarPlotComponent({ data, year, maxPercent: customMaxPercent }: BarPlotProps) {
  const chartInnerWidth = CHART_WIDTH - CHART_PADDING.left - CHART_PADDING.right

  const maxPercent = customMaxPercent ?? Math.max(...data.map(d => d.percent), 50)
  const xScale = (value: number) => (value / maxPercent) * chartInnerWidth
  const barHeight = 50
  const barSpacing = 20

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      style={{ border: '1px solid #eee' }}
    >
      <text x={CHART_PADDING.left} y={CHART_PADDING.top - 10} fontSize="12">
        {year}
      </text>
      {data.map((item, index) => {
        const y = CHART_PADDING.top + index * (barHeight + barSpacing)
        const width = xScale(item.percent)

        return (
          <g key={item.type}>
            <text
              x={CHART_PADDING.left - 10}
              y={y + barHeight / 2}
              textAnchor="end"
              fontSize="12"
              fill="#666"
            >
              {SCHOOL_TYPE_LABELS[item.type]}
            </text>
            <rect
              x={CHART_PADDING.left}
              y={y}
              width={width}
              height={barHeight}
              fill={SCHOOL_TYPE_COLORS[item.type]}
            />
            <text
              x={CHART_PADDING.left + width + 10}
              y={y + barHeight / 2}
              fontSize="12"
            >
              {formatPercent(item.percent)}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export const BarPlot = Object.assign(memo(BarPlotComponent), {
  peek: {
    description: 'A horizontal bar chart component for visualizing school type distribution data with percentage values.',
    categories: ['visualizations', 'charts'],
    madeFrom: [],
  } as ComponentPeek,
})