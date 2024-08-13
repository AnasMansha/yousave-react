import React from "react";
import Header from "components/common/Header";

const UnleashSavings = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 font-poppins">
        <section className="text-center py-10">
          <p className="text-black text-2xl md:text-4xl font-bold">
            Unleash The Power Of Savings:
            <br />
            Your Guide To Instant Price Comparison On
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
            <div className="p-4 border border-gray-200 bg-white shadow-lg rounded-lg">
              <p className="font-bold text-lg mb-4">Table of Contents</p>
              <ul className="list-disc pl-4 space-y-2 text-black">
                <li>
                  <a href="#power" className="hover:underline">
                    The Power of Price Comparison Websites
                  </a>
                </li>
                <li>
                  <a href="#savings-ally" className="hover:underline">
                    Benefits of Using YouSave.ai: Your Savings Ally
                  </a>
                </li>
                <li>
                  <a href="#best-deals" className="hover:underline">
                    Finding the Best Deals: YouSave.ai Features Explained
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <main className="md:w-3/4 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-8">
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
                <h1 className="text-3xl font-bold mt-2 text-black">
                  Unlock the Best Deals with YouSave.ai: A Comprehensive Guide
                </h1>
              </div>

              <div className="mb-8 text-black">
                <div className="max-w-full bg-white p-2 text-center">
                  <p className="text-lg text-black mb-4">
                    In today’s fast-paced world, savvy shoppers are always on the hunt for the best deals. 
                    But with countless online retailers and ever-fluctuating prices, finding the absolute best price 
                    can feel like a daunting task. Enter YouSave.ai, your one-stop shop for instant price comparisons 
                    and a gateway to unlocking the biggest possible savings on all your online purchases.
                  </p>
                  <p className="text-lg text-black mb-4">
                    This comprehensive guide will delve into the world of price comparison search engines, specifically 
                    focusing on YouSave.ai and how it empowers you to become a master deal hunter. We’ll explore:
                  </p>
                  <ul className="list-disc list-inside text-lg text-black space-y-2">
                    <li>The Power of Price Comparison Websites</li>
                    <li>Benefits of Using YouSave.ai: Your Savings Ally</li>
                    <li>Finding the Best Deals: YouSave.ai Features Explained</li>
                    <li>Unlocking Maximum Savings with YouSave.ai Pro Tips</li>
                    <li>Embrace Savings, Embrace YouSave.ai</li>
                  </ul>
                </div>
                <img
                  src="/assets/images/illustration-landing-page-with-time-management-concept_23-2148241780 1.png"
                  alt="Power of Price Comparison"
                  className="w-3/4 mx-auto"
                />
              </div>

              <div className="mb-8" id="power">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  The Power of Price Comparison Websites
                </h2>
                <p className="text-lg text-black">
                  Imagine a world where with a few clicks, you can compare prices across multiple
                  online stores and find the absolute best deal. That’s the magic of price comparison
                  websites. These powerful tools crawl the web, gathering real-time pricing data on
                  products you’re interested in.
                </p>
                <p className="text-lg mt-4 text-black">
                  Here’s why price comparison websites are essential for your shopping journey:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg space-y-2">
                  <li>
                    Save Time & Effort: Skip the tedious process of manually visiting different websites and comparing prices. We do the heavy lifting for you, saving you precious time and energy.
                  </li>
                  <li>
                    Find the Best Deals: Uncover hidden gems and score incredible discounts. We’ll provide a clear picture of pricing variations, ensuring you always get the best value for your money.
                  </li>
                </ul>

                <p className="pt-5 ">
                  Informed Decisions: Gain valuable insights before making a purchase. By understanding the price landscape, you can make informed decisions and avoid buyer’s remorse.
                </p>

                <img
                  src="/assets/images/teamwork-people-gears-and-clocks-are-a-symbol-of-collaborative-production-control-flat-illustration-vector 1.png"
                  alt="Power of Price Comparison"
                  className="w-3/4 mx-auto"
                />
              </div>

              <div className="mb-8" id="savings-ally">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Benefits of Using YouSave.ai: Your Savings Ally
                </h2>
                <p className="text-lg text-black">
                  YouSave.ai goes beyond simply comparing prices. It’s your dedicated shopping companion,
                  offering a plethora of benefits:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg space-y-2">
                  <li>
                    Unmatched Speed & Accuracy: Get instant results with high accuracy,
                    ensuring you don’t miss any time-sensitive deals.
                  </li>
                  <li>
                    Comprehensive Product Coverage: Search from a vast array of categories,
                    finding the best deals on everything from electronics and clothing to groceries and home goods.
                  </li>
                  <li>
                    Filter & Sort Options: Narrow down your search with powerful filters and
                    sorting tools to find exactly what you need quickly and efficiently. Preserve your preferred
                    filters in your free account for even faster browsing.
                  </li>
                  <li>
                    Deal Alerts & Price Tracking: Set price alerts and track price fluctuations
                    on specific products to ensure you snatch the best deal the moment it drops. This feature
                    also comes for free on your account.
                  </li>
                  <li>
                    Transparent Shopping Experience: YouSave.ai prioritizes transparency. We clearly
                    display product information, reviews, and retailer details, empowering you to make informed decisions.
                  </li>
                </ul>
              </div>

              <div className="mb-8" id="best-deals">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Finding the Best Deals: YouSave.ai Features Explained
                </h2>
                <p className="text-lg text-black">
                  Let’s explore some key features of YouSave.ai that make it your ultimate deal-finding weapon:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg space-y-2">
                  <li>
                    Advanced Search: Refine your search by specifying brands, price ranges,
                    retailers, and even retailer preference. You can do all this with the filters on the left
                    side, or pre-set them on your free account.
                  </li>
                  <li>
                    Product Reviews & Ratings: Make informed choices by reading user reviews
                    and ratings before committing to a purchase.
                  </li>
                  <li>
                    Customizable Alerts on Your Free Account: Set personalized alerts on your
                    desired items. Just add the item to your list, and you will get automatically notified when a
                    price change happens. You can also toggle the alert off if needed.
                  </li>
                  <li>
                    YouSave.ai Free Upgrade: Unlock exclusive features like advanced filtering,
                    price alerts, personal lists, and priority customer support for free.
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UnleashSavings;
