"use client";
import Link from "next/link";
import HeadSection from "../HeadSection";
import Button from "../Button";
import { useState } from "react";

const projects = [
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },

  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
  {
    title: "Book Store",
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque praesentium excepturi soluta, fuga voluptatibus sequi!
                  NostrumLorem ipsum dolor sit amet consectetur adipisicing
                  elit. Cumque praesentium excepturi soluta, fuga voluptatibus
                  sequi! Nostrum Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque praesentium excepturi...`,
    skills: ["supabase", "next js", "tailwind", "postgress"],
    view: "",
    code: "",
    details: "",
  },
];

export default function Projects() {
  const [showMore, setShowMore] = useState(4);
  const viewProjects = projects.slice(0, showMore);
  return (
    <div
      id="projects"
      className="scroll-mt-12 lg:scroll-mt-24  min-h-dvh w-full bg-background py-12"
    >
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-full">
          <HeadSection text="Projects" />
          <div
            className={`grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-${4 * (projects.length / 2)} lg:h-${100 * (projects.length / 2)} gap-4`}
          >
            {viewProjects.map(
              ({ title, subTitle, skills, view, code, details }, index) => (
                <div
                  key={index}
                  className="col-span-2 row-span-4 flex flex-col justify-between bg-surface rounded-2xl p-6"
                >
                  <div>
                    <h4 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-foreground uppercase">
                      {title}
                    </h4>

                    <p className="text-sm lg:text-lg xl:text-xl leading-8 text-muted mt-4">
                      {subTitle}...
                    </p>

                    <div className="grid grid-cols-2 w-fit lg:grid-cols-6 my-4 gap-2">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          className="uppercase min-w-25 lg:min-w-30 text-center text-xs lg:text-sm w-fit py-1 px-2  lg:py-2 lg:px-4 bg-surface-nested rounded-xl lg:rounded-2xl border border-border text-foreground"
                        >
                          {skill}
                        </div>
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
                </div>
              ),
            )}
          </div>
          <div
            onClick={() => {
              setShowMore(showMore + 4);
            }}
            className={`${showMore >= projects.length && "hidden"} mt-12 mx-auto w-fit`}
          >
            <Button text="Show More" />
          </div>
        </div>
      </div>
    </div>
  );
}
