"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
      className="w-full bg-black py-24 px-6 relative overflow-hidden flex justify-center"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        {/* Left Column: Info & CTA */}
        <div className="flex flex-col items-start w-full lg:w-5/12 lg:sticky lg:top-32 self-start">
          {/* Badge */}
          <div
            className="flex items-center gap-3 px-4 py-2 rounded-[20px] bg-[#0D0D0D] mb-8"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px, rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
            }}
          >
            <div className="w-5 h-5 rounded-[10px] bg-[#E3B96B] flex items-center justify-center p-[2px]">
              <div className="w-full h-full rounded-[8px] bg-[#0D0D0D] flex items-center justify-center p-[2px]">
                <div className="w-full h-full rounded-[6px] bg-[#E3B96B]"></div>
              </div>
            </div>
            <p className="text-white text-[13px] tracking-[-0.02em] font-medium uppercase">
              FAQ'S
            </p>
          </div>

          {/* Custom CSS for Neon Highlight */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .framer-177xte9 {
              --highlight: #FFBB0F;
              --hl-text: #ffffff;
              --hl-speed: 800ms;
            }
            .framer-177xte9 mark {
              position: relative;
              background: transparent;
            }
            .framer-177xte9 mark > span {
              position: relative;
              z-index: 2;
              color: var(--hl-text);
            }
            .framer-177xte9 mark::after {
              content:"";
              position:absolute;
              left:-.12em; right:-.12em;
              bottom:-.14em;
              height:.24em;
              border-radius:.24em;
              transform-origin:left center;
              transform: scaleX(calc(.28 + .72 * var(--highlighted)));
              transition: transform var(--hl-speed) cubic-bezier(.2,.8,.2,1);
              background:
                radial-gradient(.35em .2em at .28em 50%, var(--highlight) 98%, transparent 100%) left center / .6em 100% no-repeat,
                radial-gradient(.35em .2em at calc(100% - .28em) 50%, var(--highlight) 98%, transparent 100%) right center / .6em 100% no-repeat,
                linear-gradient(var(--highlight), var(--highlight));
              box-shadow:
                0 0 .5em color-mix(in srgb, var(--highlight) 60%, transparent),
                0 0 1.2em color-mix(in srgb, var(--highlight) 35%, transparent);
            }
          `,
            }}
          />

          {/* Heading */}
          <div className="framer-177xte9 mb-6 w-full">
            <h2 className="text-white text-[32px] md:text-[39px] font-bold tracking-[-0.01em] leading-[1.4em] font-sans">
              Your Questions,{" "}
              <mark style={{ "--highlighted": 1 } as React.CSSProperties}>
                <span>Answered.</span>
              </mark>
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-white/65 text-[18px] md:text-[20px] leading-[140%] mb-10 max-w-md">
            Get clear answers to the most common questions about our process,
            pricing, and how we scale your campaigns.
          </p>

          <div className="w-full h-px bg-white/10 mb-10"></div>

          {/* CTA */}
          <Link
            href="/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition-transform duration-300 hover:scale-105 block w-full sm:w-auto"
          >
            <div
              className="px-8 py-3.5 rounded-[52px] w-full"
              style={{
                background:
                  "linear-gradient(180deg, rgb(237, 181, 69) 0%, rgb(171, 120, 19) 100%)",
                boxShadow: "rgba(255, 195, 74, 0.62) 0px 1px 41px 0px",
              }}
            >
              <span className="text-white font-extrabold text-[18px] md:text-[21px] tracking-[-0.6px] leading-[28px] uppercase block text-center">
                Book your strategy call now
              </span>
            </div>
          </Link>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="flex flex-col gap-6 w-full lg:w-7/12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full rounded-[15px] bg-[#0F0F0F] transition-all duration-300 overflow-hidden"
                style={{ boxShadow: "rgba(0, 0, 0, 0.4) 5px 18px 10px 8px" }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <p className="text-white font-bold text-[16px] md:text-[18px] leading-[1.6em] font-sans pr-4">
                    {faq.question}
                  </p>
                  <div
                    className={`shrink-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                    >
                      <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-white/60 text-[13px] md:text-[14px] leading-[1.5em] tracking-[-0.02em]">
                          {faq.answer}
                        </p>
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
