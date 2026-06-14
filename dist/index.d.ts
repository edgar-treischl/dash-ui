import * as react from 'react';

declare const SCHOOL_TYPES: readonly ["GS", "MS", "RS", "GY", "IGS"];
type SchoolType = (typeof SCHOOL_TYPES)[number];
type SchoolYear = string;

type BarData = {
    type: SchoolType;
    count: number;
    percent: number;
};
type BarPlotProps = {
    data: BarData[];
    year: string;
    maxPercent?: number;
};
type ComponentPeek = {
    description: string;
    categories: string[];
    madeFrom: string[];
};
declare function BarPlotComponent({ data, year, maxPercent: customMaxPercent }: BarPlotProps): react.JSX.Element;
declare const BarPlot: react.NamedExoticComponent<BarPlotProps> & {
    readonly type: typeof BarPlotComponent;
} & {
    peek: ComponentPeek;
};

type YearSelectProps = {
    selectedYear: SchoolYear;
    onYearChange: (year: SchoolYear) => void;
    label?: string;
    disabled?: boolean;
};
/**
 * Year selector dropdown component
 *
 * Self-contained component designed for use in component libraries.
 * Includes all necessary styles in YearSelect.css.
 *
 * @param selectedYear - Currently selected school year (e.g., "2020/21", "2021/22")
 * @param onYearChange - Callback when year selection changes
 * @param label - Optional custom label for the control (default: "Wählen Sie ein Schuljahr:")
 * @param disabled - Optional disabled state for the select element
 *
 * @example
 * ```tsx
 * import { YearSelect } from '@controls/YearSelect'
 *
 * function MyComponent() {
 *   const [year, setYear] = useState('2023/24')
 *   return (
 *     <YearSelect
 *       selectedYear={year}
 *       onYearChange={setYear}
 *       label="Choose year:"
 *     />
 *   )
 * }
 * ```
 *
 * @remarks
 * CSS Variables used (with fallback defaults):
 * - --class-retention-heading: Text color for labels (default: #333)
 * - --class-retention-accent: Accent color for focus states (default: #008dc9)
 * - --class-retention-border: Border color (default: #e5e7eb)
 * - --class-retention-bg: Background color (default: #f9fafb)
 * - --class-retention-text: Secondary text color (default: #666)
 */
declare function YearSelectComponent({ selectedYear, onYearChange, label, disabled, }: YearSelectProps): react.JSX.Element;
declare const YearSelect: react.MemoExoticComponent<typeof YearSelectComponent>;

declare function SelectIcon(): react.JSX.Element;

export { BarPlot, SelectIcon, YearSelect, type YearSelectProps };
