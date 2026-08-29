export default function NameAndDescription({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <>
      <h2 className="font-syne text-3xl font-bold uppercase text-foreground lg:text-4xl xl:text-6xl">
        {title}
      </h2>

      <p className="mt-4 w-full text-lg leading-6 text-muted md:leading-7 lg:w-[90%] lg:text-xl lg:leading-8 xl:text-2xl">
        {subTitle}
      </p>
    </>
  );
}
