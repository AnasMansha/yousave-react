import React from "react";
import Header from "components/common/Header";

const MaximizingSavings = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 font-poppins">
        <section className="text-center py-6">
          <p className="text-black text-2xl md:text-4xl font-bold">
            Top Tips For Maximizing Savings With
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
          <aside className="hidden md:block md:w-1/5 px-4">
            <div className="p-4 border border-gray-200">
              <p className="font-bold text-lg">Table of Contents</p>
              <ul className="list-disc pl-4">
                <li>
                  <a href="#refine-search" className="text-black">
                    Refine Your Search with Filters and Sorting Options
                  </a>
                </li>
                <li>
                  <a href="#dig-deeper" className="text-black">
                    Dig Deeper Than Just Price
                  </a>
                </li>
                <li>
                  <a href="#go-beyond" className="text-black">
                    Go Beyond the First Page
                  </a>
                </li>
                <li>
                  <a href="#price-alerts" className="text-black">
                    Leverage Price Alerts
                  </a>
                </li>
                <li>
                  <a href="#alternative-products" className="text-black">
                    Consider Alternative and Refurbished Products
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="text-black">
                    Conclusion
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

              <section id="refine-search" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Refine Your Search with Filters and Sorting Options
                </h2>
                <p className="mb-4">
                  YouSave offers a robust set of filters and sorting options to
                  help you narrow down your choices and find exactly what you're
                  looking for. Here’s how you can make the most of these
                  features:
                </p>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  <li>
                    Use filters to exclude out-of-stock items or those beyond
                    your budget.
                  </li>
                  <li>
                    Sort results by price, popularity, rating, and more to find
                    the best options available.
                  </li>
                  <li>
                    Combine multiple filters to narrow down your search further.
                  </li>
                </ul>
                <img
                  src="/assets/images/datafilter.png"
                  alt="Refine Your Search"
                  className="w-3/4 mx-auto"
                />
              </section>

              <section id="dig-deeper" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Dig Deeper Than Just Price
                </h2>
                <p className="mb-4">
                  While price is a key factor, consider other aspects before
                  making a purchase:
                </p>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  <li>
                    Check customer reviews and ratings for insights into product
                    quality and seller reliability.
                  </li>
                  <li>
                    Look for warranty information and return policies to ensure
                    peace of mind.
                  </li>
                  <li>
                    Compare the total cost, including shipping and handling
                    fees.
                  </li>
                </ul>
              </section>

              <section id="go-beyond" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Go Beyond the First Page
                </h2>
                <p className="mb-4">
                  Many shoppers only look at the first page of search results,
                  missing out on great deals further down. Here’s why you should
                  explore beyond the first page:
                </p>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  <li>Find hidden gems that are often overlooked by others.</li>
                  <li>
                    Compare more options to make a well-informed decision.
                  </li>
                  <li>
                    Discover new sellers offering competitive prices and
                    discounts.
                  </li>
                </ul>
                <img
                  src="/assets/images/image 57.png"
                  alt="Go Beyond"
                  className="w-3/4 mx-auto"
                />
              </section>

              <section id="price-alerts" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Leverage Price Alerts
                </h2>
                <p className="mb-4">
                  Don’t constantly monitor prices yourself. Utilize price alerts
                  to get notified when your desired items drop in price:
                </p>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  <li>
                    Set alerts for specific products to receive notifications of
                    price drops.
                  </li>
                  <li>
                    Take advantage of time-limited deals as soon as they are
                    available.
                  </li>
                  <li>
                    Save time and effort by letting YouSave do the work for you.
                  </li>
                </ul>
              </section>

              <section id="alternative-products" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Consider Alternative and Refurbished Products
                </h2>
                <p className="mb-4">
                  Don't overlook alternatives that can provide significant
                  savings:
                </p>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  <li>
                    Consider refurbished items that offer like-new quality at a
                    fraction of the price.
                  </li>
                  <li>
                    Explore alternative brands that provide similar features and
                    performance.
                  </li>
                  <li>
                    Take advantage of promotions and discounts on less popular
                    models.
                  </li>
                </ul>
              </section>

              <section id="conclusion" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Conclusion
                </h2>
                <p className="mb-4">
                  Maximizing your savings with YouSave is all about using its
                  features effectively. From refining your search to leveraging
                  price alerts, YouSave provides the tools you need to find the
                  best deals. Start exploring today and enjoy unbeatable savings
                  on your favorite products!
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MaximizingSavings;
