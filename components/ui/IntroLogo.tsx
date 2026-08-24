"use client";

import { motion } from "motion/react";
import { duration } from "@/utils/animation";
import Logo from "./Logo";

export default function IntroLogo() {
  return (
    <div className="relative  flex h-dvh w-full items-center justify-center bg-background/80 backdrop-blur-xl">
      <div className="flex items-center gap-4 lg:gap-6">
        {/* LOGO ICON */}
        <motion.img
          src="/logo.png"
          alt="Apex Flow logo"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: duration / 2,
            ease: "easeOut",
          }}
          className="w-24 object-contain lg:w-36"
        />

        {/* LOGO + PROGRESS */}
        <div className="flex flex-col gap-3 lg:gap-5">
          {/* LOGO TEXT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: duration / 2,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <Logo textSize="text-2xl lg:text-5xl" />
          </motion.div>

          {/* PROGRESS BAR */}
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-nested border border-border lg:h-2.5">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration,
                ease: "easeInOut",
              }}
              className="h-full rounded-full bg-primary shadow-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
