import React from 'react';
import { motion } from 'framer-motion';

const BackgroundVideo: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-white/5 bg-black">
      
      {/* Top shadow - Blending from the Hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black to-transparent z-20" />

      {/* The video container */}
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
        
        {/* the "batman" yellow overlay - gives the video a gold-tinted shadow */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-yellow-500/5 to-black z-10" />
      </motion.div>

      {/*  blur and noise overlay  */}
      <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none z-10" />
      
      {/* bottom shadow and gradient - Blending into the next section) */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-black via-black/80 to-transparent z-20" />

      {/* scanline & effect - adds to the "Bruce Wayne Tech" feel */}
      <div className="absolute inset-0 z-30 opacity-[0.03] pointer-events-none bg-[linear-linear(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
    </section>
  );
};

export default BackgroundVideo;