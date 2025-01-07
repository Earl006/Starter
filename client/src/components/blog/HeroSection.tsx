"use client";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[120px] flex items-center justify-center">
          <ReactTyped
            strings={[
              "Welcome to Starter Blog^1000",
              "Share Your Stories^1000",
              "Connect with Readers^1000"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            showCursor
            cursorChar="|"
          />
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Discover stories, ideas, and expertise from writers on any topic.
        </motion.p>
      </div>
    </motion.section>
  );
}