import React from "react";
import Nav from "../components/Nav";
import Footeer from "../components/Footeer";

const page = () => {
  return (
    <div>
      <Nav />
      <h3 className="text-center bg-orange-600 text-6xl font-extrabold">
        {" "}
        EOI lodgment
        <br />
        Comming Soon !
      </h3>

      <Footeer />
    </div>
  );
};

export default page;
