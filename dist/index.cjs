"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BarPlot: () => BarPlot,
  LineChart: () => LineChart,
  LineChartLegend: () => LineChartLegend,
  SelectIcon: () => SelectIcon,
  YearSelect: () => YearSelect
});
module.exports = __toCommonJS(index_exports);

// src/BarPlot/BarPlot.tsx
var import_react = require("react");

// src/retention.tsx
var SCHOOL_TYPE_COLORS = {
  "GS": "#264653",
  // blue
  "MS": "#2a9d8f",
  // red
  "RS": "#e9c46a",
  // green
  "GY": "#f4a261",
  // amber
  "IGS": "#e76f51"
  // purple
};
var CHART_WIDTH = 800;
var CHART_HEIGHT = 500;
var CHART_PADDING = {
  top: 40,
  right: 60,
  bottom: 80,
  left: 90
};
function formatPercent(value) {
  return `${value.toFixed(2)}%`;
}
var SCHOOL_TYPES = ["GS", "MS", "RS", "GY", "IGS"];
var SCHOOL_TYPE_LABELS = {
  "GS": "GS",
  "MS": "MS",
  "RS": "RS",
  "GY": "GY",
  "IGS": "IGS"
};
var SCHOOL_YEARS = [
  "2024/25",
  "2023/24",
  "2022/23",
  "2021/22",
  "2020/21"
];

// src/BarPlot/BarPlot.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function BarPlotComponent({ data, year, maxPercent: customMaxPercent }) {
  const chartInnerWidth = CHART_WIDTH - CHART_PADDING.left - CHART_PADDING.right;
  const maxPercent = customMaxPercent ?? Math.max(...data.map((d) => d.percent), 50);
  const xScale = (value) => value / maxPercent * chartInnerWidth;
  const barHeight = 50;
  const barSpacing = 20;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      viewBox: `0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`,
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      style: { border: "1px solid #eee" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", { x: CHART_PADDING.left, y: CHART_PADDING.top - 10, fontSize: "12", children: year }),
        data.map((item, index) => {
          const y = CHART_PADDING.top + index * (barHeight + barSpacing);
          const width = xScale(item.percent);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "text",
              {
                x: CHART_PADDING.left - 10,
                y: y + barHeight / 2,
                textAnchor: "end",
                fontSize: "12",
                fill: "#666",
                children: SCHOOL_TYPE_LABELS[item.type]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "rect",
              {
                x: CHART_PADDING.left,
                y,
                width,
                height: barHeight,
                fill: SCHOOL_TYPE_COLORS[item.type]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "text",
              {
                x: CHART_PADDING.left + width + 10,
                y: y + barHeight / 2,
                fontSize: "12",
                children: formatPercent(item.percent)
              }
            )
          ] }, item.type);
        })
      ]
    }
  );
}
var BarPlot = Object.assign((0, import_react.memo)(BarPlotComponent), {
  peek: {
    description: "A horizontal bar chart component for visualizing school type distribution data with percentage values.",
    categories: ["visualizations", "charts"],
    madeFrom: []
  }
});

// src/Selector/YearSelect.tsx
var import_react2 = require("react");

// src/Icons/SelectIcon.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function SelectIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "select-icon-svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: "M4 6.5L8 10.5L12 6.5",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}

// src/Selector/YearSelect.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function YearSelectComponent({
  selectedYear,
  onYearChange,
  label = "W\xE4hlen Sie ein Schuljahr:",
  disabled = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "class-retention-mfe__control-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "class-retention-mfe__control-label", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: label })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "class-retention-mfe__control-pair", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "year-select", className: "class-retention-mfe__control-short-label", children: "Schuljahr" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "select",
        {
          id: "year-select",
          className: "class-retention-mfe__control-select",
          value: selectedYear,
          onChange: (e) => onYearChange(e.target.value),
          disabled,
          children: SCHOOL_YEARS.map((year) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: year, children: year }, year))
        }
      )
    ] })
  ] });
}
var YearSelect = (0, import_react2.memo)(YearSelectComponent);

