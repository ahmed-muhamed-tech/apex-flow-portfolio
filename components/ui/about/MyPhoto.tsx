import { duration } from "@/utils/animation";
import { motion } from "motion/react";
import Image from "next/image";

export default function MyPhoto() {
  return (
    <div className="bg-surface border border-border rounded-2xl row-span-4 col-span-1 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: duration }}
        className="h-full w-full"
      >
        <Image
          src="/myPhoto.png"
          alt="my_photo"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
