import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Syne } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import ClientLayout from "@/components/layout/ClientLayout";

// 1. إعداد الخطوط
const inter = Inter({ subsets: ["latin"] });

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Mohamed - Front End Developer",
  description: "Portfolio showcasing my projects built with Next.js, React.js, and TypeScript.",
  openGraph: {
    title: "Ahmed Mohamed - Front End Developer",
    description: "Portfolio showcasing my projects built with Next.js, React.js, and TypeScript.",
    url: "https://apex-flow-portfolio.vercel.app",
    siteName: "Apex-Flow",
    images: [
      {
        url: "https://apex-flow-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mohamed - Front End Developer",
    description: "Portfolio showcasing my projects built with Next.js, React.js, and TypeScript.",
    images: ["https://apex-flow-portfolio.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` scrollbar-none  ${geistSans.variable} ${geistMono.variable} ${syne.variable} ${inter.className} antialiased`}
    >
      <ReactLenis root>
        <body>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </ReactLenis>
    </html>
  );
}
