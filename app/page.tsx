import About from "@/components/ui/sections/About"
import Hero from "@/components/ui/sections/Hero";
import Projects from "@/components/ui/sections/Projects";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Projects/>
    </div>
  );
}
