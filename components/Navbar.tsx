"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger white variant when scrolled down 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Case Studies", href: "#case-studies" },
    { name: "About Us", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out rounded-full px-4 py-3 flex items-center justify-between w-[90%] max-w-3xl border ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Logo Area */}
      <Link href="/" className="flex items-center gap-2 group outline-hidden">
        <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-black">
          <img
            src="/logo.png"
            alt="Phantomclips Logo"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <span
          className={`font-bold text-lg tracking-tight transition-colors duration-500 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Phantomclips
        </span>
      </Link>

      {/* Navigation Links */}
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
    </motion.nav>
  );
}