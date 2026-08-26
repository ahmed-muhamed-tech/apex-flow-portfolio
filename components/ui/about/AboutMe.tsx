import { duration } from "@/utils/animation";
import { aboutMe } from "@/utils/data";
import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <div className="bg-surface flex flex-col border border-border p-4 rounded-2xl row-span-4 col-span-1">
      <h3 className="text-4xl text-foreground font-semibold uppercase">
        About Me
      </h3>

      <div className=" text-sm xl:text-lg text-foreground mt-6  leading-7 flex flex-col justify-between flex-1 gap-2">
        {aboutMe.map((about, index) => (
          <motion.h4
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border border-border rounded-md py-4 px-4 bg-surface-nested hover:bg-surface-nested-hover hover:ml-4 transition-all duration-200"
          >
            {about}
          </motion.h4>
        ))}
      </div>
    </div>
  );
}
