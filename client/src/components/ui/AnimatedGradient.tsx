"use client";
import { motion } from "framer-motion";

export function AnimatedGradient() {
  return (
    <motion.div className="fixed inset-0 -z-10 overflow-hidden bg-[#010A1A]">
      {/* Top right animated blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        animate={{
          x: ["0%", "20%", "-10%", "5%"],
          y: ["0%", "-30%", "10%", "-20%"],
          background: [
            "radial-gradient(circle at center, #3B82F6, transparent)",
            "radial-gradient(circle at center, #2563EB, transparent)",
            "radial-gradient(circle at center, #1E3A8A, transparent)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          times: [0, 0.33, 0.66, 1],
        }}
        style={{
          right: "-15%",
          top: "-15%",
        }}
      />

      {/* Bottom right animated blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        animate={{
          x: ["0%", "-20%", "10%", "-5%"],
          y: ["0%", "30%", "-10%", "20%"],
          background: [
            "radial-gradient(circle at center, #2563EB, transparent)",
            "radial-gradient(circle at center, #1E3A8A, transparent)",
            "radial-gradient(circle at center, #3B82F6, transparent)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          times: [0, 0.33, 0.66, 1],
        }}
        style={{
          right: "-20%",
          bottom: "-20%",
        }}
      />
    </motion.div>
  );
}