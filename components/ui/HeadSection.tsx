export default function HeadSection({ text }: { text: string }) {
  return (
    <h2 className="text-6xl font-syne text-foreground w-fit py-2 mx-auto uppercase font-bold mb-12 relative">
      <span>{text}</span>
      <span className="absolute left-0 w-full h-2 rounded-md bg-primary bottom-0"></span>
    </h2>
  );
}
