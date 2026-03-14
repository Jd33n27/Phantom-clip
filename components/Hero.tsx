"use client";
import { motion } from "framer-motion";
import SectionSeparator from "./SectionSeparator";
import HeroBadge from "./HeroBadge";
import HeroVSL from "./HeroVSL";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center bg-transparent justify-center overflow-hidden">
      <HeroBadge />

      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] -mb-15 bg-linear-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
        >
          <span className="font-serif italic font-normal text-white block sm:inline mr-2">
            Attention is the real currency. We help you earn more of it.
          </span>
        </motion.h1>

        <SectionSeparator />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            <span className="text-white font-semibold">
              A distribution system that turns long-form content into
              visibility, authority, cult-level loyalty, and consistent lead
              flow - across every platform that matters. Powered by our curated
              network of clippers and UGC creators built for brands.
            </span>
          </p>
        </motion.div>

        <HeroVSL />
        <HeroCTA />
      </div>
    </section>
  );
}
