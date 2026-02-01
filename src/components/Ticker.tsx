import { motion } from "framer-motion";

const clients = [
  {
    name: "Maurits",
    role: "CREATOR",
    img: "/maurits.jpg",
  },
  {
    name: "Smith Rees",
    role: "CREATOR",
    img: "/smithrees.jpg",
  },
  {
    name: "Cryptonary",
    role: "COMPANY",
    img: "/cryptonary.jpg",
  },
  {
    name: "Jonathan Low",
    role: "INFLUENCER",
    img: "/jonathanlow.jpg",
  },
  {
    name: "Crown88 Global",
    role: "COMPANY",
    img: "/crown88.jpg",
  },
];

export default function LogoTicker() {
  return (
    <div className="w-full relative z-20 mt-1 mb-12">
      {/* Separator Line updated to Wine theme */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-wine/50 to-transparent mb-12" />

      {/* Ticker Container with Gradient Mask */}
      <div
        className="relative w-full overflow-hidden max-w-7xl mx-auto"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <motion.div
          className="flex items-center w-max"
          animate={{ x: "-50%" }}
          transition={{
            duration: 190, // Adjusted for a smoother experience with 5 items
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Tripled list for infinite scrolling */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex flex-col items-center space-y-3 shrink-0 mx-8 group cursor-default"
            >
              {/* Avatar Image updated with Wine border */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-[3px] border-wine/80 group-hover:border-wine transition-colors duration-300 bg-black/50">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Info */}
              <div className="text-center">
                <p className="text-sm font-bold text-white whitespace-nowrap tracking-wide">
                  {client.name}
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-wider whitespace-nowrap uppercase mt-0.5">
                  {client.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
