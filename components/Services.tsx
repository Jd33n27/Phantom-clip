import Link from "next/link";
import { Sliders, Activity, Users, Layers } from "lucide-react";

export default function Services() {
  return (
    <section
      id="why-us"
      className="relative w-full bg-black/40 py-24 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Background Lights / Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[722px] opacity-60 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/hIDqfiTbY3IysibAQMXdLAh3FIg.svg"
          alt="Light Rays"
          className="w-full h-auto object-contain object-top"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C084FC]/20 bg-[#C084FC]/5 mb-8 glass-panel-purple">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C084FC]"></div>
            <p className="text-white text-[13px] tracking-[-0.02em] font-medium">
              #1 Creator Network for Brands
            </p>
          </div>

          {/* Heading using new CSS utility */}
          <div className="mb-6">
            <h3 className="text-white text-[32px] md:text-[36px] font-bold tracking-[-0.01em] text-center font-sans">
              Why <span className="neon-mark px-1">Phantomclips?</span>
            </h3>
          </div>

          {/* Subtext */}
          <p className="text-white/65 text-[17px] md:text-[19px] leading-[140%] text-center mt-2 max-w-xl font-sans">
            Join 500+ brands getting guaranteed authentic engagement and
            measurable results
          </p>
        </div>

        {/* Bento Cards Grid - Converted to Purple Glass Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
          
          {/* Card 1 */}
          <div
            className="glass-panel-purple bg-[#0D0D0D]/60 rounded-[20px] p-8 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div className="flex items-center gap-4">
              <Sliders className="w-8 h-8 text-[#C084FC]" />
              <h4 className="text-white text-xl font-bold">Your Brand, Your Control</h4>
            </div>
            <div className="w-full h-px bg-[#C084FC]/30" />
            <p className="text-white/70 text-[15px] leading-relaxed">
              Launch campaigns with handpicked editors who understand your brand voice. No generic content - just authentic storytelling that drives real engagement and conversions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="glass-panel-purple bg-[#0D0D0D]/60 rounded-[20px] p-8 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div className="flex items-center gap-4">
              <Activity className="w-8 h-8 text-[#C084FC]" />
              <h4 className="text-white text-xl font-bold">Access to 7M+ Vetted Editors</h4>
            </div>
            <div className="w-full h-px bg-[#C084FC]/30" />
            <p className="text-white/70 text-[15px] leading-relaxed">
              Access top-performing editors with proven results in your industry. Each creator is performance-verified to ensure your investment delivers measurable ROI.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="glass-panel-purple bg-[#0D0D0D]/60 rounded-[20px] p-8 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-[#C084FC]" />
              <h4 className="text-white text-xl font-bold">Dedicated Campaign Manager</h4>
            </div>
            <div className="w-full h-px bg-[#C084FC]/30" />
            <p className="text-white/70 text-[15px] leading-relaxed">
              Skip the operational headache. Your dedicated manager handles talent sourcing, brief distribution, quality control, and payout logistics from end to end.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="glass-panel-purple bg-[#0D0D0D]/60 rounded-[20px] p-8 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div className="flex items-center gap-4">
              <Layers className="w-8 h-8 text-[#C084FC]" />
              <h4 className="text-white text-xl font-bold">Seamless Platform Integration</h4>
            </div>
            <div className="w-full h-px bg-[#C084FC]/30" />
            <p className="text-white/70 text-[15px] leading-relaxed">
              Dominate across TikTok, Instagram Reels, and YouTube Shorts simultaneously. We optimize aspect ratios, hooks, and pacing for every individual algorithm.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <Link
          href="/booking"
          className="relative group transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-linear-to-b from-[#A855F7] to-[#7E22CE] rounded-full px-10 py-4 shadow-[0_1px_41px_rgba(168,85,247,0.62)] border border-[#C084FC]/50">
            <span className="text-white font-extrabold text-[18px] tracking-[-0.5px] uppercase block text-center">
              Start Scaling Today
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}