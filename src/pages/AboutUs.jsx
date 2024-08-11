import React from "react";
import Header from "components/common/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto w-full md:w-4/6 lg:w-10/12	 py-4  md:py-6">
        <section className="text-center">
          <h2 className="text-2xl md:text-5xl py-5 font-poppins font-semibold	">
            About YouSave
          </h2>
          <p className="font-poppins">
            YouSave is the next generation shopping tool that allows you to
            instantly compare prices on billions of products across your
            favorite sites such as Amazon, Walmart, Target, Home Depot, Best Buy
            and millions more.
          </p>
        </section>

        <section className="pt-12">
          <h2 className="text-center font-poppins text-2xl md:text-4xl font-semibold	">
            Finding Savings in Every Product
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="mt-10 pt-10 pb-10 bg-[#fff4ed] text-center font-poppins">
                <img
                  className="mx-auto"
                  src="https://yousave.ai/img/Group%20133.png"
                  alt=""
                />
                <h2 className="pt-4 text-lg">Search over 2 billion products</h2>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="mt-10 pt-10 pb-10 bg-[#fff4ed] text-center font-poppins">
                <img
                  className="mx-auto"
                  src="https://yousave.ai/img/Group%20134.png"
                  alt=""
                />
                <h2 className="pt-4 text-lg">Instantly compare prices</h2>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="mt-10 pt-10 pb-10 bg-[#fff4ed] text-center font-poppins">
                <img
                  className="mx-auto"
                  src="https://yousave.ai/img/Group%20135.png"
                  alt=""
                />
                <h2 className="pt-4 text-lg">Save money and save time</h2>
              </div>
            </div>
          </div>
          <div className="text-center font-poppins w-4/5 mx-auto pt-5">
            <p>
              YouSave offers a vast array of information (including price,
              reviews, shopping info, direct and secure links, and more), making
              sure you get your best buy. Search a product on YouSave and we’ll
              show you its price across all major sites so you can always save
              money with the best price.
            </p>
          </div>
        </section>

        <section className="py-5 font-poppins">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4 ">
              <div className="bg-blue-900 text-white text-center p-6 rounded-3xl py-12">
                <img
                  className="mx-auto"
                  src="https://yousave.ai/img/2.3B.png"
                  alt=""
                />
                <p className="pt-4 ">
                  Online shoppers save time and money with YouSave.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-blue-900 text-white text-center p-6 rounded-3xl py-12">
                <img
                  className="mx-auto"
                  src="https://yousave.ai/img/14M.png"
                  alt=""
                />
                <p className="pt-4">
                  Stores are available and compete for the best price.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 p-4">
              <div className="font-poppins">
                <h2 className="text-xl uppercase pb-4 font-semibold	">
                  Complete Real-Time Price Comparison
                </h2>
                <div className="flex items-center pb-4">
                  <img
                    className="w-6"
                    src="https://yousave.ai/img/icons8_ok_6%201.png"
                    alt=""
                  />
                  <p className="pl-2">
                    YouSave searches the web in real time to compare prices for
                    every product so you don’t have to.
                  </p>
                </div>
                <div className="flex items-center pb-4">
                  <img
                    className="w-6"
                    src="https://yousave.ai/img/icons8_ok_6%201.png"
                    alt=""
                  />
                  <p className="pl-2">
                    All product information and prices are continually updated
                    to make sure you take advantage of sudden price reductions,
                    big sales, and hidden discounts, wherever they are!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 p-4">
              <img
                className="about-us-img"
                src="https://yousave.ai/img/Group%2067.png"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="flex flex-wrap py-5">
          <div className="w-full md:w-1/2 p-4">
            <img
              className="about-us-img"
              src="https://yousave.ai/img/Layer%206.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex items-center">
            <div className="font-poppins">
              <p>
                With of consumers compare prices in a slow and inefficient
                manner before buying, our platform utilizes powerful technology
                to make it super easy to find products and compare prices, so
                you take advantage of the best price, wherever it is.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center font-poppins py-5 w-4/5 mx-auto">
          <p>
            <b>Our mission</b> is to make it easy for anyone to find the best
            price across the web, with one click and all in one place. With
            YouSave, YouSave Money, and YouSave Faster.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
