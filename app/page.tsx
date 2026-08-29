"use client";
import About from "@/components/ui/sections/About";
import Footer from "@/components/ui/sections/Footer";
import Hero from "@/components/ui/sections/Hero";
import Projects from "@/components/ui/sections/Projects";
import Services from "@/components/ui/sections/Services";
export default function Home() {
  return (
    <div className="relative bg-background ">
      <Hero />
      <Projects />
      <Services/>
      <About />
      <Footer isHomePage={true} />
    </div>
  );
}
