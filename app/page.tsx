import Image from "next/image";
import "flowbite";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import TopSection from "./components/TopSection";
import Footeer from "./components/Footeer";
import LatestBlog from "./components/LatestBlog";
import MigrationNews from "./components/MIgrationNews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <Nav />
      <HeroSection />
      <Features />
      <LatestBlog />

      <MigrationNews />
      <Footeer />
    </main>
  );
}
