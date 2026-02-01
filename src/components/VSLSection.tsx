import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, User, PlayCircle, Users, Zap } from "lucide-react";
import VSLModal from "./VSLModal";
import SpotlightCard from "./SpotLightCard";

export default function VSLSection() {
  const [activeModal, setActiveModal] = useState<"influencer" | "brand_ugc" | "brand_viral" | null>(null);
  const [showBrandOptions, setShowBrandOptions] = useState(false);

  return (
    <section className="w-full py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-wine">Path</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We have specialized strategies for both established brands and individual creators. Select your goal to see how we scale you.
          </p>
        </div>

        {/* Main Selection Cards */}
        {!showBrandOptions ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option 1: Scale Brand */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setShowBrandOptions(true)}
              className="h-full"
            >
              <SpotlightCard 
                className="h-full p-8 md:p-12 cursor-pointer group flex flex-col items-center text-center transition-all duration-500 hover:border-wine/50"
                spotlightColor="rgba(71, 1, 1, 0.2)"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-wine/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-wine/20">
                    <Building2 className="w-10 h-10 text-wine" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">I'm a Brand</h3>
                  <p className="text-gray-400 mb-8">Looking to scale revenue through UGC, Paid Ads, and organic viral systems.</p>
                  <span className="text-wine font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Strategies <PlayCircle size={20} />
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Option 2: Scale Personal Brand (Influencer) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveModal("influencer")}
              className="h-full"
            >
              <SpotlightCard 
                className="h-full p-8 md:p-12 cursor-pointer group flex flex-col items-center text-center transition-all duration-500 hover:border-wine/50"
                spotlightColor="rgba(71, 1, 1, 0.2)"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-wine/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-wine/20">
                    <User className="w-10 h-10 text-wine" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">I'm a Creator</h3>
                  <p className="text-gray-400 mb-8">Looking to multiply my reach, grow my audience, and monetize content.</p>
                  <span className="text-wine font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Watch VSL <PlayCircle size={20} />
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        ) : (
          /* Sub-Selection for Brands */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
             <button 
                onClick={() => setShowBrandOptions(false)}
                className="mb-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
             >
                ← Back to selection
             </button>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Brand VSL 1: UGC & Community */}
                <motion.div whileHover={{ scale: 1.02 }}>
                    <SpotlightCard 
                        onClick={() => setActiveModal("brand_ugc")}
                        className="p-8 cursor-pointer text-center h-full hover:bg-red-950/20"
                        spotlightColor="rgba(71, 1, 1, 0.3)"
                    >
                        <Users className="w-12 h-12 text-wine mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Scale with UGC</h3>
                        <p className="text-sm text-gray-400">How we build a community-driven content engine for you.</p>
                    </SpotlightCard>
                </motion.div>

                {/* Brand VSL 2: Viral/Other */}
                <motion.div whileHover={{ scale: 1.02 }}>
                    <SpotlightCard 
                        onClick={() => setActiveModal("brand_viral")}
                        className="p-8 cursor-pointer text-center h-full hover:bg-red-950/20"
                        spotlightColor="rgba(71, 1, 1, 0.3)"
                    >
                        <Zap className="w-12 h-12 text-wine mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Viral Infrastructure</h3>
                        <p className="text-sm text-gray-400">The narrative engineering system behind billion-view campaigns.</p>
                    </SpotlightCard>
                </motion.div>
             </div>
          </motion.div>
        )}
      </div>

      {/* --- MODALS --- */}
      <VSLModal 
        isOpen={activeModal === "influencer"}
        onClose={() => setActiveModal(null)}
        title="Scaling Your Personal Brand"
        videoUrl="https://www.youtube.com/embed/PLACEHOLDER_ID_1" 
      />

      <VSLModal 
        isOpen={activeModal === "brand_ugc"}
        onClose={() => setActiveModal(null)}
        title="Brand Growth via UGC Ecosystems"
        videoUrl="https://www.youtube.com/embed/PLACEHOLDER_ID_2" 
      />

      <VSLModal 
        isOpen={activeModal === "brand_viral"}
        onClose={() => setActiveModal(null)}
        title="Viral Engineering for Brands"
        videoUrl="https://www.youtube.com/embed/PLACEHOLDER_ID_3" 
      />
    </section>
  );
}