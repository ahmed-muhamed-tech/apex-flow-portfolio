"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, ArrowUp } from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Logo from "../Logo";
import { socialMedia } from "@/utils/data";
import Image from "next/image";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201013681500",
    icon: MessageCircle,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto container px-6 py-16">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Building modern web applications with clean architecture, scalable
              systems, and a focus on performance.
            </p>

            <a
              href="mailto:ahmed.muhamed.tech@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              ahmed.muhamed.tech@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {navigationLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {label}

                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>

            <ul className="mt-5 space-y-3">
              {socialMedia.map(({ title, href, icon, id }) => {
                const Icon = icon;

                return (
                  <li key={id}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      
                      <Image
                        src={icon}
                        alt={title}
                        width={15}
                        height={15}
                        className="group-hover:scale-110 transition-all duration-200"
                      />
                      {title}
                      <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Have a project?
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                Let&apos;s build something great.
              </h3>
            </div>

            <a
              href="mailto:ahmed.muhamed.tech@gmail.com"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-shadow-primary"
            >
              Get in touch
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Apex Flow. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-surface transition-all group-hover:border-primary group-hover:text-primary">
              <ArrowUp className="size-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
