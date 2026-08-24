import Link from "next/link";
import Button from "./Button";

type CardProjectProps = {
  title: string;
  subTitle: string;
  skills: string[];
  view: string;
  code: string;
  details: string;
};

export default function CardProject({
  title,
  subTitle,
  skills,
  view,
  code,
  details,
}: CardProjectProps) {
  return (
    <>
      <div>
        <h4 className="text-xl  lg:text-2xl xl:text-3xl font-semibold text-foreground uppercase">
          {title}
        </h4>

        <p className="text-sm lg:text-lg xl:text-xl leading-8 text-muted mt-4">
          {subTitle}...
        </p>

        <div className="flex flex-wrap mt-4 mb-8 gap-2 lg:gap-4">
          {skills.map((skill) => (
            <h4
              key={skill}
              className="uppercase text-xs lg:text-sm py-1 px-2 lg:py-2 lg:px-4 bg-surface-nested/50 rounded-xl lg:rounded-2xl border border-border text-foreground"
            >
              {skill}
            </h4>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={view}>
            <Button text="View" />
          </Link>
          <Link href={code}>
            <Button text="Code" />
          </Link>
        </div>

        <Link href={details}>
          <Button text="Details" background="bg-primary" />
        </Link>
      </div>
    </>
  );
}
