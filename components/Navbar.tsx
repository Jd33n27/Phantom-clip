"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Case Studies", href: "#case-studies" },
    { name: "About Us", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-150%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4 md:px-6"
    >
      <div
        className="w-full max-w-5xl flex items-center justify-between px-6 py-3 md:px-10 md:py-4 rounded-full backdrop-blur-lg transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow:
            "0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Project Logo & Brand Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full border border-white/10 shadow-[0_0_15px_rgba(71,1,1,0.5)]">
            <img
              src="/logo.png"
              alt="Phantom Clips"
              className="w-8 h-8 md:w-10 md:h-10 object-cover"
            />
          </div>
          <span className="text-white text-lg md:text-xl font-medium tracking-wide">
            Phantom Clips
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
