import React from 'react';
import { motion } from 'framer-motion';

const BackgroundVideo: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-white/5 bg-black">
      
      {/* 1. TOP SHADOW (Blending from the Hero) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20" />

      {/* 2. THE VIDEO CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <video 
          src="https://framerusercontent.com/assets/KryCV9x3xsvDFOGU0vv0KmUBJQ.mp4"
          poster="https://framerusercontent.com/images/PJMjGmlofK32Zp1yZ7x3xD1CTbo.png"
          loop 
          muted 
          autoPlay 
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* THE "BATMAN" YELLOW OVERLAY - Gives the video a gold-tinted shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-yellow-500/5 to-black z-10" />
      </motion.div>

      {/* 3. BLUR & NOISE OVERLAY (The "Framer" look) */}
      <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none z-10" />
      
      {/* 4. BOTTOM SHADOW & GRADIENT (Blending into the next section) */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />

      {/* SCANLINE EFFECT (Optional - adds to the "Bruce Wayne Tech" feel) */}
      <div className="absolute inset-0 z-30 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
};

export default BackgroundVideo;