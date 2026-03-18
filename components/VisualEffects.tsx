"use client";

import { useEffect, useRef } from "react";

export default function VisualEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Calculate particle density based on screen size
      const numParticles = Math.floor(
        (window.innerWidth * window.innerHeight) / 12000,
      );
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5, // Slightly larger particles
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.6 + 0.4, // Higher base opacity (0.4 - 1.0)
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Purple sprinkles matching #C084FC with added glow
        ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(192, 132, 252, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 1. Net-like background pattern */}
      <div
        className="fixed inset-0 z-[-3] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23C084FC' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* 2. Sprinkles Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-2] pointer-events-none"
      />

      {/* 3. Global Bottom Background Black Overlay */}
      <div className="fixed bottom-0 left-0 w-full h-[20vh] z-40 pointer-events-none bg-linear-to-t from-black/80 via-black/30 to-transparent" />
    </>
  );
}
