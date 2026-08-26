import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Code2,
  ExternalLink,
  
  MessageCircle,
  UserRound,
} from "lucide-react";

const projectDetails = [
  {
    label: "Status",
    value: "Completed",
  },
  {
    label: "Started",
    value: "January 2026",
  },
  {
    label: "Completed",
    value: "February 2026",
  },
  {
    label: "Duration",
    value: "4 Weeks",
  },
  {
    label: "Project Type",
    value: "Personal",
  },
  {
    label: "Role",
    value: "Full Stack",
  },
];

export default function ProjectDetails() {
  return (
    <aside>
      <div className="sticky top-24 rounded-2xl border border-border bg-surface p-5 shadow-shadow lg:p-6">
        {/* HEADER */}
        <div className="mb-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Project Details
          </span>

          <h3 className="mt-2 font-syne text-2xl font-semibold uppercase text-foreground lg:text-3xl">
            Book Store
          </h3>
        </div>

        {/* DETAILS */}
        <div className="divide-y divide-border">
          {projectDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <span className="text-sm text-muted">{detail.label}</span>

              <span className="text-right text-sm font-medium text-foreground">
                {detail.value}
              </span>
            </div>
          ))}
        </div>

        {/* LINKS */}
        <div className="mt-7 border-t border-border pt-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Explore
          </span>

          <div className="mt-3 flex flex-col gap-2">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-surface-nested px-4 py-3 text-sm text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-surface-elevated"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="size-4 text-muted transition-colors group-hover:text-primary" />
                Live Project
              </span>

              <ArrowUpRight className="size-4 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-surface-nested px-4 py-3 text-sm text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-surface-elevated"
            >
              <span className="flex items-center gap-2">
                <Code2 className="size-4 text-muted transition-colors group-hover:text-primary" />
                Source Code
              </span>

              <ArrowUpRight className="size-4 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          </div>
        </div>

        {/* CONTACT CTA */}
        <div className="mt-6 overflow-hidden rounded-xl border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-foreground shadow-shadow-primary">
              <MessageCircle className="size-4" />
            </div>

            <div>
              <h4 className="font-semibold text-foreground">
                Have a similar project?
              </h4>

              <p className="mt-1 text-xs leading-5 text-muted">
                Let&apos;s talk about your idea and turn it into something real.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/201013681500"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-primary-hover hover:shadow-shadow-primary"
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}