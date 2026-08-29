
import { socialMedia } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
export default function SocialMedia() {
  const widthAndHightIcons = 40;
  return (
    <div className="bg-surface border flex flex-col border-border rounded-2xl  p-4  row-span-2 col-span-1">
      <h3 className="text-4xl text-foreground font-semibold uppercase">
        Social Media
      </h3>

      <div className="grid grid-cols-2 gap-2 mt-6 flex-1">
        {socialMedia.map(({ title, href, icon, id }, index) => (
          <Link
            target="_black"
            key={id}
            href={href}
            className="bg-surface-nested border shadow shadow-shadow border-border hover:bg-surface-nested-hover transition-all duration-200 group flex justify-center items-center p-4 rounded-2xl"
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
                className="group-hover:scale-110 transition-all duration-200"
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
