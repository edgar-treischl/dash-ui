// src/BarPlot/BarPlot.tsx
import { memo } from "react";

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
import { jsx, jsxs } from "react/jsx-runtime";
function BarPlotComponent({ data, year, maxPercent: customMaxPercent }) {
  const chartInnerWidth = CHART_WIDTH - CHART_PADDING.left - CHART_PADDING.right;
  const maxPercent = customMaxPercent ?? Math.max(...data.map((d) => d.percent), 50);
  const xScale = (value) => value / maxPercent * chartInnerWidth;
  const barHeight = 50;
  const barSpacing = 20;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: `0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`,
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      style: { border: "1px solid #eee" },
      children: [
        /* @__PURE__ */ jsx("text", { x: CHART_PADDING.left, y: CHART_PADDING.top - 10, fontSize: "12", children: year }),
        data.map((item, index) => {
          const y = CHART_PADDING.top + index * (barHeight + barSpacing);
          const width = xScale(item.percent);
          return /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsx(
              "rect",
              {
                x: CHART_PADDING.left,
                y,
                width,
                height: barHeight,
                fill: SCHOOL_TYPE_COLORS[item.type]
              }
            ),
            /* @__PURE__ */ jsx(
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
var BarPlot = Object.assign(memo(BarPlotComponent), {
  peek: {
    description: "A horizontal bar chart component for visualizing school type distribution data with percentage values.",
    categories: ["visualizations", "charts"],
    madeFrom: []
  }
});

// src/Selector/YearSelect.tsx
import { memo as memo2 } from "react";

// src/Icons/SelectIcon.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function SelectIcon() {
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "select-icon-svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx2(
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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function YearSelectComponent({
  selectedYear,
  onYearChange,
  label = "W\xE4hlen Sie ein Schuljahr:",
  disabled = false
}) {
  return /* @__PURE__ */ jsxs2("div", { className: "class-retention-mfe__control-group", children: [
    /* @__PURE__ */ jsxs2("div", { className: "class-retention-mfe__control-label", children: [
      /* @__PURE__ */ jsx3(SelectIcon, {}),
      /* @__PURE__ */ jsx3("span", { children: label })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "class-retention-mfe__control-pair", children: [
      /* @__PURE__ */ jsx3("label", { htmlFor: "year-select", className: "class-retention-mfe__control-short-label", children: "Schuljahr" }),
      /* @__PURE__ */ jsx3(
        "select",
        {
          id: "year-select",
          className: "class-retention-mfe__control-select",
          value: selectedYear,
          onChange: (e) => onYearChange(e.target.value),
          disabled,
          children: SCHOOL_YEARS.map((year) => /* @__PURE__ */ jsx3("option", { value: year, children: year }, year))
        }
      )
    ] })
  ] });
}
var YearSelect = memo2(YearSelectComponent);
export {
  BarPlot,
  SelectIcon,
  YearSelect
};
