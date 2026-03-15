"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TrustBadge() {
  const stars = Array(5).fill(0);

  // Define the bounce animation variant
  const bounceVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10, // Lower damping creates more "bounce"
      },
    },
    viewport: { once: true },
  };

  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-4 px-6">
      {/* Star Rating Section */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="flex gap-1">
          {stars.map((_, i) => (
            <motion.div
              key={i}
              variants={bounceVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} // Stagger the bounce
            >
              <Star className="w-5 h-5 fill-[#C084FC] text-[#C084FC] drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" />
            </motion.div>
          ))}
        </div>

        {/* Bouncing Rating Text */}
        <motion.p
          variants={bounceVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-white/80 text-sm font-medium tracking-tight"
        >
          <span className="text-white font-bold">4.89</span> (86 Reviews)
        </motion.p>
      </div>

      {/* Bouncing Label Section */}
      <motion.div
        variants={bounceVariant}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <p className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">
          Trusted by Brands & Creators Like:
        </p>
      </motion.div>
    </div>
  );
}
