"use client";
import { motion } from "framer-motion";

export default function PurpleDustGrid() {
  // Generate random positions, sizes, and falling speeds for the "dust" particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 1, // 1px to 5px
    duration: Math.random() * 15 + 10, // 10s to 25s falling animation speed
    delay: Math.random() * -25, // Negative delay so the screen is pre-filled with dust
    opacity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7 base opacity
    sway: Math.random() * 40 - 20, // Random horizontal drift between -20px and 20px
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px] pointer-events-none">
      {/* 1. The Net / Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. Radial Gradient to fade the grid at the edges smoothly into the dark panel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_85%)]" />

      {/* 3. The Falling Purple Dust Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#A855F7] blur-[1px]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 8px 2px rgba(168, 85, 247, 0.4)", // Purple glow
            }}
            initial={{ top: "-10%", x: 0, opacity: 0 }}
            animate={{
              top: ["-10%", "110%"],
              x: [0, p.sway, 0, -p.sway, 0], // Gentle side-to-side sway as it falls
              opacity: [0, p.opacity, p.opacity, 0], // Fade in at top, fade out at bottom
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear", // Linear ease ensures consistent falling speed
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
