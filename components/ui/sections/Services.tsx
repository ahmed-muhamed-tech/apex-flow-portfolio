import HeadSection from "../HeadSection";

export default function Services() {
  return (
    <div
      id="services"
      className="scroll-mt-12 lg:scroll-mt-24 w-full bg-background py-12"
    >
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-full">
          <HeadSection text="Services" />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 gap-4"></div>
        </div>
      </div>
    </div>
  );
}
