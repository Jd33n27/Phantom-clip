"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    name: "Druski",
    stat: "27M+ Combined Followers",
    image:
      "https://framerusercontent.com/images/ysALSBRvA6myEdahvGV7ZFAKPE.jpg",
    link: "#druski",
  },
  {
    name: "Dean Graziosi",
    stat: "1.8M+ Combined Followers",
    image:
      "https://framerusercontent.com/images/n16yQ58p8mGSFfOPq2SjrWWAw.jpeg",
    link: "#dean",
  },
  {
    name: "Yacine Sibous",
    stat: "Founder of Parker",
    image:
      "https://framerusercontent.com/images/rb4ik6r71iEmdhF7iANbkOnM3dY.png",
    link: "#yacine",
  },
  {
    name: "Sketch",
    stat: "7.1M+ Combined Followers",
    image:
      "https://framerusercontent.com/images/U3eRZqBIXPGtBeDB5EOL0fSsTA.jpg",
    link: "#sketch",
  },
  {
    name: "Ken Carson",
    stat: "5B+ Total Streams",
    image:
      "https://framerusercontent.com/images/68g9YBSh8ILBn1kkw034vYoyWU.jpeg",
    link: "#kencarson",
  },
  {
    name: "lilbubblegum",
    stat: "700M+ Total Streams",
    image:
      "https://framerusercontent.com/images/ZjCEqjAlCEvPs7JjITALJcn40w.jpg",
    link: "#lilbubblegum",
  },
  {
    name: "Saamir Mithwani",
    stat: "700K+ Combined Followers",
    image:
      "https://framerusercontent.com/images/F0TbsMLlb74Clns14uuRD5OrXQ.png",
    link: "#saamir",
  },
  {
    name: "Jordan Welch",
    stat: "2.6M+ Combined Followers",
    image:
      "https://framerusercontent.com/images/AE5J9pQZK7AiRX3k7Hy0hBkox7c.jpg",
    link: "#jordanwelch",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 420 : 320; // Approx width of card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="case-studies"
      className="w-full bg-black py-24 overflow-hidden flex flex-col items-center"
    >
      {/* Header Section */}
      <div className="w-full max-w-6xl px-6 flex flex-col items-center mb-16">
        {/* Badge */}
        <div
          className="flex items-center gap-3 px-4 py-2 rounded-[20px] bg-[#0D0D0D] mb-8"
          style={{
            boxShadow: "rgba(184, 180, 180, 0.08) 0px 2px 0px 0px inset",
          }}
        >
          <div className="w-5 h-5 rounded-[10px] bg-[#E3B96B] flex items-center justify-center p-[2px]">
            <div className="w-full h-full rounded-[8px] bg-[#0D0D0D] flex items-center justify-center p-[2px]">
              <div className="w-full h-full rounded-[6px] bg-[#E3B96B]"></div>
            </div>
          </div>
          <p className="text-white text-[13px] tracking-[-0.02em] font-medium uppercase">
            Our Partnerships
          </p>
        </div>

        {/* Custom CSS for Neon Highlight */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .framer-150n8ea {
            --highlight: #FFBB0F;
            --hl-text: #ffffff;
            --hl-speed: 800ms;
          }
          .framer-150n8ea mark {
            position: relative;
            background: transparent;
          }
          .framer-150n8ea mark > span {
            position: relative;
            z-index: 2;
            color: var(--hl-text);
          }
          .framer-150n8ea mark::after {
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
        <div className="framer-150n8ea mb-6">
          <h3 className="text-white text-[36px] md:text-[42px] font-bold tracking-[-0.01em] text-center font-sans">
            A Look at Who We’ve{" "}
            <mark style={{ "--highlighted": 1 } as React.CSSProperties}>
              <span>Worked With</span>
            </mark>
          </h3>
        </div>

        {/* Subtext */}
        <p className="text-white/65 text-[18px] md:text-[21px] leading-[140%] text-center max-w-2xl font-sans">
          Click an arrow to shuffle through some of our partners
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-[1600px] mx-auto group">
        {/* Left Control */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#E3B96B] rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Previous"
        >
          <ChevronLeft className="text-black w-6 h-6" strokeWidth={3} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-10 pb-8 pt-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {caseStudies.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="relative shrink-0 snap-center w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-[20px] overflow-hidden group block"
            >
              {/* Image with Grayscale hover effect */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                style={{
                  maskImage:
                    "linear-gradient(0deg, transparent -10%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(0deg, transparent -10%, black 100%)",
                }}
              />

              {/* Glassmorphism Title Pill */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[340px]">
                <div
                  className="w-full flex items-center justify-between px-4 py-3 rounded-[40px] border border-white/30 backdrop-blur-md transition-all duration-300 group-hover:bg-white/10"
                  style={{
                    background:
                      "linear-gradient(rgba(255, 255, 255, 0.13) 0%, rgba(171, 171, 171, 0.03) 100%)",
                  }}
                >
                  <p className="text-white font-semibold text-[12px] md:text-[13px] tracking-[-0.02em] flex-1 text-center font-sans">
                    {project.name} - {project.stat}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <ArrowUpRight
                      className="text-[#E3B96B] w-4 h-4"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Control */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#E3B96B] rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Next"
        >
          <ChevronRight className="text-black w-6 h-6" strokeWidth={3} />
        </button>
      </div>

      {/* Global Style to hide scrollbar cross-browser */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `,
        }}
      />

      {/* Bottom CTA Section */}
      <div className="w-full flex flex-col items-center mt-12 gap-8 px-6">
        {/* Primary CTA */}
        <Link
          href="/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative transition-transform duration-300 hover:scale-105 block"
        >
          <div
            className="px-8 py-3.5 rounded-[52px]"
            style={{
              background:
                "linear-gradient(180deg, rgb(237, 181, 69) 0%, rgb(171, 120, 19) 100%)",
              boxShadow: "rgba(255, 195, 74, 0.62) 0px 1px 41px 0px",
            }}
          >
            <span className="text-white font-extrabold text-[18px] md:text-[21px] tracking-[-0.6px] leading-[28px] uppercase block text-center font-sans">
              Book your strategy call now
            </span>
          </div>
        </Link>

        {/* Trust Badge */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <p className="text-white text-[14px] font-medium tracking-[-0.02em] leading-[150%]">
            <strong>Lowest Effective CPM</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
