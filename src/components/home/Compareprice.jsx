import React from "react";

const Card = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 rounded-lg">
      <img src={img} alt="Search Icon" className="h-40" />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-center p-5">{desc}</p>
      </div>
    </div>
  );
};

const ComparePrice = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-8 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center">
        GET INSTANT PRICE COMPARISON ON YOUSAVE
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <Card
          img="/assets/images/online-search-7990121-6407344 1.png"
          title="Search"
          desc="Search through 2 billion products"
        />
        <Card
          img="/assets/images/8102698 2.png"
          title="Compare"
          desc="Compare prices from the most trusted sites"
        />
        <Card
          img="/assets/images/online-shopping-3d-icon-free-png 1.png"
          title="Save"
          desc="Find the best deal and save big"
        />
      </div>
    </div>
  );
};

export default ComparePrice;
