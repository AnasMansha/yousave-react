import React from 'react';

const ComparePrice = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-8 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center">GET INSTANT PRICE COMPARISON ON YOUSAVE</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img src="/assets/images/online-search-7990121-6407344 1.png" alt="Search Icon" className="h-40" />
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">Search</h2>
            <p className="text-center p-5">Search through 2 billion products</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img src="/assets/images/8102698 2.png" alt="Compare Icon" className="h-40" />
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">Compare</h2>
            <p className="text-center p-5">Compare prices from the most trusted sites</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img src="/assets/images/online-shopping-3d-icon-free-png 1.png" alt="Save Icon" className="h-40" />
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">Save</h2>
            <p className="text-center p-5">Find the best deal and save big</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePrice;
