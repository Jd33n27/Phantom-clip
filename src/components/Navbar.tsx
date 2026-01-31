import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Handling: Hide/Show on scroll & Active State Detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/Show Logic
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active Section Logic (Simple scroll detection)
      const sections = ["Hero", "About", "Process", "Faq"];
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
      // Special case for Home (top of page)
      if (currentScrollY < 100) setActiveSection("Home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        {/* Glassmorphism Container mimicking the Framer snippet */}
        <div 
          className="w-full backdrop-blur-xl border-b border-white/10"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(20, 0, 30, 0.8) 100%)"
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Left Side: Logo & Separator */}
            <div className="flex items-center gap-6">
              <a href="#" className="relative group block overflow-hidden rounded-full border border-white/10 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <img 
                  src="/logo.png" 
                  alt="Phantom Clips" 
                  className="size-15 object-cover" 
                />
              </a>
              
              {/* Vertical Separator from snippet */}
              <div className="hidden md:block h-8 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.name;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setActiveSection(link.name)}
                      className="relative px-4 py-2 text-sm font-medium transition-all duration-300"
                    >
                      {/* Active State Text Styling */}
                      <span className={`${isActive ? "text-white" : "text-white/60 hover:text-white"}`}>
                        {link.name}
                      </span>
                      
                      {/* Active Underline Glow */}
                      {isActive && (
                        <motion.div
                          layoutId="active-nav"
                          className="absolute bottom-0 left-0 w-full h-px bg-purple-500 shadow-[0_0_10px_#a855f7]"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side: CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="group relative px-6 py-2.5 rounded-lg bg-purple-600 text-white font-semibold text-sm transition-all duration-300 shadow-[0_8px_40px_rgba(147,51,234,0.4)] hover:shadow-[0_8px_50px_rgba(147,51,234,0.6)] hover:bg-purple-500 active:scale-95 border border-white/10"
              >
                <span className="relative z-10">Get In Touch</span>
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-purple-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-purple-500/20 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-lg font-medium transition-colors ${
                      activeSection === link.name ? "text-purple-400" : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px w-full bg-white/10 my-4" />
                <a
                  href="#contact"
                  className="w-full py-3 rounded-lg bg-purple-600 text-white font-bold text-center shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}