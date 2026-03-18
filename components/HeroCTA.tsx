import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="flex flex-col items-center gap-8 mt-12 mb-20 w-full relative z-10">
      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* Primary CTA (Purple Gradient with Glow) */}
        <Link
          href="/booking"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-linear-to-b from-[#A855F7] to-[#7E22CE] rounded-full px-8 py-3.5 shadow-[0_0_35px_rgba(168,85,247,0.6)] border-[3px] border-[#E9D5FF]">
            <span className="text-white font-extrabold text-[18px] md:text-[21px] tracking-[-0.6px] uppercase block text-center">
              Book your strategy call now
            </span>
          </div>
        </Link>

        {/* Secondary CTA (Text Link) */}
        <Link
          href="/case-studies"
          className="text-[#C084FC] hover:text-[#FFF] font-extrabold text-[18px] md:text-[21px] tracking-[-0.6px] uppercase transition-colors duration-300 px-6 py-3 text-center border-[3px] border-[#E9D5FF] rounded-full shadow-[0_0_25px_rgba(168,85,247,0.4)] bg-[#C084FC]/10"
        >
          See Case Studies
        </Link>
      </div>

      {/* Trust Points */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 opacity-90">
        {/* Point 1 */}
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]"></span>
          <p className="text-white text-sm font-semibold tracking-tight">
            #1 Creator Network for Brands
          </p>
        </div>

        {/* Point 2 */}
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]"></span>
          <p className="text-white text-sm font-semibold tracking-tight">
            Trusted by 500+ Growing Brands
          </p>
        </div>
      </div>
    </div>
  );
}
