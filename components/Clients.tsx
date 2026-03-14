"use client";
import { motion } from 'framer-motion';

// Placeholder data - TODO Replace 'logo' strings with your actual image imports or URLs
const clients = [
  { name: 'Brez', logo: 'https://placehold.co/180x80/1a1a1a/FFD700?text=BREZ' },
  { name: 'Whop', logo: 'https://placehold.co/180x80/1a1a1a/FFD700?text=WHOP' },
  { name: 'Punch', logo: 'https://placehold.co/180x80/1a1a1a/FFD700?text=PUNCH' },
  { name: 'Scarface', logo: 'https://placehold.co/180x80/1a1a1a/FFD700?text=SCARFACE' },
  { name: 'Fredo', logo: 'https://placehold.co/180x80/1a1a1a/FFD700?text=FREDO' },
];

// array duplicationn to ensure seamless infinite scrolling
const marqueeClients = [...clients, ...clients, ...clients];

export default function Clients () {
  return (
    <section className="w-full py-20 bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Marquee Container */}
      <div className="relative w-full max-w-360 flex items-center">
        
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-r from-black to-transparent pointer-events-none" />
        
        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-l from-black to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30, // Adjust speed: higher = slower
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeClients.map((client, index) => (
            <div 
              key={`${client.name}-${index}`}
              className="relative group shrink-0 cursor-pointer"
            >
              {/* Logo Container */}
              <div className="w-35 h-15 md:w-45 md:h-20 flex items-center justify-center transition-all duration-300 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0">
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Hover Glow Effect behind logo */}
              <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};