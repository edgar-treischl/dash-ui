
type IconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function TeachersIcon({
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
      {/* Cap */}
      <path d="M2 9l10-5 10 5-10 5-10-5z" />

      {/* Tassel */}
      <path d="M22 9v6" />

      {/* Base */}
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
    </svg>
  );
}
