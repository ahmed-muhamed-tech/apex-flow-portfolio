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
      className={`${background ? `${background} ${backgroundHover}` : "bg-surface hover:bg-surface-elevated"} shadow-2xl shadow-shadow-primary border border-border  transition-all duration-200 text-foreground font-semibold py-2 px-4 rounded-md`}
    >
      {text}
    </button>
  );
}
