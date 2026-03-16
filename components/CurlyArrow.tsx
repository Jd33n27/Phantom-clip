interface CurlyArrowProps {
  className?: string;
}

export default function CurlyArrow({ className = "" }: CurlyArrowProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* Tall, vertically straight hand-drawn loop */}
      <path
        d="M 50 10 C 50 60 90 70 80 110 C 70 150 20 130 30 90 C 40 50 60 110 50 180"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Arrow head pointing straight down */}
      <path
        d="M 35 165 L 50 185 L 65 165"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
