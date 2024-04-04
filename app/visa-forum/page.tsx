import React from "react";
import Nav from "../components/Nav";
import Footeer from "../components/Footeer";

const page = () => {
  return (
    <div className="bg-red-400">
      <Nav />
      <h1 className="text-center text-6xl text-stone-900"> Coming Soon</h1>
      <Footeer />
    </div>
  );
};

export default page;
