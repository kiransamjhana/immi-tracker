import React from "react";
import { Button, Card } from "flowbite-react";

const PointsCalculator = () => {
  return (
    <div>
      <hr />
      <div className="mt-10">
        {" "}
        <p className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white text-center mb-10">
          INFORMATION
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly gap-2 mt-4 mb-32 text-center md:text-left">
        <div className="mb-4 md:mb-0 md:w-full lg:w-1/4">
          <div className="card">
            <Card className="w-full h-full">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Visa Points Calculator
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Click on the button below to calculate the visa points you can
                claim during your expression of interest lodgement(EOI).
                Remember !! you need to have a minimum of 65 points to lodge
                your EOI.
              </p>
              <Button>
                Visa Points Calculator
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Card>
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:w-full lg:w-1/4">
          <div className="New-Australia">
            <Card className="w-full h-full">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                New to Australia ??
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                As you step foot into this vibrant and diverse land,
                you&apos;sre about to embark on an adventure of a lifetime. Here
                are a few things to keep in mind as you settle into your new
                home away from home.
              </p>
              <Button>
                Learn More
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Card>
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:w-full lg:w-1/4">
          <div className="New-Australia">
            <Card className="w-full h-full">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Working Part Time !!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                We have a guide for you if you&apos;sre starting your part-time
                working journey in Australia. Get the things right from
                obtaining the tax file number to choosing the right employer.
              </p>
              <Button>
                Create TFN
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <hr className="mt-4" />
    </div>
  );
};

export default PointsCalculator;
