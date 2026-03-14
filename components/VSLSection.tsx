"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, User, PlayCircle, Users, Zap } from "lucide-react";
import VSLModal from "./VSLModal";
import SpotlightCard from "./SpotLightCard";

export default function VSLSection() {
  const [activeModal, setActiveModal] = useState<
    "influencer" | "brand_ugc" | "brand_viral" | null
  >(null);
  const [showBrandOptions, setShowBrandOptions] = useState(false);

  const getModalTitle = () => {
    if (activeModal === "influencer") return "Scaling Your Personal Brand";
    if (activeModal === "brand_ugc") return "Brand Growth via UGC Ecosystems";
    if (activeModal === "brand_viral") return "Viral Engineering for Brands";
    return "";
  };

  return (
    <section id="about" className="w-full py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-wine">Path</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We have specialized strategies for both established brands and
            individual creators.
          </p>
        </div>

        {!showBrandOptions ? (
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {/* Option 1: Scale Brand */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setShowBrandOptions(true)}
            >
              <SpotlightCard
                className="h-full p-4 md:p-12 cursor-pointer group flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-wine/50"
                spotlightColor="rgba(71, 1, 1, 0.2)"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-wine/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 border border-wine/20 mx-auto">
                  <Building2 className="w-6 h-6 md:w-10 md:h-10 text-wine" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">
                  Brand
                </h3>
                <p className="hidden md:block text-gray-400 mb-8">
                  Scale revenue through UGC and viral systems.
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-wine text-xs md:text-base font-semibold flex items-center gap-1 md:gap-2 group-hover:gap-4 transition-all">
                    View Strategies{" "}
                    <PlayCircle size={16} className="md:w-5 md:h-5" />
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Option 2: Scale Creator */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveModal("influencer")}
            >
              <SpotlightCard
                className="h-full p-4 md:p-12 cursor-pointer group flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-wine/50"
                spotlightColor="rgba(71, 1, 1, 0.2)"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-wine/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 border border-wine/20 mx-auto">
                  <User className="w-6 h-6 md:w-10 md:h-10 text-wine" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">
                  Creator
                </h3>
                <p className="hidden md:block text-gray-400 mb-8">
                  Multiply reach and grow your audience.
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-wine text-xs md:text-base font-semibold flex items-center gap-1 md:gap-2 group-hover:gap-4 transition-all">
                    View Strategies <PlayCircle size={16} className="md:w-5 md:h-5" />
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => setShowBrandOptions(false)}
              className="mb-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors mx-auto"
            >
              ← Back
            </button>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <SpotlightCard
                  onClick={() => setActiveModal("brand_ugc")}
                  className="p-4 md:p-8 cursor-pointer text-center h-full hover:bg-red-950/20 flex flex-col items-center justify-center"
                  spotlightColor="rgba(71, 1, 1, 0.3)"
                >
                  <Users className="w-8 h-8 md:w-12 md:h-12 text-wine mb-2 md:mb-4" />
                  <h3 className="text-sm md:text-xl font-bold text-white">
                    UGC
                  </h3>
                </SpotlightCard>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <SpotlightCard
                  onClick={() => setActiveModal("brand_viral")}
                  className="p-4 md:p-8 cursor-pointer text-center h-full hover:bg-red-950/20 flex flex-col items-center justify-center"
                  spotlightColor="rgba(71, 1, 1, 0.3)"
                >
                  <Zap className="w-8 h-8 md:w-12 md:h-12 text-wine mb-2 md:mb-4" />
                  <h3 className="text-sm md:text-xl font-bold text-white">
                    Viral
                  </h3>
                </SpotlightCard>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      <VSLModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={getModalTitle()}
        videoUrl={
          activeModal === "influencer"
            ? "https://www.youtube.com/embed/PLACEHOLDER_ID_1"
            : activeModal === "brand_ugc"
              ? "https://www.youtube.com/embed/PLACEHOLDER_ID_2"
              : "https://www.youtube.com/embed/PLACEHOLDER_ID_3"
        }
      />
    </section>
  );
}
