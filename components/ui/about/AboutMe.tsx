import { aboutMe } from "@/utils/data";

export default function AboutMe() {
  return (
    <div className="bg-surface border border-border p-4 rounded-2xl row-span-4 col-span-1">
      <h3 className="text-4xl text-foreground font-semibold uppercase">
        About Me
      </h3>

      <div className="text-sm xl:text-lg text-foreground mt-6 leading-7 flex flex-col gap-2">
        {aboutMe.map((about, index) => (
          <h4
            key={index}
            className="border border-border rounded-md py-4 px-4 bg-surface hover:bg-surface-elevated hover:ml-4 transition-all duration-200"
          >
            {about}
          </h4>
        ))}
      </div>
    </div>
  );
}
