import { motion } from "framer-motion";

const clients = [
  {
    name: "Nelk Boys",
    role: "CREATORS",
    img: "/lovable-uploads/ed1f8cd1-ab87-43e9-b0af-9992369b2875.png",
  },
  {
    name: "Shaquille O'Neal",
    role: "ENTREPRENEUR",
    img: "/lovable-uploads/09ff506e-44c6-4a16-b445-861c01c22809.png",
  },
  {
    name: "Bryce Crawford",
    role: "INFLUENCER",
    img: "/lovable-uploads/b32fe594-2a20-4a0b-9a37-6305e14b954a.png",
  },
  {
    name: "Nick Nayersina",
    role: "INFLUENCER",
    img: "/lovable-uploads/8667aa08-3ff8-4900-b2ed-7261b69666a2.png",
  },
  {
    name: "Whop",
    role: "COMPANY",
    img: "/lovable-uploads/e30ee765-779a-432a-bcfb-e23d2a6575ec.png",
  },
  {
    name: "Pace Morby",
    role: "INVESTOR",
    img: "/lovable-uploads/1dc13cb9-0eae-40fe-9255-770b524b4188.png",
  },
  {
    name: "Dean Graziosi",
    role: "ENTREPRENEUR",
    img: "/lovable-uploads/f25a7f99-982b-4571-a12f-1721be348ee8.png",
  },
  {
    name: "Fanatics",
    role: "COMPANY",
    img: "/lovable-uploads/39537244-e808-435e-ae0d-2e11da303901.png",
  },
  {
    name: "Maury Povich",
    role: "CELEBRITY",
    img: "/lovable-uploads/ca9df66b-fa22-4e6c-9023-40cdbea4c529.png",
  },
  {
    name: "CPI Stem Cells",
    role: "COMPANY",
    img: "/lovable-uploads/2f6d2b05-9448-46af-a53e-aa40c321dde4.png",
  },
];

export default function LogoTicker() {
  return (
    <div className="w-full relative z-20 mt-1 mb-12">
      {/* Separator Line */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent mb-12" />

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
            duration: 35, // Adjusted speed to match the "pace" of the example
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* We triple the list to ensure smooth infinite scrolling */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex flex-col items-center space-y-3 shrink-0 mx-8 group cursor-default"
            >
              {/* Avatar Image */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-[3px] border-purple-500/20 group-hover:border-purple-500 transition-colors duration-300 bg-black/50">
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
