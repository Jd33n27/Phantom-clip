import { motion } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";
import SectionSeparator from "./SectionSeparator";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center bg-transparent justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center mt-20">
      
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1] -mb-15"
        >
          <span className="font-serif italic font-normal text-purple-200">
            Attention is the real currency. We help you earn more of it.
          </span>
        </motion.h1>
        <SectionSeparator />

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            <span className="text-white font-semibold">
              A system that turns long-form content into visibility, followers,
              and consistent demand—across every platform worth attention.
            </span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="https://calendly.com/roimediainc/buildyourclippingarmy" // Keeping your original link
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_1px_40px_rgba(176,92,255,0.4)]"
            style={{
              background:
                "linear-gradient(90deg, rgb(164, 66, 255) 0%, rgb(106, 25, 181) 100%)",
            }}
          >
            <span className="relative z-10 uppercase tracking-wide">
              Book "The" Call
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          {/* Bottom Tagline */}
          <div className="flex items-center gap-2 text-white/95 text-sm font-medium">
            <div className="w-2 h-2 rounded-full animate-pulse bg-white" />
            <span>No extra filming. An army of clippers.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
