import React from 'react';

const ThreeClickSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-8 w-full max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold text-center">What makes us so good?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left Section */}
        <div className="flex flex-col p-4 rounded-lg space-y-4 bg-[#FFF5F1] items-center">
          <img src="/assets/images/frame-123.png" alt="Comparison" className="h-max" />
          <p className="text-center font-semibold text-gray-700">
            Finds and compares the best deals
          </p>
          <p className="text-center text-gray-500">
            Our advanced algorithm constantly scans for the lowest prices across retailers
          </p>
        </div>
        {/* Right Section */}
        <div className="flex flex-col p-4 rounded-lg space-y-4 items-center">
          <img src="/assets/images/frame-124.png" alt="Savings" className="h-max" />
          <p className="r font-semibold text-gray-700">
            Never Miss out on Savings
          </p>
          <p className="text-center text-gray-500">
            Get alerts when prices drop on items you're watching
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeClickSection;
