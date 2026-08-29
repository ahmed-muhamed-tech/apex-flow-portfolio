
export default function Tools({tools}: {tools: string[]}) {
  return (
    <div className=" rounded-2xl mt-6 lg:mt-0 border border-border bg-surface p-6 shadow shadow-shadow">
      <h4 className="mb-4 font-syne text-xl font-semibold uppercase text-foreground lg:text-2xl xl:text-3xl">
        Tools
      </h4>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
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
  );
}
