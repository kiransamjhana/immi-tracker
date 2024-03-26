import Image from "next/image";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import TopSection from "./components/TopSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <TopSection />
      <Navbar />
      <HeroSection />
      <Features />
    </main>
  );
}
