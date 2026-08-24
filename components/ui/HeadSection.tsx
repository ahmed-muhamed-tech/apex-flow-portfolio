import { duration } from "@/utils/animation";
import { motion } from "motion/react";

export default function HeadSection({ text }: { text: string }) {
  return (
    <motion.h2
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-4xl lg:text-5xl xl:text-6xl font-syne text-foreground w-fit py-2 mx-auto uppercase font-bold mb-12 relative"
    >
      <span>{text}</span>

      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: duration,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="absolute left-0 h-2 rounded-md bg-primary bottom-0"
      />
    </motion.h2>
  );
}
