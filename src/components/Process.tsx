import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';

const stages = [
  {
    id: "Stage 1",
    title: "Build",
    icon: <Shield size={24} className="text-[#FFD700]" />,
    description: "We create a private, dedicated clipping community for your brand. You simply send us your content, and we take care of the rest, including onboarding clippers from both your audience and our network of thousands.",
    tags: ["Vision Alignment", "Community Building"],
    img: "https://framerusercontent.com/images/KfsUX7SjXWF8GYOil2kfkZ9e1PA.png"
  },
  {
    id: "Stage 2",
    title: "Launch",
    icon: <Zap size={24} className="text-[#FFD700]" />,
    description: "Once inside your community, clippers are guided through our proven launch process. The clippers are coached to produce strong content that aligns your brand vision, content guidelines, and platform strategy.",
    tags: ["Content Refinement", "Strategic Selection"],
    img: "https://framerusercontent.com/images/KfsUX7SjXWF8GYOil2kfkZ9e1PA.png" // Using reference image from your code
  },
  {
    id: "Stage 3",
    title: "Scale",
    icon: <Target size={24} className="text-[#FFD700]" />,
    description: "Our team actively manages your community daily. Every submission is manually reviewed for quality. As your best clippers grow, so does the reach and impact of your brand across all platforms.",
    tags: ["Multi-Platform Reach", "Audience Growth"],
    img: "https://framerusercontent.com/images/3fTl0jOeNCf5k69Fvi5Sj616o.svg"
  }
];

const Process: React.FC = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      
      {/* Background HUD elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* TOP HEADER */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
            <span className="text-[#FFD700] font-mono text-[10px] uppercase tracking-widest font-bold">How We Work?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
            WE HANDLE EVERYTHING
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white/40 tracking-tight">
            From Curation To Distribution.
          </h3>
        </div>

        {/* PROCESS STAGES */}
        <div className="space-y-12">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#050505] rounded-[30px] border border-white/10 p-8 md:p-12 overflow-hidden"
            >
              {/* Tactical Glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Left Side: Content */}
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#FFD700] font-mono text-xs font-bold tracking-tighter">
                  {stage.id}
                </div>
                
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                  {stage.title} {stage.icon}
                </h4>
                
                <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                  {stage.description}
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {stage.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/40 font-mono text-[10px] uppercase tracking-widest font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                {stage.id === "Stage 3" && (
                  <motion.div className="pt-8">
                    <a href="#contact" className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-black font-black uppercase tracking-tighter rounded-xl hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,215,0,0.2)] text-sm">
                      Book an Appointment
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Right Side: Visual HUD */}
              <div className="relative rounded-2xl overflow-hidden border border-white/5 aspect-video lg:aspect-square bg-zinc-900">
                <img 
                  src={stage.img} 
                  alt={stage.title} 
                  className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                
                {/* HUD Scanlines */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;