import './SelectIcon.css'

type IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function SelectIcon({
  className,
  width = 16,
  height = 16,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'select-icon-svg'}
      aria-hidden="true"
    >
      <path
        d="M4 6.5L8 10.5L12 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}