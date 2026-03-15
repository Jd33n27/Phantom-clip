// components/CurlyArrow.tsx
import React from "react";

export default function CurlyArrow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center opacity-80 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
      >
        <g fill="#C084FC" color="#C084FC" weight="regular">
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
        </g>
      </svg>
    </div>
  );
}
