import { skills } from "@/utils/data";
import Image from "next/image";

export default function Skills() {
  const widthAndHightIcons = 40;
  return (
    <div className="bg-surface border border-border p-4 rounded-2xl row-span-2 col-span-1">
      <h3 className="text-4xl text-foreground font-semibold uppercase">
        Skills
      </h3>

      <div className="grid grid-cols-6 gap-2 mt-6">
        {skills.map(({ title, icon, id }) => (
          <div
            key={id}
            className="bg-surface border border-border flex justify-center items-center p-4 rounded-2xl"
          >
            <Image
              src={icon}
              alt={title}
              width={widthAndHightIcons}
              height={widthAndHightIcons}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
