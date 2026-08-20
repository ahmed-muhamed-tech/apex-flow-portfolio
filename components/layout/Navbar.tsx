"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const changeStateNav = () => setIsOpenNav(!isOpenNav);

  return (
    <nav className="fixed left-0 right-0 w-full z-50 backdrop-blur-xl rounded-2xl border border-border shadow shadow-shadow-primary bg-surface/40">
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-lg lg:text-2xl font-bold  uppercase tracking-wide"
        >
          <h2>
            <span className="text-foreground">
              {/* تأثير خاص على حرف A */}
              <span className="font-extrabold  inline-block -rotate-6 scale-110">
                A
              </span>
              pex-
            </span>
            <span className="text-primary">
              {/* تأثير خاص على حرف F */}
              <span className="font-extrabold  inline-block underline decoration-wavy">
                F
              </span>
              low
            </span>
          </h2>
        </Link>

        {/* NAV LINKS MOBILE */}
        <div
          className={`${isOpenNav ? "fixed" : "hidden"} lg:hidden  h-dvh w-full inset-0  backdrop-blur-2xl bg-surface   flex flex-col  justify-center items-center gap-8  border border-border rounded-2xl py-2 px-4`}
        >
          <span
            onClick={changeStateNav}
            className="absolute right-2 top-2 text-2xl z-50 text-foreground bg-surface/40 cursor-pointer w-12 h-12 flex justify-center items-center rounded-full"
          >
            X
          </span>

          <Link href="/" className="py-1 px-2 rounded-md relative group">
            <span className="text-foreground text-xl">Home</span>
            <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-primary rounded-md -bottom-1 transition-all duration-200"></span>
          </Link>

          <Link href="/" className="py-1 px-2 rounded-md relative group">
            <span className="text-foreground text-xl">About</span>
            <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-primary rounded-md -bottom-1 transition-all duration-200"></span>
          </Link>

          <Link href="/" className="py-1 px-2 rounded-md relative group">
            <span className="text-foreground text-xl">Projects</span>
            <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-primary rounded-md -bottom-1 transition-all duration-200"></span>
          </Link>

          <Link href="/" className="py-1 px-2 rounded-md relative group">
            <span className="text-foreground text-xl">Contact</span>
            <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-primary rounded-md -bottom-1 transition-all duration-200"></span>
          </Link>
        </div>
        {/* NAV LINKS PC */}
        <div
          className={`hidden lg:relative lg:flex lg:flex-row items-center gap-8 lg:bg-surface border border-border rounded-2xl justify-between py-2 px-4`}
        >
          <Link href="/" className="py-1 px-2 rounded-md relative group">
            <span className="text-foreground text-xl">Home</span>
            <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-primary rounded-md -bottom-1 transition-all duration-200"></span>
          </Link>

          <Link href="/" className="py-1 px-2 rounded-md relative group">
            <span className="text-foreground text-xl">About</span>
            <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-primary rounded-md -bottom-1 transition-all duration-200"></span>
          </Link>

          <Link href="/" className="py-1 px-2 rounded-md relative group">
            <span className="text-foreground text-xl">Projects</span>
            <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-primary rounded-md -bottom-1 transition-all duration-200"></span>
          </Link>

          <Link href="/" className="py-1 px-2 rounded-md relative group">
            <span className="text-foreground text-xl">Contact</span>
            <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-primary rounded-md -bottom-1 transition-all duration-200"></span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button text="Resume CV" background="bg-primary" backgroundHover="bg-primary-hover"/>

          <button
            onClick={changeStateNav}
            className="lg:hidden flex flex-col group gap-2 w-10 md:w-12 lg:w-16 cursor-pointer"
          >
            <span className="w-full h-1 lg:h-2 bg-primary rounded-md"></span>
            <span className="w-[80%] h-1 lg:h-2 bg-primary rounded-md self-end group-hover:w-full transition-all duration-200"></span>
            <span className="w-[60%] h-1 lg:h-2 bg-primary rounded-md self-end group-hover:w-full transition-all duration-200"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
