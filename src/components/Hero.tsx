import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "https://framerusercontent.com/images/7FfRyFJsXoV35dt4q6z6uk0TNQ.png",
  "https://framerusercontent.com/images/npA0L3yLcr9DrQg9xdUyPCRIz94.png",
  "https://framerusercontent.com/images/pn50Cuab3kdWoza5WVi4gm2i6c.png",
  "https://framerusercontent.com/images/ypb1scdnShhuKuxwcDCpgw4k3k.png",
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black text-white">
      
      {/* BACKGROUND DEPTH - The "Batcave" Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* TOP: TITLE & TAGLINE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            WE GROW YOUR BRAND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] to-[#b8860b]">
              WITH CLIPPING.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed mt-8">
            We'll build you a <span className="text-white">mass content distribution system</span> that scales your brand to new heights with an army of clippers. 
            Over <span className="text-[#FFD700] font-bold underline decoration-yellow-500/30">2 Billion+ views</span> generated for our clients.
          </p>
        </motion.div>

        {/* BUTTONS: Dual Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a href="#contact" className="px-8 py-4 bg-[#FFD700] text-black font-black uppercase tracking-tighter rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
            Get In Touch
          </a>
          <a href="#about" className="px-8 py-4 bg-white/10 text-white font-bold uppercase tracking-tighter rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
            About Us
          </a>
        </motion.div>

        {/* BOTTOM: SOCIAL PROOF / LOGO MARQUEE */}
        <div className="mt-32 w-full">
          <p className="text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase mb-8">
            Trusted by the world's elite
          </p>
          
          {/* THE SEPARATOR LINE */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* INFINITE MARQUEE */}
          <div className="relative flex overflow-hidden group">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex gap-20 items-center whitespace-nowrap"
            >
              {[...logos, ...logos].map((logo, index) => (
                <img 
                  key={index}
                  src={logo} 
                  alt="Client Logo" 
                  className="h-12 md:h-16 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                />
              ))}
            </motion.div>
            
            {/* Fade Gradients for the Marquee Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;