"use client";

import { motion } from "framer-motion";

export default function BackgroundShader() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -70, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient mesh overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(59, 130, 246, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.05) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(99, 102, 241, 0.05) 0px, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
