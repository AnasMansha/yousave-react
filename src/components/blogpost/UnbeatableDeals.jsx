import React from "react";
import Header from "components/common/Header";

const UnbeatableDeals = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-0 font-poppins">
        <section className="text-center py-6">
          <p className="text-black text-2xl md:text-4xl font-bold">
            How To Score Unbeatable Deals With
            <span className="inline-flex items-center ml-2">
              <img
                src="/assets/images/logo.svg"
                alt="YouSave Logo"
                className="h-8 md:h-12"
              />
            </span>
          </p>
        </section>

        <div className="flex flex-col md:flex-row mt-8">
          <aside className="hidden md:block md:w-1/4 px-4">
            <div className="p-4 border border-gray-200">
              <p className="font-bold text-lg">Table of Contents</p>
              <ul className="list-disc pl-4">
                <li>
                  <a href="#power" className="text-black">
                    The Power of Price Comparison Websites
                  </a>
                </li>
                <li>
                  <a href="#guide" className="text-black">
                    Mastering YouSave: A Step-by-Step Guide
                  </a>
                </li>
                <li>
                  <a href="#savings" className="text-black">
                    Maximizing Your Savings with YouSave
                  </a>
                </li>
                <li>
                  <a href="#one-stop" className="text-black">
                    YouSave: Your One-Stop Shop for Unbeatable Deals
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <main className="md:w-4/5 px-4">
            <div className="p-4 border border-gray-200">
              <div className="time-blog text-center mb-4">
                <p className="inline-flex items-center justify-center">
                  <img
                    src="/assets/images/Vector.svg"
                    alt="Clock"
                    className="mr-2"
                  />
                  <span>May 16, 2024</span>
                </p>
              </div>

              <section id="power" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  The Power of Price Comparison Websites
                </h2>
                <p className="mb-4">
                  Price comparison websites have gained widespread attention and
                  praise for their ability to save consumers significant amounts
                  of money. These platforms aggregate prices from various
                  retailers, allowing users to compare and find the best deals.
                  Here’s a look at why price comparison websites are so
                  powerful:
                </p>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  <li>
                    Save a significant amount of money by comparing prices for
                    the best deals available.
                  </li>
                  <li>
                    Access a wide range of products and services all in one
                    place.
                  </li>
                  <li>
                    Get insights and reviews from other consumers to make
                    informed purchasing decisions.
                  </li>
                  <li>
                    Benefit from exclusive discounts and deals often not
                    available directly from retailers.
                  </li>
                  <li>
                    Use advanced filtering options to narrow down your choices
                    based on specific criteria.
                  </li>
                </ul>
                <img
                  src="/assets/images/image 56.png"
                  alt="Power of Price Comparison"
                  className="w-3/4 mx-auto"
                />
              </section>

              <section id="guide" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Mastering YouSave: A Step-by-Step Guide
                </h2>
                <p className="mb-4">
                  YouSave is designed to be user-friendly. Follow this
                  step-by-step guide to get the most out of YouSave:
                </p>
                <ol className="list-decimal pl-4 mb-4 space-y-2">
                  <li>Visit the YouSave website or download the mobile app.</li>
                  <li>
                    Search for the product you are interested in by entering
                    keywords in the search bar.
                  </li>
                  <li>
                    Filter the results by price, ratings, or other criteria to
                    narrow down your options.
                  </li>
                  <li>
                    Compare the prices from different retailers and select the
                    best deal that suits your needs.
                  </li>
                  <li>
                    Click on the link to be redirected to the retailer’s website
                    and complete your purchase.
                  </li>
                  <li>
                    Optionally, set price alerts for the products you are
                    interested in to receive notifications of price drops.
                  </li>
                </ol>
              </section>

              <section id="savings" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Maximizing Your Savings with YouSave
                </h2>
                <p className="mb-4">
                  To help you maximize your savings with the help of YouSave,
                  here are some tips and strategies:
                </p>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  <li>
                    Sign up for the YouSave newsletter to get the latest deals
                    and promotions directly in your inbox.
                  </li>
                  <li>
                    Use the YouSave app while shopping in-store to compare
                    prices and ensure you’re getting the best deal.
                  </li>
                  <li>
                    Take advantage of exclusive deals and discounts available
                    only to YouSave members.
                  </li>
                  <li>
                    Share deals and promotions with friends and family to earn
                    referral bonuses and additional discounts.
                  </li>
                </ul>
                <img
                  src="/assets/images/Screenshot 2024-08-06 at 3.48.59 PM 1.png"
                  alt="Maximizing Your Savings"
                  className="w-full mx-auto"
                />
              </section>

              <section id="one-stop" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  YouSave: Your One-Stop Shop for Unbeatable Deals
                </h2>
                <p className="mb-4">
                  Don’t miss out on the unbeatable savings that YouSave has to
                  offer. From exclusive deals to comprehensive price
                  comparisons, YouSave is your ultimate tool for smart shopping.
                  Start using YouSave today and experience the benefits of a
                  truly user-centric price comparison platform.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UnbeatableDeals;
