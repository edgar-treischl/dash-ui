import { memo } from 'react'
import { SCHOOL_TYPE_COLORS, SCHOOL_TYPES } from '../retention'

/**
 * Legend component for showing school type colors
 */
function LineChartLegendComponent() {
  return (
    <div className="line-chart__legend">
      <div className="line-chart__legend-label">Schultyp</div>
      <ul className="line-chart__legend-list">
        {SCHOOL_TYPES.map((schoolType) => (
          <li key={schoolType} className="line-chart__legend-item">
            <span
              className="line-chart__legend-swatch"
              style={{ backgroundColor: SCHOOL_TYPE_COLORS[schoolType] }}
            />
            {schoolType}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const LineChartLegend = memo(LineChartLegendComponent)
