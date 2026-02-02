import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users } from "lucide-react";
import SectionSeparator from "./SectionSeparator";
import SpotlightCard from "./SpotLightCard";

const steps = [
  {
    stage: "Stage 1",
    title: "Build",
    description:
      "We create a private, dedicated clipping community for your brand. You simply send us your content (preferably organized in a Google Drive), and we take care of the rest, including onboarding clippers from both your audience and our network of thousands.",
    tags: ["Vision Alignment", "Community Building"],
    icon: <Users className="w-8 h-8 text-white" />,
    gradient: "from-red-950/20 to-black",
  },
  {
    stage: "Stage 2",
    title: "Launch",
    description:
      "Once inside your community, clippers are guided through our proven launch process. The clippers are coached to produce strong content that aligns your brand vision, content guidelines, and platform strategy.",
    tags: ["Content Refinement", "Strategic Selection"],
    icon: <Rocket className="w-8 h-8 text-white" />,
    gradient: "from-red-900/20 to-black",
  },
  {
    stage: "Stage 3",
    title: "Scale",
    description:
      "Our team actively manages your community daily, answering questions, building relationships, and keeping energy high. Every post submission is manually reviewed for quality before approval, ensuring only top-tier content is approved for payouts.",
    tags: ["Multi-Platform Reach", "Audience Growth"],
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    gradient: "from-red-800/20 to-black",
    cta: true,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-black py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 mb-6">
          <span className="w-2 h-2 rounded-full bg-wine animate-pulse" />
          <span className="text-sm font-medium text-red-100">
            How We Work?
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          We Handle Everything
        </h2>
        <h3 className="text-2xl md:text-3xl text-gray-500 font-medium">
          From Curation To Distribution.
        </h3>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <SpotlightCard className="flex flex-col h-full group" spotlightColor="rgba(71, 1, 1, 0.25)">
              <div className={`h-48 w-full bg-linear-to-b ${step.gradient} relative flex items-center justify-center border-b border-white/5`}>
                <div className="relative w-20 h-20 rounded-full border border-red-900/30 flex items-center justify-center bg-black/40 shadow-[0_0_30px_rgba(71,1,1,0.2)]">
                  {step.icon}
                  <div className="absolute top-1/2 -left-full w-full h-px bg-linear-to-r from-transparent to-red-900/20" />
                  <div className="absolute top-1/2 -right-full w-full h-px bg-linear-to-l from-transparent to-red-900/20" />
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full border border-white/5 bg-black/40 text-xs font-semibold text-red-300">
                  {step.stage}
                </div>
              </div>

              <div className="p-8 flex flex-col grow">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-white -mb-17">
                    {step.title}
                  </h4>
                  <SectionSeparator className="max-w-25" />
                </div>

                <p className="text-gray-400 leading-relaxed text-sm mb-8 grow">
                  {step.description}
                </p>

                <div className="space-y-6 mt-auto">
                  {step.cta && (
                    <a
                      href="https://calendly.com/anuragbiz69"
                      className="block w-full py-3 rounded-xl bg-wine hover:bg-wine-light text-white font-bold text-center transition-all shadow-[0_0_20px_rgba(71,1,1,0.3)] hover:shadow-[0_0_25px_rgba(71,1,1,0.5)] mb-6"
                    >
                      Book an Appointment
                    </a>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, i) => (
                      <div key={i} className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-xs text-gray-300 font-medium">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-950 to-transparent" />
    </section>
  );
}