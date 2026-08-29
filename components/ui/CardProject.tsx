import Link from "next/link";
import Button from "./Button";

type CardProjectProps = {
  id: string;
  title: string;
  subTitle: string;
  tools: string[];
  view: string;
  code: string;
};

export default function CardProject({
  id,
  title,
  subTitle,
  tools,
  view,
  code,
}: CardProjectProps) {
  return (
    <>
      <div>
        <h4 className="text-xl  lg:text-2xl xl:text-3xl font-semibold text-foreground uppercase">
          {title}
        </h4>

        <p className="text-sm lg:text-lg xl:text-xl leading-8 text-muted mt-4">
          {subTitle.split(" ").slice(0, 50).join(" ")}
          {subTitle.split(" ").length > 50 ? "..." : ""}
        </p>

        <div className="flex flex-wrap mt-4 mb-8 gap-2 lg:gap-4">
          {tools.map((tool) => (
            <h4
              key={tool}
              className="uppercase text-xs lg:text-sm py-1 px-2 lg:py-2 lg:px-4 bg-surface-nested/50 rounded-xl lg:rounded-2xl border border-border text-foreground"
            >
              {tool}
            </h4>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a target="_blank" href={view}>
            <Button text="View" />
          </a>
          <a target="_blank" href={code}>
            <Button text="Code" />
          </a>
        </div>

        <Link href={`/detailsProject/${id}`}>
          <Button text="Details" background="bg-primary" />
        </Link>
      </div>
    </>
  );
}
