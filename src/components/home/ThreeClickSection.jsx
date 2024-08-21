import React from "react";
import Reason1 from "resources/images/home/reason1.webp";
import Reason2 from "resources/images/home/reason2.webp";

const ThreeClickSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold text-center">What makes us so good?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Left Section */}
        <div className="flex flex-col p-4 bg-[#FFF5F1] items-center px-8 rounded-l-3xl mx-8 lg:mx-0">
          <img
            src={Reason1}
            alt="Comparison"
            className="w-full h-[250px] md:h-[350px]"
          />
          <p className="w-full font-semibold text-gray-800 pt-4 text-2xl">
            Finds and compares the best deals
          </p>
          <p className="w-full text-gray-800">
            Our advanced algorithm constantly scans for the lowest prices across
            retailers
          </p>
        </div>
        {/* Right Section */}
        <div className="flex flex-col p-4 bg-white items-center px-8 rounded-r-3xl border-[1px] border-l-0 border-[#E6E6E6] mx-8 lg:mx-0  ">
          <img
            src={Reason2}
            alt="Savings"
            className="w-full h-[250px] md:h-[350px]"
          />
          <p className="w-full font-semibold text-gray-800 pt-4 text-2xl">
            Never Miss out on Savings
          </p>
          <p className="w-full text-gray-800">
            Get alerts when prices drop on items you're watching
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeClickSection;
