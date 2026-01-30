import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-white/10 overflow-hidden">
      
      {/* BACKGROUND IMAGE OVERLAY (Matching your Framer ref) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="https://framerusercontent.com/images/Yup0Khoh6jiKcA1Ad9mojCjB7M.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* LEFT: LOGO & STATUS */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <a href="/" className="inline-block w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm">
              <img 
                src="https://framerusercontent.com/images/POLWvikzl4tuenEpYrhSd5LKyFc.png" 
                alt="Phantom Clips" 
                className="w-full h-full object-cover"
              />
            </a>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_10px_#FFD700]" />
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">
                System Status: Operational
              </span>
            </div>
          </div>

          {/* RIGHT: PAGES LINKS */}
          <div className="space-y-6">
            <h4 className="text-[#FFD700] font-mono text-xs uppercase tracking-widest font-bold italic">
              Pages
            </h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                    className="text-sm text-white/50 hover:text-[#FFD700] transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: SOCIAL LINKS */}
          <div className="space-y-6">
            <h4 className="text-[#FFD700] font-mono text-xs uppercase tracking-widest font-bold italic">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href="https://instagram.com/phantomclips" 
                  target="_blank" 
                  className="text-sm text-white/50 hover:text-[#FFD700] transition-colors duration-300 font-medium"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/phantomclips" 
                  target="_blank" 
                  className="text-sm text-white/50 hover:text-[#FFD700] transition-colors duration-300 font-medium"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT AREA */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-mono text-white/20 tracking-wider">
            © {currentYear} PHANTOM CLIPS INC. — ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-8 text-[11px] font-mono text-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* BLUR EFFECT FOR THE EDGE */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD700]/20 blur-sm z-20" />
    </footer>
  );
};

export default Footer;