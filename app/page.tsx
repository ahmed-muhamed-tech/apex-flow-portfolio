"use client";
import IntroLogo from "@/components/ui/IntroLogo";
import About from "@/components/ui/sections/About";
import Footer from "@/components/ui/sections/Footer";
import Hero from "@/components/ui/sections/Hero";
import Projects from "@/components/ui/sections/Projects";
import { duration } from "@/utils/animation";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="relative bg-background ">
      <Hero />
      <Projects />
      <About />
      <Footer isHomePage={true} />
    </div>
  );
}
