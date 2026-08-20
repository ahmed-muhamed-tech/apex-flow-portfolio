
export default function Hero() {
  return (
    <div id="home" className="h-dvh relative w-full bg-background">
      <div className="bg-primary w-96 h-96 absolute rounded-full top-30 left-30 opacity-35"></div>
      <div className="bg-surface w-120 h-120 absolute rounded-full bottom-30 right-30 opacity-50"></div>
      <div className="w-full h-full backdrop-blur-2xl">
        <div className="constainer mx-auto flex justify-center items-center h-full relative">
          <div className="text-center">
            <h2 className="uppercase font-bold text-lg lg:text-2xl text-primary font-syne">
              Web Deleveper
            </h2>
            <h1 className="uppercase  text-foreground font-bold text-4xl lg:text-6xl">
              Ahmed Mohamed
            </h1>
            <p className="w-[95%] mx-auto md:w-[70%] lg:w-[60%] xl:w-[50%] leading-6 lg:leading-7 text-sm lg:text-lg text-muted mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae expedita non voluptates alias maxime. Voluptate nam,
              dolores quam culpa modi nesciunt iure!
            </p>

            <div className="flex items-center gap-4 mt-8 mx-auto w-fit">
             
              <button className="bg-surface shadow-2xl shadow-shadow-lg border border-border hover:bg-surface-elevated transition-all duration-200 text-foreground font-semibold py-2 px-4 rounded-md">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
