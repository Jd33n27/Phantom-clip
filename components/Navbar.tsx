"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    ? "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out rounded-full px-2 py-2 flex items-center justify-between w-[90%] max-w-sm bg-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-2 border-purple-500"
    : `fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out rounded-full px-4 py-3 flex items-center justify-between w-[90%] max-w-3xl ${
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
        <Link href="/" className="flex items-center gap-2 group outline-hidden">
          <AnimatePresence>
            {!isMobile && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "2rem", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center transition-colors duration-500 ${
                  scrolled ? "bg-black" : "bg-transparent"
                }`}
              >
                <img
                  src="/logo.png"
                  alt="Phantomclips Logo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-500 ${
              isMobile
                ? "text-purple-600"
                : scrolled
                  ? "text-black"
                  : "text-white"
            }`}
          >
            Phantomclips
          </span>
        </Link>

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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
            isMobile
              ? "bg-purple-600 text-white"
              : scrolled
                ? "text-black hover:bg-black/5"
                : "text-white hover:bg-white/10"
          }`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl ${
              isMobile
                ? "bg-white/95 backdrop-blur-xl border border-purple-500/10"
                : scrolled
                  ? "bg-white/95 backdrop-blur-xl border border-black/10"
                  : "glass-panel-purple bg-[#0D0D0D]/90"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-center font-medium transition-colors ${
                  isMobile
                    ? "text-purple-600 hover:bg-purple-100/50"
                    : scrolled
                      ? "text-gray-800 hover:bg-black/5"
                      : "text-gray-200 hover:bg-white/10"
                }`}
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
