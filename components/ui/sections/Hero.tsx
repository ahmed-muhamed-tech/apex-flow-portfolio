import { duration } from "@/utils/animation";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div
      id="home"
      className="h-dvh relative w-full bg-background overflow-hidden"
    >
      <div className="bg-primary w-44 h-44 lg:w-96 lg:h-96 absolute rounded-full top-30 left-30 opacity-35" />

      <div className="bg-surface w-44 h-44 lg:w-96 lg:h-96 absolute rounded-full bottom-30 right-30 opacity-50" />

      <div className="w-full h-full backdrop-blur-2xl">
        <div className="container mx-auto flex justify-center items-center h-full relative">
          <div className="text-center">
            {/* Small Title */}
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: duration,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="uppercase font-bold text-xs mg:text-lg lg:text-xl text-primary font-syne"
            >
              Frontend Developer — React & Next.js
            </motion.h2>

            {/* Name */}
            <motion.h1
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: duration,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="uppercase text-foreground font-bold text-4xl lg:text-6xl"
            >
              Ahmed Mohamed
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: duration,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[95%] mx-auto md:w-[70%] lg:w-[60%] xl:w-[50%] leading-6 lg:leading-7 text-sm lg:text-lg text-muted mt-2"
            >
              I build fast, precise web interfaces using React and Next.js, with
              a strong focus on performance and clean, scalable code — from
              concept to delivery with high technical quality.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: duration,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-4 mt-8 mx-auto w-fit"
            >
              <button
               
                className="bg-surface shadow-2xl shadow-shadow-lg border border-border hover:bg-surface-elevated transition-all duration-200 text-foreground font-semibold py-2 px-4 rounded-md"
              >
                View My Work
              </button>
              <button
               
                className="bg-surface shadow-2xl shadow-shadow-lg border border-border hover:bg-surface-elevated transition-all duration-200 text-foreground font-semibold py-2 px-4 rounded-md"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
