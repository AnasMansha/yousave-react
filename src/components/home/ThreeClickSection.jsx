import React from "react";

const SectionCard = ({ image, title, desc }) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-blue-800 rounded-3xl pb-8 mx-auto">
        <div className="saving-card-img flex justify-center">
          <img src={image} className="mx-auto" alt="" />
        </div>
        <div className="mt-4">
          <h2 className="text-white text-xl uppercase">{title}</h2>
        </div>
        <div className="mt-2">
          <p className="text-white text-center w-4/5 mx-auto">{desc}</p>
        </div>
      </div>
    </div>
  );
};
const ThreeClickSection = () => {
  return (
    <section className="mt-12 mb-12 pb-8 w-full bg-[#131d52]">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-white text-3xl font-semibold uppercase py-12">
            3 Clicks to Saving Big
          </h3>
          <div className="flex flex-wrap justify-center">
            <SectionCard
              image={"https://yousave.ai/img/svgexport-41%20(12).png"}
              title={"Search"}
              desc={"Search through 2 billion products"}
            />
            <SectionCard
              image={"https://yousave.ai/img/s1vgexport-38.png"}
              title={"Compare"}
              desc={"Compare prices from the most trusted sites"}
            />
            <SectionCard
              image={"https://yousave.ai/img/svgexport-41%20(12).png"}
              title={"Save"}
              desc={"Find the best deal and save big"}
            />
          </div>
          <div className="text-center mt-8">
            <ul id="navigation" className="list-none">
              <li className="hidden">
                <a
                  //   onClick={() => showLoginForm()}
                  className="cursor-pointer flex justify-center"
                >
                  <button className="login-deb bg-blue-600 text-white py-2 px-4 rounded">
                    Login / Sign up
                  </button>
                </a>
              </li>
              <li id="accountLink" className="block">
                <a
                  //   onClick={() => showAccount()}
                  className="cursor-pointer flex justify-center"
                >
                  <button className="btn-gradient text-white font-dm-sans h-11 w-40 flex justify-center items-center">
                    Account
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeClickSection;