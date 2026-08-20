import About from "@/components/ui/sections/About"
import Footer from "@/components/ui/sections/Footer";
import Hero from "@/components/ui/sections/Hero";
import Projects from "@/components/ui/sections/Projects";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Projects/>
      <About />
      <Footer/>
    </div>
  );
}
