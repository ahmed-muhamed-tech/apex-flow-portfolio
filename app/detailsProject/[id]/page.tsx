"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    id: 1,
    title: "Project Overview",
    description:
      "Understanding the project requirements, goals, target users, and the main problems the application needs to solve.",
  },
  {
    id: 2,
    title: "Planning & Architecture",
    description:
      "Planning the application structure, defining the main features, organizing the data flow, and choosing the right architecture.",
  },
  {
    id: 3,
    title: "Frontend Development",
    description:
      "Building the user interface with reusable components, responsive layouts, and a clean structure that is easy to maintain.",
  },
  {
    id: 4,
    title: "Backend & Database",
    description:
      "Connecting the application with the backend, handling authentication, managing data, and integrating the database.",
  },
  {
    id: 5,
    title: "Testing & Optimization",
    description:
      "Testing the main features, fixing issues, improving performance, and making sure the application behaves consistently.",
  },
  {
    id: 6,
    title: "Final Result",
    description:
      "Putting everything together into a complete application that is functional, maintainable, and ready to be used.",
  },
];
// import { use } from "react";
const tools = [
  "Next.js",
  "TypeScript",
  "React",
  "Supabase",
  "PostgreSQL",
  "Tailwind",
  "Zod",
  "Git",
];

export default  function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const { id } = use(params);
  // console.log(id);
  const [activeStep, setActiveStep] = useState(1);

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          const step = Number(
            visibleEntries[0].target.getAttribute("data-step"),
          );

          setActiveStep(step);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0,
      },
    );

    stepRefs.current.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-dvh w-full bg-background pt-22 lg:pt-32 xl:pt-42 py-12">
      <div className="container mx-auto flex h-full items-center justify-center">
        <div className="w-full">
          {/* =========================
              PROJECT HEADER
          ========================= */}

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* NAME & DESCRIPTION */}
            <div className="col-span-2">
              <h2 className="font-syne text-3xl font-bold uppercase text-foreground lg:text-4xl xl:text-6xl">
                Book Store
              </h2>

              <p className="mt-4 w-full text-lg leading-6 text-muted md:leading-7 lg:w-[90%] lg:text-xl lg:leading-8 xl:text-2xl">
                A modern book store application designed to provide users with a
                simple and smooth experience for discovering books, browsing
                products, and managing their purchases.
              </p>
            </div>

            {/* TOOLS */}

            <div className="col-span-1 rounded-2xl border border-border bg-surface p-6 shadow shadow-shadow">
              <h4 className="mb-4 font-syne text-xl font-semibold uppercase text-foreground lg:text-2xl xl:text-3xl">
                Tools
              </h4>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-center rounded-lg border border-border bg-surface-nested px-2 py-4 text-center text-sm text-foreground transition-colors hover:bg-surface-elevated"
                  >
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================
              TIMELINE
          ========================= */}

          <div className="relative mt-24">
            {/* TIMELINE LINE */}

            <div className="absolute left-3.75 top-0 h-full w-1 rounded-full bg-surface-elevated">
              <div
                className="w-full rounded-full bg-primary transition-all duration-500"
                style={{
                  height: `${
                    ((activeStep - 1) / (timeline.length - 1)) * 100
                  }%`,
                }}
              />
            </div>

            {/* TIMELINE ITEMS */}

            <div className="flex flex-col gap-12">
              {timeline.map((item, index) => {
                const isActive = activeStep === item.id;
                const isCompleted = activeStep > item.id;

                return (
                  <div
                    key={item.id}
                    ref={(element) => {
                      stepRefs.current[index] = element;
                    }}
                    data-step={item.id}
                    className="relative pl-12 border"
                  >
                    {/* NUMBER */}

                    <div
                      className={`
                        absolute left-0 top-0 z-10
                        flex h-8 w-8 items-center justify-center
                        rounded-full border
                        font-bold
                        transition-all duration-500

                        ${
                          isActive
                            ? "scale-110 border-primary bg-primary text-foreground shadow-lg shadow-primary"
                            : isCompleted
                              ? "border-primary bg-primary/70 text-foreground"
                              : "border-border bg-surface text-muted"
                        }
                      `}
                    >
                      {item.id}
                    </div>

                    {/* CONTENT */}

                    <div
                      className={`
                        transition-all duration-500

                        ${isActive ? "translate-x-1 opacity-100" : "opacity-70"}
                      `}
                    >
                      <h5
                        className={`
                          font-syne text-lg font-semibold uppercase
                          transition-colors duration-300
                          lg:text-2xl xl:text-3xl

                          ${isActive ? "text-foreground" : "text-muted"}
                        `}
                      >
                        {item.title}
                      </h5>

                      <p className="mt-2 max-w-4xl text-sm leading-6 text-muted lg:text-lg lg:leading-7 xl:text-2xl xl:leading-8">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-background"></div>
    </div>
  );
}
