import Image from "next/image";

import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import TopSection from "./components/TopSection";
import "flowbite";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <TopSection />
      <Nav />
      <HeroSection />
      <Features />
    </main>
  );
}
