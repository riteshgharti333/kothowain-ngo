import type { Metadata } from "next";
import { Fraunces, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StoryCards from "./components/StoryCards";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kothowain — Together, We Can End Hunger",
  description:
    "Vulnerable People's Development Organization working across the Chittagong Hill Tracts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${poppins.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        {children}
        <StoryCards />
        <Footer />
      </body>
    </html>
  );
}