// src/LineChart/LineChart.tsx
var import_react3 = require("react");

// src/utils/formatters.ts
function formatNumber(value) {
  return new Intl.NumberFormat("de-DE").format(value);
}

// src/LineChart/LineChart.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function LineChartComponent({ data, minYear, maxYear }) {
  const [hoveredPoint, setHoveredPoint] = (0, import_react3.useState)(null);
  const allYearsSet = /* @__PURE__ */ new Set();
  const schoolYearMap = /* @__PURE__ */ new Map();
  data.forEach((schoolTypeData) => {
    schoolTypeData.forEach((d) => {
      allYearsSet.add(d.year);
      schoolYearMap.set(d.year, d.syear);
    });
  });
  const allYears = Array.from(allYearsSet).map((y) => parseInt(y)).sort((a, b) => a - b);
  const chartInnerWidth = CHART_WIDTH - CHART_PADDING.left - CHART_PADDING.right;
  const chartInnerHeight = CHART_HEIGHT - CHART_PADDING.top - CHART_PADDING.bottom;
  const maxRetention = Math.max(
    ...Array.from(data.values()).flat().map((d) => d.number) || [0]
  );
  const yScale = (value) => CHART_HEIGHT - CHART_PADDING.bottom - value / maxRetention * chartInnerHeight;
  const yearRange = Math.max(...allYears) - Math.min(...allYears) || 1;
  const xScale = (year) => {
    const yearNum = parseInt(year);
    return CHART_PADDING.left + (yearNum - Math.min(...allYears)) / yearRange * chartInnerWidth;
  };
  const yTicks = [0, Math.round(maxRetention / 4), Math.round(maxRetention / 2), Math.round(maxRetention * 3 / 4), maxRetention];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "svg",
    {
      viewBox: `0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`,
      className: "line-chart",
      role: "img",
      "aria-label": "Liniendiagramm der Klassenwiederholungen im Zeitverlauf nach Schultyp",
      children: [
        yTicks.map((tick) => {
          const y = yScale(tick);
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "line",
              {
                x1: CHART_PADDING.left,
                x2: CHART_WIDTH - CHART_PADDING.right,
                y1: y,
                y2: y,
                className: "line-chart__grid-line",
                stroke: "#e5e7eb",
                strokeWidth: 1
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "text",
              {
                x: CHART_PADDING.left - 10,
                y: y + 4,
                className: "line-chart__axis-label line-chart__axis-label--y",
                fontSize: "12",
                fill: "#666",
                textAnchor: "end",
                children: formatNumber(tick)
              }
            )
          ] }, `y-${tick}`);
        }),
        allYears.map((year) => {
          const x = xScale(year.toString());
          const schoolYear = schoolYearMap.get(year.toString()) || year.toString();
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "text",
            {
              x,
              y: CHART_HEIGHT - CHART_PADDING.bottom + 24,
              textAnchor: "middle",
              className: "line-chart__axis-label",
              fontSize: "12",
              fill: "#666",
              children: schoolYear
            },
            `x-${year}`
          );
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "line",
          {
            x1: CHART_PADDING.left,
            x2: CHART_WIDTH - CHART_PADDING.right,
            y1: CHART_HEIGHT - CHART_PADDING.bottom,
            y2: CHART_HEIGHT - CHART_PADDING.bottom,
            className: "line-chart__axis-line",
            stroke: "#333",
            strokeWidth: 2
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "line",
          {
            x1: CHART_PADDING.left,
            x2: CHART_PADDING.left,
            y1: CHART_PADDING.top,
            y2: CHART_HEIGHT - CHART_PADDING.bottom,
            className: "line-chart__axis-line",
            stroke: "#333",
            strokeWidth: 2
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "text",
          {
            x: CHART_WIDTH / 2,
            y: CHART_HEIGHT - 10,
            textAnchor: "middle",
            className: "line-chart__axis-title",
            fontSize: "16",
            fontWeight: "500",
            fill: "#333",
            children: [
              "Schuljahr ",
              minYear,
              "/",
              maxYear
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "text",
          {
            x: 15,
            y: CHART_HEIGHT / 2,
            textAnchor: "middle",
            className: "line-chart__axis-title",
            transform: `rotate(-90 15 ${CHART_HEIGHT / 2})`,
            fontSize: "16",
            fontWeight: "500",
            fill: "#333",
            children: "Anzahl Wiederholungen"
          }
        ),
        SCHOOL_TYPES.map((schoolType) => {
          const schoolTypeData = data.get(schoolType) || [];
          if (schoolTypeData.length === 0) return null;
          const pathData = schoolTypeData.map((d, i) => {
            const x = xScale(d.year);
            const y = yScale(d.number);
            return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
          }).join(" ");
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "path",
              {
                d: pathData,
                stroke: SCHOOL_TYPE_COLORS[schoolType],
                strokeWidth: 3,
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            schoolTypeData.map((d) => {
              const cx = xScale(d.year);
              const cy = yScale(d.number);
              return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "circle",
                {
                  cx,
                  cy,
                  r: hoveredPoint?.schoolType === schoolType && hoveredPoint?.syear === d.syear ? 7 : 5,
                  fill: SCHOOL_TYPE_COLORS[schoolType],
                  style: { cursor: "pointer", transition: "r 0.2s" },
                  onMouseEnter: () => setHoveredPoint({
                    schoolType,
                    syear: d.syear,
                    value: d.number,
                    x: cx,
                    y: cy
                  }),
                  onMouseLeave: () => setHoveredPoint(null)
                },
                `${schoolType}-${d.year}`
              );
            })
          ] }, schoolType);
        }),
        hoveredPoint && (() => {
          const tooltipHeight = 50;
          const tooltipWidth = 130;
          const tooltipPadding = 10;
          const tooltipY = hoveredPoint.y - tooltipHeight - tooltipPadding < CHART_PADDING.top ? hoveredPoint.y + tooltipPadding + 10 : hoveredPoint.y - tooltipHeight - tooltipPadding;
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "rect",
              {
                x: hoveredPoint.x - tooltipWidth / 2,
                y: tooltipY,
                width: tooltipWidth,
                height: tooltipHeight,
                rx: 6,
                fill: "white",
                stroke: SCHOOL_TYPE_COLORS[hoveredPoint.schoolType],
                strokeWidth: 2,
                className: "line-chart__tooltip-bg",
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "text",
              {
                x: hoveredPoint.x,
                y: tooltipY + 16,
                textAnchor: "middle",
                className: "line-chart__tooltip-text line-chart__tooltip-label",
                fontSize: "14",
                fontWeight: "500",
                fill: "#333",
                children: hoveredPoint.schoolType
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "text",
              {
                x: hoveredPoint.x,
                y: tooltipY + 28,
                textAnchor: "middle",
                className: "line-chart__tooltip-text line-chart__tooltip-label",
                fontSize: "12",
                fill: "#666",
                fontWeight: "400",
                children: hoveredPoint.syear
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "text",
              {
                x: hoveredPoint.x,
                y: tooltipY + 42,
                textAnchor: "middle",
                className: "line-chart__tooltip-text",
                fontSize: "14",
                fontWeight: "600",
                fill: "#333",
                children: formatNumber(hoveredPoint.value)
              }
            )
          ] });
        })()
      ]
    }
  );
}
var LineChart = (0, import_react3.memo)(LineChartComponent);

// src/LineChart/LineChartLegend.tsx
var import_react4 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function LineChartLegendComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "line-chart__legend", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "line-chart__legend-label", children: "Schultyp" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { className: "line-chart__legend-list", children: SCHOOL_TYPES.map((schoolType) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { className: "line-chart__legend-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "span",
        {
          className: "line-chart__legend-swatch",
          style: { backgroundColor: SCHOOL_TYPE_COLORS[schoolType] }
        }
      ),
      schoolType
    ] }, schoolType)) })
  ] });
}
var LineChartLegend = (0, import_react4.memo)(LineChartLegendComponent);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BarPlot,
  LineChart,
  LineChartLegend,
  SelectIcon,
  YearSelect
});
