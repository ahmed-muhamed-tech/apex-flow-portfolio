"use client";
import { duration } from "@/utils/animation";
import { ReactNode, useEffect, useState } from "react";
import IntroLogo from "../ui/IntroLogo";
import Navbar from "./Navbar";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background">
      {showLogo && <IntroLogo />}
      {!showLogo && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </div>
  );
}
