interface CurlyArrowProps {
  className?: string;
}

export default function CurlyArrow({ className = "" }: CurlyArrowProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hand-drawn style curving path */}
      <path
        d="M20 10 C 50 10, 80 40, 60 90"
        stroke="#E3B96B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <path
        d="M40 75 L 60 90 L 75 65"
        stroke="#E3B96B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}