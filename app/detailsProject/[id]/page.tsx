"use client";


import NameAndDescription from "@/components/ui/detailsProject/NameAndDescription";
import ProjectDetails from "@/components/ui/detailsProject/ProjectDetails";
import TimeLineProject from "@/components/ui/detailsProject/TimeLineProject";
import Tools from "@/components/ui/detailsProject/Tools";
import Footer from "@/components/ui/sections/Footer";
// import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  // const { id } = use(params);
  // console.log(id);

  return (
    <div className="min-h-dvh w-full bg-background pt-22 lg:pt-32 xl:pt-42 ">
      <div className="container mx-auto flex h-full items-center justify-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
            {/* NAME & DESCRIPTION */}
            <div className="col-span-2">
              <NameAndDescription />
            </div>

            {/* TOOLS */}
            <div className="col-span-1">
              <Tools />
            </div>
          </div>

          <div className="bg-border w-full rounded-full h-1 my-8"></div>

          <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
            <div className="relative col-span-2">
              <TimeLineProject />
            </div>

            <div className="col-span-1 mt-6 lg:mt-0">
              <ProjectDetails />
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
