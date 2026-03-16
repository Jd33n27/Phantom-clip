"use client";

import React from "react";
import GridBackground from "./GridBackground";
import CurlyArrow from "./CurlyArrow";
import { BadgeCheck } from "lucide-react";

const teamMembers = [
  {
    name: "Anurag",
    description:
      "Generated 1B+ organic views across platforms. With 4+ years studying and operating in short-form content, Anurag specializes in viral content strategy, sharp hooks, and identifying high-impact moments from long-form media.",
    image: "/AN.jpeg",
  },
  {
    name: "Daniel",
    description:
      "Drives 100M+ organic views monthly for clients with 4+ years in short-form content. Daniel focuses on directing clipping teams, identifying winning segments, and guiding editors on hooks, structure, and pacing to turn long-form content into scalable short-form clips.",
    image: "/DAN.jpeg",
  },
];

export default function Founders() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden flex flex-col items-center bg-black">
      {/* 1. First Grid: At the top */}
      <div className="absolute top-0 left-0 w-full h-150 z-0 opacity-100 pointer-events-none">
        <GridBackground />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col mt-10">
        {/* Section Title */}
        <div className="w-full text-center mb-16 relative z-20">
          <h2 className="text-white text-[32px] md:text-[38px] font-bold tracking-[-0.01em] font-sans">
            The Minds Behind The System
          </h2>
        </div>

        {teamMembers.map((member, index) => {
          const isImageOnLeft = index % 2 !== 0;

          const shadowClass = isImageOnLeft
            ? "shadow-[-20px_-20px_0px_#1a1a1a] md:shadow-[-30px_-30px_0px_#1a1a1a]"
            : "shadow-[20px_-20px_0px_#1a1a1a] md:shadow-[30px_-30px_0px_#1a1a1a]";

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col w-full relative z-20">
                <div
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                    isImageOnLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div className="flex flex-col items-start text-left w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-white font-bold text-[32px] tracking-[-0.03em] leading-none font-sans">
                        {member.name}
                      </h3>
                      {/* Purple Verified Badge with black checkmark */}
                      <BadgeCheck className="w-8 h-8 text-black fill-[#C084FC]" />
                    </div>

                    <p className="text-[#777777] font-medium text-[20px] md:text-[22px] leading-relaxed tracking-[-0.01em] font-sans">
                      {member.description}
                    </p>
                  </div>

                  {/* Portrait Image */}
                  <div className="w-full lg:w-1/2 flex mt-18 justify-center relative">
                    {index === 0 && (
                      <div className="absolute -top-28 -left-4 md:-top-36 md:-left-8 z-30 w-16 md:w-20 text-[#C084FC] hidden md:block drop-shadow-lg">
                        <CurlyArrow />
                      </div>
                    )}

                    <div
                      className={`relative w-full max-w-125 aspect-4/5 md:aspect-3/4 rounded-4xl overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-300 ${shadowClass}`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Second Grid: Between the images */}
              {index === 0 && (
                <div className="relative w-full h-48 md:h-64 my-12 md:my-16 opacity-100 z-10 pointer-events-none">
                  <GridBackground />
                </div>
              )}

              {/* 3. Third Grid: Negative top margin (-mt-16 / -mt-24) pulls it up UNDER the second image */}
              {index === 1 && (
                <div className="relative w-full h-48 md:h-64 -mt-16 md:-mt-24 opacity-100 z-10 pointer-events-none">
                  <GridBackground />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
