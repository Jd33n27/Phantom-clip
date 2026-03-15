"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    name: "Druski",
    stat: "27M+ Combined Followers",
    image: "https://framerusercontent.com/images/ysALSBRvA6myEdahvGV7ZFAKPE.jpg",
    link: "#druski",
  },
  {
    name: "Dean Graziosi",
    stat: "1.8M+ Combined Followers",
    image: "https://framerusercontent.com/images/n16yQ58p8mGSFfOPq2SjrWWAw.jpeg",
    link: "#dean",
  },
  {
    name: "Yacine Sibous",
    stat: "Founder of Parker",
    image: "https://framerusercontent.com/images/rb4ik6r71iEmdhF7iANbkOnM3dY.png",
    link: "#yacine",
  },
  {
    name: "Sketch",
    stat: "7.1M+ Combined Followers",
    image: "https://framerusercontent.com/images/U3eRZqBIXPGtBeDB5EOL0fSsTA.jpg",
    link: "#sketch",
  },
  {
    name: "Ken Carson",
    stat: "5B+ Total Streams",
    image: "https://framerusercontent.com/images/68g9YBSh8ILBn1kkw034vYoyWU.jpeg",
    link: "#kencarson",
  },
  {
    name: "lilbubblegum",
    stat: "700M+ Total Streams",
    image: "https://framerusercontent.com/images/ZjCEqjAlCEvPs7JjITALJcn40w.jpg",
    link: "#lilbubblegum",
  },
  {
    name: "Saamir Mithwani",
    stat: "700K+ Combined Followers",
    image: "https://framerusercontent.com/images/F0TbsMLlb74Clns14uuRD5OrXQ.png",
    link: "#saamir",
  },
  {
    name: "Jordan Welch",
    stat: "2.6M+ Combined Followers",
    image: "https://framerusercontent.com/images/AE5J9pQZK7AiRX3k7Hy0hBkox7c.jpg",
    link: "#jordanwelch",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 420 : 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="case-studies"
      className="w-full bg-black/40 py-24 overflow-hidden flex flex-col items-center relative z-10"
    >
      {/* Header Section */}
      <div className="w-full max-w-6xl px-6 flex flex-col items-center mb-16">
        {/* Badge */}
        <div
          className="flex items-center gap-3 px-4 py-2 rounded-[20px] bg-[#0D0D0D] mb-8 glass-panel-purple border border-[#C084FC]/20"
        >
          <div className="w-5 h-5 rounded-[10px] bg-[#C084FC] flex items-center justify-center p-0.5">
            <div className="w-full h-full rounded-lg bg-[#0D0D0D] flex items-center justify-center p-0.5">
              <div className="w-full h-full rounded-md bg-[#C084FC]"></div>
            </div>
          </div>
          <p className="text-white text-[13px] tracking-[-0.02em] font-medium uppercase">
            Our Partnerships
          </p>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h3 className="text-white text-[36px] md:text-[42px] font-bold tracking-[-0.01em] text-center font-sans">
            A Look at Who We’ve <span className="neon-mark px-1">Worked With</span>
          </h3>
        </div>

        {/* Subtext */}
        <p className="text-white/65 text-[18px] md:text-[21px] leading-[140%] text-center max-w-2xl font-sans">
          Click an arrow to shuffle through some of our partners
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-400 mx-auto group">
        
        {/* Left Control */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md items-center justify-center border border-white/10 text-white/70 hover:text-white hover:bg-black/80 hover:border-[#C084FC]/50 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="w-full flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-20 pb-10 pt-4 no-scrollbar scroll-smooth"
        >
          {caseStudies.map((study, index) => (
            <Link
              href={study.link}
              key={index}
              className="snap-center outline-hidden"
            >
              <div
                className="relative group overflow-hidden rounded-2xl shrink-0 w-75 md:w-100 h-100 border border-[#C084FC]/20"
                style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
              >
                {/* Image & Bottom Fade Mask applied via CSS class */}
                <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                  <img
                    src={study.image}
                    alt={study.name}
                    className="w-full h-full object-cover filter grayscale opacity-75 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 mask-bottom-fade"
                  />
                </div>

                {/* Content Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] z-20">
                  <div className="glass-panel-purple flex items-center justify-between px-4 py-3 rounded-full transition-all duration-300 border border-[#C084FC]/30 group-hover:border-[#C084FC]/60">
                    <p className="text-white text-[13px] font-semibold tracking-[-0.02em]">
                      {study.name} -{" "}
                      <span className="text-white/80 font-normal">
                        {study.stat}
                      </span>
                    </p>
                    <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center group-hover:bg-[#C084FC] transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-[#C084FC] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Control */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md items-center justify-center border border-white/10 text-white/70 hover:text-white hover:bg-black/80 hover:border-[#C084FC]/50 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}