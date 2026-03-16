"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    name: "Jonathan Low",
    stat: "Partner",
    image: "/jonathanlow.jpg",
    link: "#jonathanlow",
  },
  {
    name: "Maurits",
    stat: "Partner",
    image: "/maurits.jpg",
    link: "#maurits",
  },
  {
    name: "Smith Rees",
    stat: "Partner",
    image: "/smithrees.jpg",
    link: "#smithrees",
  },
  {
    name: "Crown88",
    stat: "Brand Partner",
    image: "/crown88.jpg",
    link: "#crown88",
  },
  {
    name: "Cryptonary",
    stat: "Brand Partner",
    image: "/cryptonary.jpg",
    link: "#cryptonary",
  },
];

// We duplicate the array to create a seamless infinite loop
const marqueeItems = [
  ...caseStudies,
  ...caseStudies,
  ...caseStudies,
  ...caseStudies,
];

export default function Projects() {
  return (
    <section
      id="case-studies"
      className="w-full bg-linear-to-b from-white/10 via-black via-50% to-black py-24 overflow-hidden flex flex-col items-center relative z-10"
    >
      {/* Inject custom styles for the marquee */}
      <style>{`
        @keyframes slow-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* -25% because we duplicated the array 4 times */
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: slow-marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Section */}
      <div className="w-full max-w-6xl px-6 flex flex-col items-center mb-16">
        {/* Badge */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-[20px] bg-[#0D0D0D] mb-8 glass-panel-purple border border-[#C084FC]/20">
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
            A Look at Who We’ve{" "}
            <span className="neon-mark px-1">Worked With</span>
          </h3>
        </div>

        {/* Subtext */}
        <p className="text-white/65 text-[18px] md:text-[21px] leading-[140%] text-center max-w-2xl font-sans">
          Take a look at some of the partners we've helped grow
        </p>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden">
        {/* Mask to fade the edges into the black background */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent z-30 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent z-30 pointer-events-none"></div>

        <div className="animate-marquee gap-6 px-6 pt-4 pb-10">
          {marqueeItems.map((study, index) => (
            <Link
              href={study.link}
              key={index}
              className="outline-hidden block shrink-0"
            >
              <div
                className="relative group overflow-hidden rounded-2xl w-50 h-50 border border-[#C084FC]/20"
                style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
              >
                {/* Image & Bottom Fade Mask */}
                <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                  <img
                    src={study.image}
                    alt={study.name}
                    className="w-full h-full object-cover filter grayscale opacity-75 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 mask-bottom-fade"
                  />
                </div>

                {/* Content Badge - Adjusted for smaller cards */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-20">
                  <div className="glass-panel-purple flex items-center justify-between px-3 py-2 rounded-full transition-all duration-300 border border-[#C084FC]/30 group-hover:border-[#C084FC]/60 gap-2">
                    <p className="text-white text-[10px] sm:text-[11px] font-semibold tracking-[-0.02em] whitespace-nowrap overflow-hidden text-ellipsis">
                      {study.name} -{" "}
                      <span className="text-white/80 font-normal">
                        {study.stat}
                      </span>
                    </p>
                    <div className="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center shrink-0 group-hover:bg-[#C084FC] transition-colors duration-300">
                      <ArrowUpRight className="w-3 h-3 text-[#C084FC] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
