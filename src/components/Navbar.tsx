import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/10 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-12 h-20 flex items-center justify-between">
        
        {/* LOGO & LINKS CONTAINER */}
        <div className="flex items-center gap-8">
          {/* LOGO */}
          <a href="/" className="w-10 h-10 relative overflow-hidden rounded-lg">
            <img 
              src="https://framerusercontent.com/images/CJIBCwZXNq5vzdyv2fKDwwPWo.png" 
              alt="Phantom Clips Logo" 
              className="object-cover w-full h-full"
            />
          </a>

          {/* VERTICAL SEPARATOR (The gradient line) */}
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* NAV LINKS */}
          <div className="flex items-center gap-10">
            {['Home', 'About', 'Contact', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-100 
                  ${item === 'Home' ? 'text-white opacity-100' : 'text-white opacity-60'}`}
              >
                <span className="bg-clip-text bg-gradient-to-r from-white via-white/50 to-transparent">
                  {item}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA BUTTON - The "Bruce Wayne" Blue Glow */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02, translateY: -1 }}
          whileTap={{ scale: 0.98 }}
          className="relative px-6 py-2.5 bg-[#0055ff] text-white text-sm font-semibold rounded-[10px] 
                     border border-white/15 shadow-[0_8px_40px_0_rgba(0,85,255,0.5)] 
                     transition-shadow hover:shadow-[0_8px_50px_0_rgba(0,85,255,0.7)]"
        >
          Get In Touch
        </motion.a>

      </div>
    </nav>
  );
};

export default Navbar;