"use client";

import NameAndDescription from "@/components/ui/detailsProject/NameAndDescription";
import ProjectDetails from "@/components/ui/detailsProject/ProjectDetails";
import TimeLineProject from "@/components/ui/detailsProject/TimeLineProject";
import Tools from "@/components/ui/detailsProject/Tools";
import Footer from "@/components/ui/sections/Footer";
import { projects } from "@/utils/data";
import { use } from "react";

type TimeLine = {
  id: string;
  title: string;
  description: string;
};

type ProjectDetails = {
  label: string;
  value: string;
};

type CardProjectProps = {
  id: string;
  title: string;
  subTitle: string;
  tools: string[];
  view: string;
  code: string;
  timeLine: TimeLine[];
  projectDetails: ProjectDetails[];
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id: idParams } = use(params);

  const currentProject = projects.find(({ id }) => id === idParams);
  if (!currentProject) return;
  const { title, subTitle, tools, timeline, projectDetails, code, view } =
    currentProject;

  return (
    <div className="min-h-dvh w-full bg-background pt-22 lg:pt-32 xl:pt-42 ">
      <div className="container mx-auto flex h-full items-center justify-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
            {/* NAME & DESCRIPTION */}
            <div className="col-span-2">
              <NameAndDescription title={title} subTitle={subTitle} />
            </div>

            {/* TOOLS */}
            <div className="col-span-1">
              <Tools tools={tools} />
            </div>
          </div>

          <div className="bg-border w-full rounded-full h-1 my-8"></div>

          <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
            <div className="relative col-span-2">
              <TimeLineProject timeline={timeline} />
            </div>

            <div className="col-span-1 mt-6 lg:mt-0">
              <ProjectDetails
                projectDetails={projectDetails}
                code={code}
                view={view}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
