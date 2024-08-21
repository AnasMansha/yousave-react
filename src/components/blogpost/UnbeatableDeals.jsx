import React from "react";
import Header from "components/common/Header";

const UnbeatableDeals = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-0 font-poppins">
        {/* Title Section */}
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
          {/* Table of Contents Section */}
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

          {/* Main Content Section */}
          <main className="md:w-4/6 px-4">
            <div className="p-4 border border-gray-200">
              {/* Clock Section */}
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

              {/* Introductory Content */}
              <div className="text-center mb-8">
                <p className="mb-4">
                  In today’s digital age, where convenience reigns supreme,
                  finding the best deals on anything from groceries to gadgets
                  can often feel like a daunting task. Thankfully, price
                  comparison website YouSave is here to simplify the shopping
                  experience and empower you to become a savvier shopper.
                </p>
                <p className="mb-4">
                  This comprehensive guide will equip you with the knowledge and
                  strategies to leverage YouSave effectively and unlock a world
                  of unbeatable deals. We’ll delve into the benefits of using
                  price comparison platforms, explore the functionalities of
                  YouSave, and provide actionable tips to help you maximize your
                  savings.
                </p>
              </div>

              {/* The Power of Price Comparison Websites */}
              <section id="power" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  The Power of Price Comparison Websites
                </h2>
                <p className="mb-4">
                  Price comparison websites aggregate product information and pricing data
                  from various online retailers across the web. This centralized platform
                  streamlines the shopping process by eliminating the need to visit individual
                  store websites and compare prices manually. Here's how price comparison
                  websites benefit you:
                </p>
                <ul className="list-disc pl-4 mb-4 space-y-2">
                  <li>
                    Save Time and Effort: Imagine scouring countless websites for the best
                    deal on a new phone. Price comparison websites eliminate this tedious
                    task, saving you precious time and energy.
                  </li>
                  <li>
                    Uncover Hidden Gems: YouSave crawls the web to find deals from a vast
                    network of retailers, including smaller online stores you might not have
                    discovered on your own. This opens doors to potentially lower prices and
                    unique offerings.
                  </li>
                  <li>
                    Make Informed Decisions: Price comparison websites allow you to
                    compare product specifications, features, and customer reviews
                    alongside pricing. This empowers you to make well-informed purchasing
                    decisions.
                  </li>
                  <li>
                    Stay Updated on Deals: Activating price alerts on YouSave ensures you're
                    notified when the price of a desired product drops, so you can snag it at
                    the opportune moment.
                  </li>
                </ul>
                <img
                  src="/assets/images/image 56.png"
                  alt="Power of Price Comparison"
                  className="md:w-3/4 w-full mx-auto"
                />
              </section>

              {/* Mastering YouSave */}
              <section id="guide" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Mastering YouSave: A Step-by-Step Guide
                </h2>
                <p className="mb-4">
                  YouSave is designed for ease of use, but here's a quick walkthrough to get you started:
                </p>
                <ol className="list-decimal pl-4 mb-4 space-y-2">
                  <li>
                    Head to YouSave.ai: Open a web browser and visit YouSave's website.
                  </li>
                  <li>
                    Search for Your Desired Product: Enter the name of the product you're looking for in the search bar at the top of the page.
                  </li>
                  <li>
                    Filter and Sort: YouSave provides various filters and sorting options to help you narrow down your search results. (With a free account, set your preferred filters to be applied with 1 click)
                    <ul className="list-disc pl-4 mt-2">
                      <li>
                        Filter by Price: Set a price range to focus on deals that fall within your budget.
                      </li>
                      <li>
                        Filter by Brand: If you have a preferred brand, you can filter the results to only show products from that specific brand.
                      </li>
                      <li>
                        Filter by Retailer: You might have a loyalty program with a particular retailer. Use the filter to see if they offer the product you're interested in.
                      </li>
                      <li>
                        Sort by Price (Low to High/High to Low): Sort the results based on price to quickly identify the most affordable options.
                      </li>
                      <li>
                        Sort by Customer Rating: Prioritize products with high customer ratings to ensure you're getting a good deal on a quality item.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Compare and Choose: Carefully compare the prices, specifications, and customer reviews for the products that pique your interest.
                  </li>
                  <li>
                    Pro Tip: Don’t solely focus on the lowest price. Consider factors like reviews, return policy, and shipping costs before making your final decision.
                  </li>
                  <li>
                    Click Through to Retailer: Once you've identified the best deal, click on the retailer's link to be directed to their website to complete your purchase.
                  </li>
                </ol>
              </section>


              {/* Image for Savings */}
              <img
                src="/assets/images/Screenshot 2024-08-06 at 3.48.59 PM 1.png"
                alt="Maximizing Your Savings"
                className="w-full mx-auto mb-8"
              />

              {/* Maximizing Your Savings */}
              <section id="savings" className="mb-8">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    Maximizing Your Savings with YouSave
  </h2>
  <p className="mb-4">
    Now that you're familiar with the basics of using YouSave, here are some additional tips to maximize your savings:
  </p>
  <ul className="list-disc pl-4 mb-4 space-y-2">
    <li>
      Set Price Alerts: Activate price alerts for products you're interested in. YouSave will notify you when the price drops, allowing you to purchase it at the most opportune moment. On your free account, add the products you want to receive alerts from to your List. You will automatically be notified when a price change has happened.
    </li>
    <li>
      Consider Refurbished Products: Many retailers offer significant discounts on refurbished products that have been professionally restored and come with a warranty. YouSave can help you find these deals.
    </li>
  </ul>
  <p className="mb-4">
    Factor in Shipping Costs: Don’t forget to factor in shipping costs when making your final decision.
  </p>
</section>

              {/* One-Stop Shop for Unbeatable Deals */}
              <section id="one-stop" className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  YouSave: Your One-Stop Shop for Unbeatable Deals
                </h2>
                <p className="mb-4">
                Don't waste time and money scouring the web for the best deals. YouSave puts the power of price comparison at your fingertips, making you a smarter, savvier shopper. Visit YouSave.ai today and unlock a world of unbeatable deals!
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
