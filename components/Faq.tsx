"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does this compare to running paid ads?",
    answer:
      "Paid ads typically cost $25–$120 CPM, and once you stop spending, your reach disappears. Our clipping campaigns generate authentic organic views at a fraction of that cost — often less than 1/25th. Instead of renting attention through ads, you’re building omnipresence across platforms, compounding influence, and sustaining visibility long after the campaign is live.",
  },
  {
    question: "What happens if I don’t have a lot of content?",
    answer:
      "Even with a small amount of long-form content, our team can extract high-performing clips. We focus on maximizing the value of whatever assets you have, turning a single video into multiple highly engaging short-form pieces.",
  },
  {
    question: "Are the views authentic?",
    answer:
      "Yes — every single post is manually reviewed by our internal quality team to eliminate bots and fake traffic. All engagement is 100% authentic, so you can trust the numbers and the audience reached.",
  },
  {
    question: "What results can I expect?",
    answer:
      "While results vary based on your niche and content quality, our clients consistently see millions of verified views and a massive increase in organic reach within the first few months of working with us.",
  },
  {
    question: "What platforms do you cover?",
    answer:
      "We focus on the highest-ROI short-form platforms: TikTok, Instagram Reels, and YouTube Shorts. These networks currently offer the best organic reach and virality potential.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with creators, podcasters, educational brands, SaaS companies, and e-commerce brands looking to scale their organic presence through short-form content.",
  },
  {
    question: "How do I know if my brand is a good fit?",
    answer:
      "We work best with businesses already generating $3M+/year in revenue, established companies, or public figures who are looking to expand awareness around their brand. Even if you don’t have a large following yet, our clipping campaigns are designed to create omnipresence — putting your content in front of millions across TikTok, Instagram, and YouTube.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is customized based on your content volume and specific goals. Book a strategy call with our team to get a detailed breakdown tailored to your brand's needs.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We typically charge a flat monthly retainer or performance-based model depending on the scope of the campaign. During our strategy call, we will determine which model aligns best with your growth objectives.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-linear-to-b from-white/10 via-black via-50% to-black py-24 px-6 relative overflow-hidden flex justify-center"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        {/* Left Column: Info & CTA */}
        <div className="flex flex-col items-start w-full lg:w-5/12 lg:sticky lg:top-32 self-start">
          {/* Badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-[20px] bg-[#0D0D0D] mb-8 glass-panel-purple">
            <div className="w-5 h-5 rounded-[10px] bg-[#C084FC] flex items-center justify-center p-0.5">
              <div className="w-full h-full rounded-lg bg-[#0D0D0D] flex items-center justify-center p-0.5">
                <div className="w-full h-full rounded-md bg-[#C084FC]"></div>
              </div>
            </div>
            <p className="text-white text-[13px] tracking-[-0.02em] font-medium uppercase">
              FAQ'S
            </p>
          </div>

          <h2 className="text-white text-[36px] md:text-[46px] font-bold tracking-[-0.02em] leading-[1.1] mb-6">
            Frequently Asked <span className="neon-mark px-1">Questions</span>
          </h2>

          <p className="text-white/65 text-[18px] md:text-[20px] leading-[140%] mb-10 max-w-md">
            Get clear answers to the most common questions about our process,
            pricing, and how we scale your campaigns.
          </p>

          <div className="w-full h-px bg-[#C084FC]/20 mb-10"></div>

          <p className="text-white text-[20px] font-medium mb-6">
            Still have questions?
          </p>

          <Link
            href="/booking"
            className="relative group transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-linear-to-b from-[#A855F7] to-[#7E22CE] rounded-full px-8 py-3.5 shadow-[0_1px_41px_rgba(168,85,247,0.62)]">
              <span className="text-white font-extrabold text-[18px] tracking-[-0.6px] uppercase block text-center">
                Book a Strategy Call
              </span>
            </div>
          </Link>
        </div>

        {/* Right Column: Accordions */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-panel-purple rounded-[20px] overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: isOpen
                    ? "rgba(13, 13, 13, 0.5)"
                    : "rgba(13, 13, 13, 0.2)",
                  boxShadow: isOpen
                    ? "rgba(0, 0, 0, 0.4) 0px 18px 20px 8px"
                    : "none",
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left outline-hidden"
                >
                  <span className="text-white text-[18px] md:text-[20px] font-bold tracking-tight pr-4">
                    {faq.question}
                  </span>

                  {/* Framer-style smooth icon rotation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-[#C084FC]" : "bg-white/10"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-black" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </motion.div>
                </button>

                {/* Framer-style spring physics for height expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="p-6 pt-0 text-white/70 text-[16px] leading-[1.6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
