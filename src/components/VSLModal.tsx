import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VSLModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl: string;
}

export default function VSLModal({
  isOpen,
  onClose,
  title,
  videoUrl,
}: VSLModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-wine/30 shadow-[0_0_100px_rgba(71,1,1,0.3)]"
          >
            {/* Header Area for Title */}
            <div className="absolute top-0 left-0 right-0 p-6 z-10 bg-linear-to-b from-black/80 to-transparent flex justify-between items-center">
              <h3 className="text-white font-bold text-xl md:text-2xl">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-wine transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Video Embed */}
            <iframe
              className="w-full h-full"
              src={`${videoUrl}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
