interface SectionSeparatorProps {
  width?: string;
  className?: string;
}

export default function SectionSeparator({ 
  width = "max-w-lg md:max-w-2xl", // Default width
  className = "" 
}: SectionSeparatorProps) {
  return (
    <div className={`w-full flex items-center justify-center py-16 ${className}`}>
      <div className={`relative w-full ${width} group`}>
        
        {/* The Outer Glow (Blurry backing) */}
        <div 
          className="absolute -inset-1 bg-purple-600 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" 
        />
        
        {/* The Main Brush Stroke */}
        <div 
          className="relative h-3 w-full rounded-[50%] bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
          style={{
             clipPath: "polygon(2% 40%, 100% 0%, 98% 100%, 0% 100%)",
             transform: "rotate(-1deg)"
          }}
        />

        {/* The Inner "White/Bright" Core for the neon effect */}
        <div className="absolute top-1 left-4 right-4 h-1 bg-purple-200 rounded-full opacity-30 mix-blend-overlay" />
      </div>
    </div>
  );
}