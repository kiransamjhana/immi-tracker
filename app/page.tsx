import Image from "next/image";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <Navbar />
      <HeroSection />
      <Features />
    </main>
  );
}
