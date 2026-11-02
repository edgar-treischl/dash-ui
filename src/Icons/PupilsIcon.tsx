export interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function PupilsIcon({
  className,
  width = 24,
  height = 24,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Head */}
      <circle cx="12" cy="8" r="3" />

      {/* Shoulders */}
      <path d="M6.5 19c.8-3 2.9-5 5.5-5s4.7 2 5.5 5" />
    </svg>
  );
}