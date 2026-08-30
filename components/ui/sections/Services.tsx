import { services } from "@/utils/data";
import HeadSection from "../HeadSection";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const [activeStep, setActiveStep] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentElement = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (currentElement.length > 0)
          setActiveStep(
            Number(currentElement[0].target.getAttribute("data-step")),
          );
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0,
      },
    );

    serviceRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="w-full scroll-mt-12 bg-background py-12 lg:scroll-mt-24"
    >
      <div className="container mx-auto flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <HeadSection text="Services" />

          <div className="relative mt-12">
            {/* =========================
                TIMELINE
            ========================= */}

            {/* Desktop Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-surface md:block">
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: `${(activeStep / (services.length - 1)) * 100}%`,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="w-full rounded-full bg-primary"
              />
            </div>

            {/* Mobile Line */}
            <div className="absolute left-3 top-0 h-full w-1 rounded-full bg-surface md:hidden">
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: `${(activeStep / (services.length - 1)) * 100}%`,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="w-full rounded-full bg-primary"
              />
            </div>

            {/* =========================
                SERVICES
            ========================= */}

            <div className="flex flex-col gap-8 md:gap-12">
              {services.map((service, index) => {
                const isLeft = index % 2 === 0;
                const isComplete = activeStep > index;
                const isCurrent = activeStep == index;

                return (
                  <div
                    ref={(element) => {
                      serviceRefs.current[index] = element;
                    }}
                    data-step={index}
                    key={service.id}
                    className="relative grid grid-cols-[auto_1fr] gap-5 md:grid-cols-2 md:gap-8"
                  >
                    {/* =========================
                        MOBILE NUMBER
                    ========================= */}

                    <div
                      className={`absolute left-0 top-0 z-10 flex h-7 w-7 items-center justify-center rounded-full border  ${
                        isCurrent
                          ? "scale-110 border-primary bg-primary text-foreground shadow-lg shadow-primary"
                          : isComplete
                            ? "border-primary bg-primary/70 text-foreground opacity-70"
                            : "border-border bg-surface text-muted opacity-25"
                      } text-xs font-bold shadow-lg shadow-primary/30 md:hidden`}
                    >
                      {service.id}
                    </div>

                    {/* =========================
                        DESKTOP LEFT
                    ========================= */}

                    {isLeft ? (
                      <>
                        <div
                          className={`${isCurrent ? " border-border bg-surface scale-100" : isComplete ? " border-border/70 bg-surface/70 scale-95" : " border-border/20 bg-surface/20 scale-95"} hidden rounded-2xl border p-5 transition-all duration-300 hover:bg-surface-elevated md:block lg:p-6`}
                        >
                          <span className="text-xs font-semibold tracking-wider text-primary sm:text-sm">
                            {service.id}
                          </span>

                          <h3
                            className={`mb-2 mt-1 font-syne text-xl font-semibold uppercase ${isCurrent ? "text-foreground" : isComplete ? "text-foreground/70" : "text-foreground/30"} sm:text-2xl lg:text-3xl`}
                          >
                            {service.title}
                          </h3>

                          <p
                            className={`text-sm leading-6 ${isCurrent ? "text-muted" : isComplete ? "text-muted/70" : "text-muted/30"}   sm:text-base sm:leading-7 lg:text-lg lg:leading-8`}
                          >
                            {service.description}
                          </p>
                        </div>

                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />

                        <div
                          className={`${isCurrent ? " border-border bg-surface scale-100" : isComplete ? " border-border/70 bg-surface/70 scale-95" : " border-border/20 bg-surface/20 scale-95"} hidden rounded-2xl border p-5 transition-all duration-300 hover:bg-surface-elevated md:block lg:p-6`}
                        >
                          <span className="text-xs font-semibold tracking-wider text-primary sm:text-sm">
                            {service.id}
                          </span>

                          <h3
                            className={`mb-2 mt-1 font-syne text-xl font-semibold uppercase ${isCurrent ? "text-foreground" : isComplete ? "text-foreground/70" : "text-foreground/30"} sm:text-2xl lg:text-3xl`}
                          >
                            {service.title}
                          </h3>

                          <p
                            className={`text-sm leading-6 ${isCurrent ? "text-muted" : isComplete ? "text-muted/70" : "text-muted/30"}   sm:text-base sm:leading-7 lg:text-lg lg:leading-8`}
                          >
                            {service.description}
                          </p>
                        </div>
                      </>
                    )}

                    {/* =========================
                        MOBILE CARD
                    ========================= */}

                    <div
                      className={`${isCurrent ? " border-border bg-surface scale-100" : isComplete ? " border-border/70 bg-surface/70 scale-95" : " border-border/20 bg-surface/20 scale-95"} col-start-2 rounded-2xl border p-4 transition-all duration-300 hover:bg-surface-elevated sm:p-5 md:hidden`}
                    >
                      <span className="text-xs font-semibold tracking-wider text-primary sm:text-sm">
                        {service.id}
                      </span>

                      <h3
                        className={`mb-2 mt-1 font-syne text-xl font-semibold uppercase ${isCurrent ? "text-foreground" : isComplete ? "text-foreground/70" : "text-foreground/30"} sm:text-2xl lg:text-3xl`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`text-sm leading-6 ${isCurrent ? "text-muted" : isComplete ? "text-muted/70" : "text-muted/30"}   sm:text-base sm:leading-7 lg:text-lg lg:leading-8`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
