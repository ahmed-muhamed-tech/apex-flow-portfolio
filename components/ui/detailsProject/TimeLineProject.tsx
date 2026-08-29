import { useEffect, useRef, useState } from "react";

type TimeLine = {
  id: number;
  title: string;
  description: string;
};

export default function TimeLineProject({ timeline }: {timeline: TimeLine[]}) {
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
    <>
      {/* TIMELINE LINE */}

      <div className="absolute left-3.75 top-0 h-full w-1 rounded-full bg-surface-elevated">
        <div
          className="w-full rounded-full bg-primary transition-all duration-500"
          style={{
            height: `${((activeStep - 1) / (timeline.length - 1)) * 100}%`,
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
    </>
  );
}
