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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BarPlot,
  SelectIcon,
  YearSelect
});
