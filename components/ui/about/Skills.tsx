import { skills } from "@/utils/data";
import Image from "next/image";
import { motion } from "motion/react";
import { duration } from "@/utils/animation";
export default function Skills() {
  const widthAndHightIcons = 40;
  return (
    <div className="bg-surface border border-border p-4 rounded-2xl row-span-2 col-span-1">
      <h3 className="text-4xl text-foreground font-semibold uppercase">
        Skills
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 mt-6">
        {skills.map(({ title, icon, id }, index) => (
          <div
            key={id}
            className="bg-surface border border-border flex justify-center items-center p-4 rounded-2xl"
          >
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={icon}
                alt={title}
                width={widthAndHightIcons}
                height={widthAndHightIcons}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
