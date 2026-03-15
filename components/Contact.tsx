"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionSeparator from "./SectionSeparator";
import GridBackground from "./GridBackground";
import CurlyArrow from "./CurlyArrow";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 relative overflow-hidden bg-linear-to-b from-white/10 via-black via-50% to-black"
    >
      {/* New Subtle Grid Pattern */}
      <GridBackground />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center -mb-17">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Still have questions? <span className="text-[#a855f7]">Let's talk.</span>
          </motion.h2>
        </div>

        <SectionSeparator width="max-w-xs" className="mb-7" />

        <div className="flex flex-col items-center relative">
          
          {/* New Hand-Drawn Yellowish-Gold Arrow */}
          <motion.div
            initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -top-12 md:-top-4 left-[65%] md:left-[60%] w-16 md:w-20 pointer-events-none"
          >
            <CurlyArrow className="w-full h-auto drop-shadow-[0_0_12px_rgba(227,185,107,0.4)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
            className="mt-8"
          >
            <a
              href="https://calendly.com/anuragbiz69"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_50px_rgba(168,85,247,0.4)]"
              style={{
                background: "linear-gradient(90deg, #9333ea 0%, #581c87 100%)",
              }}
            >
              <span className="relative z-10 flex items-center gap-3 tracking-wide">
                Book Your Call Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}