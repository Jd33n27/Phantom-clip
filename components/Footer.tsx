import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-white/10 via-black via-50% to-black pt-24 pb-12 flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Top Background Separator Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Tag */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-white/20"></div>
            <p className="text-[#C084FC] font-normal tracking-[-0.02em] leading-[1.6em]">
              <em>Reach out anytime</em>
            </p>
            <div className="w-12 h-px bg-white/20"></div>
          </div>

          {/* Heading */}
          <h2 className="text-[36px] md:text-[42px] font-bold text-white leading-tight mb-6 text-center tracking-tight">
            Achieve More Than Ever <br className="hidden md:block" />
            Before with{" "}
            <span className="text-[#C084FC] font-serif italic text-[42px] md:text-[49px] font-normal">
              Phantomclips
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-white/60 text-[16px] md:text-[18px] tracking-[-0.02em] leading-[1.6em] text-center max-w-lg">
            Let’s bring something extraordinary to life.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-4 mb-20">
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
                  "linear-gradient(180deg, rgb(168, 85, 247) 0%, rgb(126, 34, 206) 100%)",
                boxShadow: "rgba(168, 85, 247, 0.6) 0px 0px 35px 0px",
                border: "3px solid #E9D5FF",
              }}
            >
              <span className="text-white font-extrabold text-[18px] md:text-[21px] tracking-[-0.6px] leading-7 uppercase block text-center">
                Book your strategy call now
              </span>
            </div>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/case-studies"
            className="group transition-transform duration-300 hover:scale-105 block border-[3px] border-[#E9D5FF] rounded-[52px] shadow-[0_0_25px_rgba(168,85,247,0.4)] bg-[#C084FC]/10"
          >
            <span className="text-[#C084FC] group-hover:text-white transition-colors duration-300 font-extrabold text-[18px] md:text-[21px] tracking-[-0.6px] leading-7 uppercase text-center block py-3.5 px-6">
              See Case Studies
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Branding Section */}
      <div className="relative z-10 w-full max-w-6xl mt-4 pt-12 border-t border-white/10 flex items-center justify-center gap-4">
        <div className="w-27 h-27 relative overflow-hidden rounded-full">
          <Image
            src="/logo.png"
            alt="Phantom Clips Logo"
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
        <span className="text-white font-bold text-2xl tracking-wide">
          Phantom Clips
        </span>
      </div>
    </footer>
  );
}
