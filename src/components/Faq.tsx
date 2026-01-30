import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What do I need to get started?",
    answer: "Access to your long-form content (YouTube, Podcasts, etc.) and a clear understanding of your brand goals. We handle the technical infrastructure, but the raw content is your ammunition."
  },
  {
    question: "Will I need to do anything?",
    answer: "Minimal effort is required from your side. Once the pipeline is established, your only job is to provide content and review the monthly impact reports. We operate in the shadows so you can stay in the spotlight."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 bg-black text-white overflow-hidden">
      
      {/* BACKGROUND DEPTH */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: TITLE CONTENT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
            <span className="text-[#FFD700] font-mono text-[10px] uppercase tracking-widest font-bold">Inquiry Feed</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              FREQUENTLY
            </h2>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white/40">
              ASKED QUESTIONS.
            </h2>
          </div>

          <p className="text-white/40 max-w-md text-lg leading-relaxed">
            Everything you need to know about deploying the Phantom network for your brand.
          </p>
        </div>

        {/* RIGHT: ACCORDION GRID */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              className={`border border-white/10 rounded-[20px] overflow-hidden transition-all duration-300 
                ${activeIndex === index ? 'bg-[#0A0A0A] border-[#FFD700]/30' : 'bg-[#080808] hover:border-white/20'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className={`text-lg font-bold tracking-tight transition-colors 
                  ${activeIndex === index ? 'text-[#FFD700]' : 'text-white'}`}>
                  {item.question}
                </span>
                
                <div className={`p-2 rounded-full border transition-all duration-300 
                  ${activeIndex === index ? 'bg-[#FFD700] border-[#FFD700] text-black rotate-90' : 'bg-white/5 border-white/10 text-white'}`}>
                  {activeIndex === index ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 text-white/60 leading-relaxed font-medium">
                      {/* Subtle yellow indicator line inside */}
                      <div className="w-full h-[1px] bg-gradient-to-r from-[#FFD700]/20 to-transparent mb-6" />
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;