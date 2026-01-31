import { motion } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden selection:bg-yellow-500/30">
      {/*Background Layer: Video + Gradients */}
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-360 px-6 flex flex-col items-center text-center mt-20">
        {/* Animated Badge / Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">
            Ready to get clipping
          </span>
        </motion.div>

        {/* Headlines */}
        <div className="max-w-5xl mx-auto space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-left text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]"
          >
            We Grow Your Brand
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
          >
            With{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-500 to-yellow-600">
              Clipping.
            </span>
          </motion.h1>
        </div>

        {/* Body Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          <p>
            We'll build you a mass content distribution system that scales your
            brand to new heights with an army of clippers. We have generated
            over{" "}
            <span className="text-white font-bold decoration-yellow-500/50 underline underline-offset-4 decoration-2">
              2 Billion+ views
            </span>{" "}
            for our clients with our systems. From creators to brands, we make
            your content explode across all platforms.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary Action - Solid Yellow */}
          <a
            href="https://calendly.com/roimediainc/buildyourclippingarmy"
            className="group relative h-12 w-full sm:w-48 overflow-hidden rounded-lg bg-yellow-500 font-semibold text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] active:scale-95 flex items-center justify-center"
          >
            <span className="relative z-10">Get In Touch</span>
          </a>

          {/* Secondary Action - Glass */}
          <a
            href="/about"
            className="h-12 w-full sm:w-48 rounded-lg border border-white/10 bg-white/5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 active:scale-95 flex items-center justify-center"
          >
            About Us
          </a>
        </motion.div>

        {/* Social Proof Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 md:mt-32 flex flex-col items-center gap-4"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            We Work With 👇
          </p>
        </motion.div>
      </div>
    </section>
  );
}
