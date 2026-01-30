import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: "Brez Scales", audience: "1M+ Audience", img: "https://framerusercontent.com/images/gIafuVmxJxILvA8K0sekOcVqJ8.jpg" },
  { name: "Vincent Fischer", audience: "800k+ Audience", img: "https://framerusercontent.com/images/VKstMRn09M2LV8QzHm0A8LmnP5k.jpg" },
  { name: "Punchmade Dev", audience: "1M+ Audience", img: "https://framerusercontent.com/images/UZytmRP9sTDrFWSTE89dHachfU.jpg" },
  { name: "Whop", audience: "500k+ Audience", img: "https://framerusercontent.com/images/tSQbsMHrpI1ADOhrVfDiVHgqe1w.png" },
];

const ClientShowcase: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* SECTION GLOWS - Batman Yellow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* TOP HEADER */}
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-[#FFD700] font-mono text-[12px] tracking-[0.4em] uppercase mb-4">
            // Operational Success
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            THE PHANTOM NETWORK.
          </h2>
          <div className="mt-8">
             <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://calendly.com/phantomclips"
                className="px-8 py-3 bg-[#FFD700] text-black text-sm font-black uppercase tracking-widest rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.3)]"
              >
                Book a 30-min call
              </motion.a>
          </div>
          <p className="text-white/40 font-medium mt-12 text-lg italic">Worked With 👇</p>
        </div>

        {/* CLIENT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[30px] overflow-hidden border border-white/10 bg-[#080808]"
            >
              {/* Background Image */}
              <img 
                src={client.img} 
                alt={client.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />
              
              {/* Batman Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="bg-black/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 space-y-3">
                  <h4 className="text-white font-bold text-xl tracking-tight">{client.name}</h4>
                  
                  {/* Yellow Separator */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/40 to-[#FFD700]/0" />
                  
                  {/* Yellow Stat Tag */}
                  <div className="inline-block px-3 py-1.5 rounded-lg border border-[#FFD700]/20 bg-[#FFD700]/5">
                    <span className="text-[#FFD700] font-mono text-[10px] font-bold uppercase">
                      {client.audience}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM VIDEO CAROUSEL PLACEHOLDER */}
        <div className="mt-24 space-y-6">
           <p className="text-center text-white/30 font-mono text-xs tracking-widest uppercase">
             Live Feeds from the Army
           </p>
           <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="min-w-[280px] aspect-[9/16] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden relative">
                   {/* Placeholder for the actual clippers videos from the Framer assets */}
                   <div className="absolute inset-0 flex items-center justify-center text-[10px] text-white/20 font-mono">
                     [ CLIP_FEED_ID: 00{i} ]
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;