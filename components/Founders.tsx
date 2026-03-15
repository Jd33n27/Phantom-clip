import React from "react";

const teamMembers = [
  {
    name: "Eddie Cumberbatch",
    role: "Co-Founder",
    description:
      "Eddie grew an audience of 500K+ and generated over $4M through his content. One of the first to pioneer clipping in 2022, he proved the power of distribution to scale influence.",
    quote: "“Attention is the new oil. We drill it daily.”",
    image:
      "https://framerusercontent.com/images/0dyVArmYllNi6GDF8rsi98J2s.jpeg",
  },
  {
    name: "Danilo Vasilic",
    role: "Co-Founder",
    description:
      "Having operated several online brands and companies, Danilo brings expertise in strategies, systems, and scale. He builds frameworks that transform vision into lasting omnipresence.",
    quote: "“Control distribution, and you control the market.”",
    image:
      "https://framerusercontent.com/images/cCT2EpZ1SvBDYiKvf0UsrKDgBs.jpg",
  },
  {
    name: "Rayan Khazaal",
    role: "Head of partnerships",
    description:
      "Rayan leads partnerships and strategic growth by building powerful networks, identifying high-impact opportunities, and closing long-term, high-value collaborations that directly drive the company’s expansion and market presence.",
    quote: "“Opportunities don’t appear. They’re introduced.”",
    image:
      "https://framerusercontent.com/images/WIFsAaUQaOJeiz5XN174INmlQk.png",
  },
];

const VERIFIED_BADGE_URL =
  "https://framerusercontent.com/images/p5Kr1XJYIuF0zMRMFUKEchs6E48.png";

export default function Founders() {
  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden flex flex-col items-center">
      {/* Background subtle glow to match the original premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#E3B96B]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-32 md:gap-40">
        
        {/* Section Title (Optional based on prior context, keeping it focused on the profiles) */}
        <div className="w-full text-center -mb-10">
          <h2 className="text-white text-[32px] md:text-[38px] font-bold tracking-[-0.01em] font-sans">
            The Minds Behind The System
          </h2>
        </div>

        {teamMembers.map((member, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div key={index} className="flex flex-col w-full gap-12 md:gap-16">
              
              {/* Profile Block (Text + Image) */}
              <div 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                
                {/* Text Content */}
                <div className="flex flex-col items-start text-left w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-[32px] tracking-[-0.03em] leading-none font-sans">
                      {member.name}
                    </h3>
                    <img 
                      src={VERIFIED_BADGE_URL} 
                      alt="Verified" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  
                  <p className="text-[#E3B96B] font-semibold italic text-[20px] tracking-[-0.01em] mb-6">
                    {member.role}
                  </p>
                  
                  <p className="text-[#777777] font-medium text-[20px] md:text-[22px] leading-relaxed tracking-[-0.01em] font-sans">
                    {member.description}
                  </p>
                </div>

                {/* Portrait Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-125 aspect-4/5 md:aspect-3/4 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Gradient overlay to replicate the Framer mask effect */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>

              </div>

              {/* Quote Block */}
              <div className="w-full flex justify-center px-4">
                <h4 className="text-[#FFCF75] font-serif italic text-[28px] md:text-[32px] text-center tracking-[-0.03em] leading-tight max-w-3xl">
                  {member.quote}
                </h4>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}