import React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons from Font Awesome

const TopSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-0 bg-gray-200">
        <div className="">
          <div className="flex  flex-col justify-start text-zinc-950 mt-1">
            {/* Search input field */}

            {/* <div className="logo ">
              {" "}
              <Image src="/log.png" alt="logo" width={300} height={300} />
            </div> */}
          </div>
        </div>

        <div className="">
          <div className="flex justify-end items-center mt-8 mr-3 ">
            {" "}
            {/* Added items-center class to vertically center the icons */}
            {/* Added a label for clarity */}
            <FaTwitter className="text-black-500 hover:text-blue-700 cursor-pointer text-lg" />{" "}
            {/* Added text-lg for larger size */}
            <FaFacebook className="text-blue-500 hover:text-blue-700 cursor-pointer ml-2 text-lg" />{" "}
            {/* Added text-lg for larger size */}
            <FaInstagram className="text-red-500 hover:text-blue-700 cursor-pointer ml-2 text-lg" />{" "}
            {/* Added text-lg for larger size */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
