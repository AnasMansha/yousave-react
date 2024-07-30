import LoginButton from "components/common/LoginButton";
import React from "react";

const Card = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 rounded-lg">
      <img src={img} alt="Search Icon" className="h-40" />
      <div className="flex flex-col items-center">
        <h2 className="font-semibold mb-0 font-montserrat text-xl lg:text-2xl">
          {title}
        </h2>
        <p className="text-center p-5 text-base lg:text-lg">{desc}</p>
      </div>
    </div>
  );
};

const ComparePrice = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-8 w-11/12 mx-auto">
      {/* <h1 className="text-2xl lg:text-3xl font-bold text-center font-dm-sans">
        GET INSTANT PRICE COMPARISON ON YOUSAVE
      </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
      <LoginButton className={"md:hidden"} />
    </div>
  );
};

export default ComparePrice;
