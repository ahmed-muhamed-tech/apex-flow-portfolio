export default function Button({
  text,
  background,
  backgroundHover,
}: {
  text: string;
  background?: string;
  backgroundHover?: string;
}) {
  return (
    <button
      className={`${background ? `${background} ${backgroundHover}` : "bg-surface-nested hover:bg-surface-nested-hover"} shadow-2xl shadow-shadow-primary border border-border  transition-all duration-200 text-sm lg:text-lg text-foreground font-semibold py-1 px-2 lg:py-2 lg:px-4 rounded-md`}
    >
      {text}
    </button>
  );
}
