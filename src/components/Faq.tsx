import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ Content Data
const faqs = [
  {
    question: "What do I need to get started?",
    answer:
      "Getting started is simple. We just need access to your source content (Google Drive, YouTube channel, or Twitch VODs) and a quick alignment call to understand your brand voice. Our team handles the curation, editing, and distribution strategy from there.",
  },
  {
    question: "Will I need to do anything?",
    answer:
      "Very little. Our goal is to save you time. Apart from providing the initial content and approving the final clips (if you choose to review them), our 'Army of Clippers' manages the entire distribution process independently.",
  },
  {
    question: "How does the 'Clipping Army' work?",
    answer:
      "We recruit, vet, and manage a dedicated team of video editors specifically for your brand. They are trained on your style guidelines and incentivized to produce high-performing content that drives views and engagement across TikTok, Shorts, and Reels.",
  },
  {
    question: "Do I own the content?",
    answer:
      "Yes, absolutely. All derivative content created by our clippers belongs to your brand. You can repost, repurpose, or use the clips in ads however you see fit.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full py-32 bg-black flex flex-col items-center px-6"
    >
    
      {/* Header Section */}
      <div className="mb-20 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
          <span className="text-sm font-medium text-gray-300">FAQ</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
        >
          Frequently <span className="text-white/50">Asked Questions</span>
        </motion.h2>
      </div>

      {/* Accordion Container */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer ${
                isOpen
                  ? "bg-white/8 border-yellow-500/50 shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]"
                  : "bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20"
              }`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between p-6 md:p-8">
                <h3
                  className={`text-lg md:text-xl font-medium transition-colors ${
                    isOpen
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </h3>

                {/* Plus/Minus Icon */}
                <div
                  className={`relative size-4 p-5 rounded-full flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-180 bg-gray-400/30 " : "bg-yellow-500/30"}`}
                >
                  <span
                    className={`absolute w-[50%] h-0.5 bg-current transition-colors ${isOpen ? "bg-yellow-500" : "bg-gray-400"}`}
                  />
                  <span
                    className={`absolute h-[50%] w-0.5 bg-current transition-all ${isOpen ? "bg-yellow-500 rotate-90 opacity-0" : "bg-gray-400 rotate-0"}`}
                  />
                </div>
              </div>

              {/* Expandable Answer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Glow Effect (Bottom Line) */}
              {isOpen && (
                <motion.div
                  layoutId="active-glow"
                  className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-50"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
