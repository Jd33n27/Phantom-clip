export default function Footer() {
  return (
    <footer className="w-full bg-black py-24 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle wine ambient glow behind the footer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-wine/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Big Circular Logo Container */}
      <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[3px] border-wine/30 shadow-[0_0_40px_rgba(71,1,1,0.3)] mb-6 bg-black">
        <img
          src="/logo.png"
          alt="Phantom Clip Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white tracking-wider">
        Phantom Clip
      </h2>
    </footer>
  );
}
