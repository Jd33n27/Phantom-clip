import Link from "next/link";
import { Sliders, Activity, Users, Layers } from "lucide-react";

export default function Services() {
  return (
    <section
      id="why-us"
      className="relative w-full bg-black py-24 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Background Lights / Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[722px] opacity-60 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/hIDqfiTbY3IysibAQMXdLAh3FIg.svg"
          alt="Light Rays"
          className="w-full h-auto object-contain object-top"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <p className="text-white text-[13px] tracking-[-0.02em] font-medium">
              #1 Creator Network for Brands
            </p>
          </div>

          {/* Custom CSS for Neon Highlight */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .framer-1k87pfs {
              --highlight: #FFBB0F;
              --hl-text: #ffffff;
              --hl-speed: 800ms;
            }
            .framer-1k87pfs mark {
              position: relative;
              background: transparent;
            }
            .framer-1k87pfs mark > span {
              position: relative;
              z-index: 2;
              color: var(--hl-text);
            }
            .framer-1k87pfs mark::after {
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
          <div className="framer-1k87pfs">
            <h3 className="text-white text-[32px] md:text-[36px] font-bold tracking-[-0.01em] text-center font-sans">
              Why{" "}
              <mark style={{ "--highlighted": 1 } as React.CSSProperties}>
                <span>Phantomclips?</span>
              </mark>
            </h3>
          </div>

          {/* Subtext */}
          <p className="text-white/65 text-[17px] md:text-[19px] leading-[140%] text-center mt-6 max-w-xl font-sans">
            Join 500+ brands getting guaranteed authentic engagement and
            measurable results
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
          {/* Card 1 */}
          <div
            className="bg-white rounded-[20px] p-8 flex flex-col gap-5 border border-[#E3B96B] transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div className="flex items-center gap-4">
              <Sliders className="w-8 h-8 text-[#E3B96B]" strokeWidth={1.5} />
              <h4 className="text-[#0D0D0D] font-bold text-[21px] md:text-[23px] leading-[1.4em]">
                Your Brand, Your Control
              </h4>
            </div>
            <div className="w-full h-px bg-[#E3B96B]/80"></div>
            <p className="text-[#0D0D0D]/80 text-[13px] md:text-[14px] leading-[1.5em] tracking-[-0.02em]">
              Launch campaigns with handpicked editors who understand your brand
              voice. No generic content - just authentic storytelling that
              drives real engagement and conversions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white rounded-[20px] p-8 flex flex-col gap-5 border border-[#E3B96B] transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div className="flex items-center gap-4">
              <Activity className="w-8 h-8 text-[#E3B96B]" strokeWidth={1.5} />
              <h4 className="text-[#0D0D0D] font-bold text-[21px] md:text-[23px] leading-[1.4em]">
                100% Real Engagement
              </h4>
            </div>
            <div className="w-full h-px bg-[#E3B96B]/80"></div>
            <p className="text-[#0D0D0D]/80 text-[13px] md:text-[14px] leading-[1.5em] tracking-[-0.02em]">
              Every interaction is verified human engagement - no bots, no fake
              traffic. Get real views from real people who convert into real
              customers.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white rounded-[20px] p-8 flex flex-col gap-5 border border-[#E3B96B] transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-[#E3B96B]" strokeWidth={1.5} />
              <h4 className="text-[#0D0D0D] font-bold text-[21px] md:text-[23px] leading-[1.4em]">
                Access to 7M+ Vetted Editors
              </h4>
            </div>
            <div className="w-full h-px bg-[#E3B96B]/80"></div>
            <p className="text-[#0D0D0D]/80 text-[13px] md:text-[14px] leading-[1.5em] tracking-[-0.02em]">
              Access top-performing editors with proven results in your
              industry. Each creator is performance-verified to ensure your
              investment delivers measurable ROI.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white rounded-[20px] p-8 flex flex-col gap-5 border border-[#E3B96B] transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
          >
            <div className="flex items-center gap-4">
              <Layers className="w-8 h-8 text-[#E3B96B]" strokeWidth={1.5} />
              <h4 className="text-[#0D0D0D] font-bold text-[21px] md:text-[23px] leading-[1.4em]">
                We Handle Everything
              </h4>
            </div>
            <div className="w-full h-px bg-[#E3B96B]/80"></div>
            <p className="text-[#0D0D0D]/80 text-[13px] md:text-[14px] leading-[1.5em] tracking-[-0.02em]">
              From strategy to posting to optimization - we handle everything.
              You get detailed reports and growing sales while focusing on
              running your business.
            </p>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col items-center gap-10">
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-6">
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
                <span className="text-white font-extrabold text-[18px] md:text-[21px] tracking-[-0.6px] leading-[28px] uppercase block text-center">
                  Book your strategy call now
                </span>
              </div>
            </Link>

            <Link
              href="/case-studies"
              className="group transition-transform duration-300 hover:scale-105 block"
            >
              <span className="text-[#E3B96B] font-extrabold text-[18px] md:text-[21px] tracking-[-0.6px] leading-[28px] uppercase text-center block py-3.5 px-4">
                See Case Studies
              </span>
            </Link>
          </div>

          {/* Trust Points */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <p className="text-white text-[14px] font-medium tracking-[-0.02em] leading-[150%]">
                <strong>Trusted by 500+ Growing Brands</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <p className="text-white text-[14px] font-medium tracking-[-0.02em] leading-[150%]">
                <strong>5B+ Verified Views Delivered</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
