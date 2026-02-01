import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionSeparator from "./SectionSeparator";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="w-full py-24 bg-black flex flex-col items-center px-6"
    >
      {/* Header Section */}
      <div className="-mb-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-wine font-serif italic tracking-tight">
          <span className="text-white font-sans font-medium not-italic mr-2">
            Your Questions,
          </span>
          Answered
        </h2>
      </div>

      {/* Separator */}
      <div className="mb-16 w-full flex justify-center">
        <SectionSeparator width="max-w-xs" />
      </div>

      {/* Accordion Container */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              layout="position"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group relative overflow-hidden rounded-[14px] cursor-pointer transition-all duration-300 bg-zinc-900/50 border border-white/10 hover:border-wine/50"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between p-6">
                <h3 className="text-lg md:text-xl font-bold text-white text-left pr-4">
                  {faq.question}
                </h3>

                {/* Icon Container */}
                <div
                  className="shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#470101" }}
                >
                  <div className="relative w-3.5 h-3.5">
                    {/* Horizontal Line */}
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white -translate-y-1/2" />
                    {/* Vertical Line (Rotates) */}
                    <motion.span
                      animate={{
                        rotate: isOpen ? 90 : 0,
                        opacity: isOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute top-0 left-1/2 h-full w-0.5 bg-white -translate-x-1/2"
                    />
                  </div>
                </div>
              </div>

              {/* Expandable Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
