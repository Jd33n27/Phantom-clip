import { motion } from "framer-motion";

export default function BackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden pointer-events-none">
      {/* 1. TOP-CENTER: Primary Wine Glow (The main focus) */}
      <motion.div
        animate={{
          x: ["-25%", "25%", "-10%"],
          y: ["-15%", "15%", "0%"],
          scale: [1, 1.4, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-25%] left-1/4 w-full h-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, #6b0202 0%, #470101 40%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />

      {/* 2. BOTTOM-RIGHT: Deep Crimson Anchor */}
      <motion.div
        animate={{
          x: ["15%", "-15%", "10%"],
          y: ["25%", "-20%", "15%"],
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-30%] right-[-15%] w-full h-full opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, #470101 0%, #2d0101 50%, transparent 80%)",
          filter: "blur(90px)",
        }}
      />

      {/* 3. CENTER-LEFT: New Symmetrical Wine Glow (Balancing the left side) */}
      <motion.div
        animate={{
          x: ["-15%", "15%", "-5%"],
          y: ["20%", "-20%", "10%"],
          scale: [0.9, 1.3, 1],
        }}
        transition={{
          duration: 9, // Slightly different timing to prevent perfect symmetry
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[-20%] w-full h-full opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, #6b0202 0%, #470101 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* 4. TOP-LEFT/CENTER: Vivid Flash Highlight (Fastest movement) */}
      <motion.div
        animate={{
          x: ["-40%", "40%", "-40%"],
          y: ["10%", "70%", "10%"],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/2 w-3/4 h-3/4 opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, #800000 0%, transparent 55%)",
          filter: "blur(60px)",
        }}
      />

      {/* Very light overlay to let the balanced colors pop */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}

// import { motion } from "framer-motion";

// export default function BackgroundVideo() {
//   return (
//     <section className="relative w-full h-dvh overflow-hidden bg-transparent">
//       {/* The video container */}
//       <motion.div
//         initial={{ opacity: 0, scale: 1.1 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="relative w-full h-full"
//       >
//         <video
//           src="https://framerusercontent.com/assets/KryCV9x3xsvDFOGU0vv0KmUBJQ.mp4"
//           poster="https://framerusercontent.com/images/PJMjGmlofK32Zp1yZ7x3xD1CTbo.png"
//           loop
//           muted
//           autoPlay
//           playsInline
//           controls={false}
//           className="w-full h-full object-cover pointer-events-none"
//           style={{
//             // @ts-ignore
//             "&::-webkit-media-controls": {
//                display: "none !important"
//             },
//             "&::-webkit-media-controls-start-playback-button": {
//               display: "none !important",
//               appearance: "none"
//             }
//           }}
//         />

//         {/* Extra Overlay to ensure video is never reachable by mouse/touch */}
//         <div className="absolute inset-0 z-10 bg-transparent" />
//       </motion.div>
//     </section>
//   );
// }
