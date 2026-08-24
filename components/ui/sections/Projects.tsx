"use client";
import HeadSection from "../HeadSection";
import Button from "../Button";
import { useState } from "react";
import { projects } from "../../../utils/data";
import CardProject from "../CardProject";
import { motion } from "motion/react";
import { duration } from "@/utils/animation";
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
          {/* HEAD SECTION */}
          <HeadSection text="Projects" />

          {/* CARDS PROJECTS */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-${
              4 * (projects.length / 2)
            } lg:h-${100 * (projects.length / 2)} gap-4`}
          >
            {viewProjects.map(
              ({ title, subTitle, skills, view, code, details, id }, index) => (
                <motion.div
                  key={id}
                  initial={{
                    y: 80,
                    opacity: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="col-span-2 row-span-4 flex flex-col justify-between bg-surface rounded-2xl p-6"
                >
                  <CardProject
                    title={title}
                    subTitle={subTitle}
                    skills={skills}
                    view={view}
                    code={code}
                    details={details}
                  />
                </motion.div>
              ),
            )}
          </div>

          {/* BUTTON SHOW MORE PROJECTS */}
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
