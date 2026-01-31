import { motion } from "framer-motion";

// Steps data
const steps = [
  {
    stage: "Stage 1",
    title: "Build",
    description:
      "We create a private, dedicated clipping community for your brand. You simply send us your content (preferably organized in a Google Drive), and we take care of the rest, including onboarding clippers from both your audience and our network of thousands.",
    tags: ["Vision Alignment", "Community Building"],
  },
  {
    stage: "Stage 2",
    title: "Launch",
    description:
      "Once inside your community, clippers are guided through our proven launch process. The clippers are coached to produce strong content that aligns your brand vision, content guidelines, and platform strategy.",
    tags: ["Content Refinement", "Strategic Selection"],
  },
  {
    stage: "Stage 3",
    title: "Scale",
    description:
      "Our team actively manages your community daily, answering questions, building relationships, and keeping energy high. Every post submission is manually reviewed for quality before approval, ensuring only top-tier content is approved for payouts.",
    tags: ["Multi-Platform Reach", "Audience Growth"],
    hasCta: true,
  },
];

export default function Process() {
  return (
    <section className="relative w-full py-32 bg-black flex flex-col items-center">
      
      {/*Header Section */}
      <div className="mb-24 text-left max-w-4xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
          <span className="text-sm font-medium text-gray-300">
            How We Work?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter"
        >
          We Handle Everything <br />
          <span className="text-white/60">From Curation To Distribution.</span>
        </motion.h2>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl px-6 flex flex-col gap-24">
        {/* The Central Connecting Line */}
        <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />
        {/* Mobile Line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent block md:hidden" />

        {steps.map((step, index) => (
          <motion.div
            key={step.stage}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Empty side for layout balance */}
            <div className="flex-1 w-full hidden md:block" />

            {/* Center Marker (The Yellow Dot) */}
            <div className="absolute left-0 md:left-1/2 w-12 h-12 -translate-x-1/2 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-black backdrop-blur-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 w-full pl-12 md:pl-0 md:px-12">
              <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] transition-colors duration-500">
                {/* Stage Tag */}
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-yellow-500 uppercase bg-yellow-500/10 rounded-full border border-yellow-500/20">
                  {step.stage}
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Tags Grid */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA for the final step */}
                {step.hasCta && (
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <a
                      href="https://calendly.com/roimediainc/buildyourclippingarmy"
                      className="inline-flex w-full items-center justify-center px-6 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                    >
                      Book an Appointment
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
