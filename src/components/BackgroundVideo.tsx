import { motion } from "framer-motion";

export default function BackgroundVideo() {
  return (
    <section className="relative w-full h-dvh overflow-hidden bg-transparent">
      {/* The video container */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <video
          src="https://framerusercontent.com/assets/KryCV9x3xsvDFOGU0vv0KmUBJQ.mp4"
          poster="https://framerusercontent.com/images/PJMjGmlofK32Zp1yZ7x3xD1CTbo.png"
          loop
          muted
          autoPlay
          playsInline
          controls={false}
          className="w-full h-full object-cover pointer-events-none"
          style={{
            // @ts-ignore
            "&::-webkit-media-controls": {
               display: "none !important"
            },
            "&::-webkit-media-controls-start-playback-button": {
              display: "none !important",
              appearance: "none"
            }
          }}
        />
        
        {/* Extra Overlay to ensure video is never reachable by mouse/touch */}
        <div className="absolute inset-0 z-10 bg-transparent" />
      </motion.div>
    </section>
  );
}