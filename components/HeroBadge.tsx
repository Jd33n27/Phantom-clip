"use client";

export default function HeroBadge() {
  return (
    <div className="flex items-center justify-center gap-3 px-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-max mx-auto mt-28 md:mt-23 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
      {/* Pulse Indicator */}
      <div className="relative flex items-center justify-center w-10 h-10">
        
        {/* The BIG pulsing circle */}
        <span className="absolute w-full h-full bg-purple-400 rounded-full animate-ping opacity-90 [animation-duration:1.2s]"></span>
        
        {/* The small static inner circle */}
        <span className="relative w-4 h-4 bg-purple-400 rounded-full z-10"></span>
      </div>

      {/* Text */}
      <p className="text-white text-[15px] md:text-[17px] font-medium tracking-tight text-center">
        For businesses, brands, and creators
      </p>
    </div>
  );
}