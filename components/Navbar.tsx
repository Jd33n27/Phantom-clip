"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Case Studies", href: "#case-studies" },
    { name: "About Us", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQs", href: "#faq" },
  ];

  const navbarClasses = isMobile
    ? "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out bg-white rounded-full pl-6 pr-2.5 py-2.5 flex items-center justify-between w-[90%] max-w-sm border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
    : `fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-3xl ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          : "glass-panel-purple"
      }`;

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={navbarClasses}
      >
        <Link
          href="/"
          className="flex items-center gap-2 group outline-hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span
            className={`font-medium text-xl tracking-tight transition-colors duration-500 ${
              isMobile ? "text-black" : scrolled ? "text-black" : "text-white"
            }`}
          >
            PhantomClips
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-black hover:bg-black/5"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Custom Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-12 h-10 bg-purple-600 hover:bg-purple-700 rounded-xl flex flex-col items-center justify-center transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={22} className="text-white" />
          ) : (
            // Changed to items-end so the 60% line aligns to the right (empty space on the left)
            <div className="flex flex-col items-end justify-center gap-[4px] w-[22px]">
              <span className="w-full h-[2px] bg-white rounded-full"></span>
              <span className="w-full h-[2px] bg-white rounded-full"></span>
              <span className="w-[60%] h-[2px] bg-white rounded-full"></span>
            </div>
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl p-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-center font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
