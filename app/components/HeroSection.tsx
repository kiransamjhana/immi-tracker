import React from "react";
import ModalVideo from "./ModalVideo";
import VideoThumb from "../../public/hero-image-01.jpg";

const HeroSection = () => {
  return (
    <div>
      <main className="dark:bg-gray-800 bg-white relative overflow-hidden">
        <div className="bg-green dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-26">
              <h1 className="font-bebas-neue uppercase text-2xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800 mb-3">
                Disclaimer
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                This platform serves as a space for sharing personal migration
                stories and experiences for the purpose of mutual learning and
                support. It is important to note that the content provided here
                does not constitute professional migration advice. Should you
                require assistance from a qualified migration agent, we
                recommend booking an appointment with the agents available on
                this platform.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Let's get started
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Share your story
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-4/6 relative  justify-end">
              <img
                src="/students1.jpeg"
                className="max-w-m md:max-w-sm m-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
