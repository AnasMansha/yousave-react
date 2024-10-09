import React from "react";
import Header from "components/common/Header";

const TrendingProductsofLastWeek = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 font-poppins">
        <section className="text-center py-10">
          <p className="text-black text-2xl md:text-4xl font-bold">
            Trending Products of Last Week: A Recap for Budding
            <br />
            Entrepreneurs and Curious Consumers
          </p>
        </section>

        <div className="flex flex-col md:flex-row mt-8">
          <aside className="hidden md:block md:w-1/4 px-4">
            <div className="p-4 border border-gray-200 bg-white shadow-lg rounded-lg">
              <p className="font-bold text-lg mb-4">Table of Contents</p>
              <ul className="list-disc pl-4 space-y-2 text-black">
                <li>
                  <a href="#power" className="hover:underline">
                    Kojic Acid Serum - A Skincare Sensation
                  </a>
                </li>
                <li>
                  <a href="#glycolic-acid" className="hover:underline">
                    Glycolic Acid Exfoliating Toner - More Than Just a Trend
                  </a>
                </li>
                <li>
                  <a href="#waterproof-jewelry" className="hover:underline">
                    Waterproof Jewelry - A Niche Yet Growing Market
                  </a>
                </li>
                <li>
                  <a href="#bamboo-clothing" className="hover:underline">
                    Bamboo Clothing - Comfort Meets Eco-Consciousness
                  </a>
                </li>
                <li>
                  <a href="#functional-home" className="hover:underline">
                    Functional Home Aesthetics - Beyond Just Looking Good
                  </a>
                </li>
                <li>
                  <a href="#wellness-supplements" className="hover:underline">
                    Health and Wellness Supplements - The Quest for Better
                    Health
                  </a>
                </li>
                <li>
                  <a href="#fitness-gear" className="hover:underline">
                    Fitness Gear - From Gym to Home
                  </a>
                </li>
                <li>
                  <a href="#digital-downloads" className="hover:underline">
                    Digital Downloads and Apps - The Invisible Bestsellers
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="hover:underline">
                    Conclusion
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <main className="md:w-3/4 px-4 p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <div className="time-blog text-center mb-4">
                  <p className="inline-flex items-center justify-center">
                    <img
                      src="/assets/images/Vector.svg"
                      alt="Clock"
                      className="mr-2"
                    />
                    <span>Oct 9, 2024</span>
                  </p>
                </div>
              </div>

              <div className="mb-8 text-black">
                <div className="max-w-full bg-white p-2 text-center">
                  <p className="text-lg text-black mb-4">
                    As we dive into October 2024, the market is buzzing with new
                    trends and enduring favorites. Whether you're looking to
                    launch an eCommerce venture or simply want to stay updated
                    with consumer preferences, understanding what's hot in the
                    market is crucial. Here's a rundown of what flew off the
                    shelves last week, with the respective links for each
                    product on YouSave.
                  </p>
                </div>
              </div>

              {/* Kojic Acid Serum Section */}
              <div className="mb-8" id="power">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Kojic Acid Serum - A Skincare Sensation
                </h2>
                <p className="text-lg text-black">
                  The skincare industry continues to evolve, and last week,
                  kojic acid serum was the star. With its promise to brighten
                  and even skin tone, this product has seen a surge, especially
                  after gaining traction on platforms like TikTok. Its appeal
                  lies in its natural, eco-friendly composition, catering to the
                  growing demand for sustainable beauty products.
                </p>
              </div>

              {/* Glycolic Acid Toner Section */}
              <div className="mb-8" id="glycolic-acid">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Glycolic Acid Exfoliating Toner - More Than Just a Trend
                </h2>
                <p className="text-lg text-black">
                  Following closely, glycolic acid toners made their mark. Known
                  for their skin-exfoliating properties, these toners help in
                  skin cell turnover, making them a staple for anyone serious
                  about skincare. The trend towards at-home beauty routines,
                  especially those that promise professional results, has fueled
                  its popularity.
                </p>
                <br />
                <img
                  src="/assets/images/treading1.jpg"
                  alt="Glycolic Acid Toner"
                  className="md:w-2/4 w-full mx-auto"
                />
              </div>

              {/* Waterproof Jewelry Section */}
              <div className="mb-8" id="waterproof-jewelry">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Waterproof Jewelry - A Niche Yet Growing Market
                </h2>
                <p className="text-lg text-black">
                  For those who love their accessories but lead an active
                  lifestyle, waterproof jewelry has become increasingly popular.
                  This niche product caters to the adventurous, combining
                  fashion with functionality, ensuring that style doesn't have
                  to be sacrificed for durability.
                </p>
                <br />
                <img
                  src="/assets/images/treading2.png"
                  alt="Waterproof Jewelry"
                  className="md:w-2/4 w-full mx-auto"
                />
              </div>

              {/* Bamboo Clothing Section */}
              <div className="mb-8" id="bamboo-clothing">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Bamboo Clothing - Comfort Meets Eco-Consciousness
                </h2>
                <p className="text-lg text-black">
                  Bamboo clothing, praised for its comfort and eco-friendliness,
                  saw significant sales. The material's natural moisture-wicking
                  properties and softness make it ideal for everyday wear,
                  aligning with consumer shifts towards sustainable fashion.
                </p>
                <br />
                <img
                  src="/assets/images/treading3.png"
                  alt="Bamboo Clothing"
                  className="md:w-2/4 w-full mx-auto"
                />
              </div>

              {/* Functional Home Aesthetics Section */}
              <div className="mb-8" id="functional-home">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Functional Home Aesthetics - Beyond Just Looking Good
                </h2>
                <p className="text-lg text-black">
                  Products like the hall effect joystick, known for its
                  precision in gaming and machinery, and innovative kitchen
                  faucets that add both style and functionality, indicate a
                  trend towards merging aesthetics with utility in home
                  products.
                </p>
                <br />
                <img
                  src="/assets/images/treading4.png"
                  alt="Functional Home Aesthetics"
                  className="md:w-2/4 w-full mx-auto"
                />
              </div>

              {/* Health and Wellness Supplements Section */}
              <div className="mb-8" id="wellness-supplements">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Health and Wellness Supplements - The Quest for Better Health
                </h2>
                <p className="text-lg text-black">
                  The health and wellness sector continues to thrive. With
                  demographics dedicated to leading the charge, innovation in
                  supplements and diet has propelled several new formulas into
                  the spotlight. Last week's top supplements focused on immune
                  health, resonating with demographics seeking overall health
                  solutions.
                </p>
                <br />
                <img
                  src="/assets/images/treading5.png"
                  alt="Health Supplements"
                  className="md:w-2/4 w-full mx-auto"
                />
              </div>

              {/* Fitness Gear Section */}
              <div className="mb-8" id="fitness-gear">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Fitness Gear - From Gym to Home
                </h2>
                <p className="text-lg text-black">
                  Fitness continues globally, with multiple key fitness products
                  occupying chain store shelves or popular eCommerce listings
                  this week. These items were focused on home fitness to match
                  recent health consciousness, with an uptick in gym
                  memberships.
                </p>
                <br />
                <img
                  src="/assets/images/treading6.png"
                  alt="Fitness Gear"
                  className="md:w-2/4 w-full mx-auto"
                />
              </div>

              {/* Digital Downloads and Apps Section */}
              <div className="mb-8" id="digital-downloads">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Digital Downloads and Apps - The Invisible Bestsellers
                </h2>
                <p className="text-lg text-black">
                  With physical products abundant, digital content also keeps
                  its top productivity. This week’s invisible bestsellers were
                  in demand. The digital hotspot included resources for
                  learning, gaming, and integrated wellness solutions.
                </p>
                <br />
                <img
                  src="/assets/images/treading7.png"
                  alt="Digital Downloads"
                  className="md:w-2/4 w-full mx-auto"
                />
              </div>

              {/* Conclusion Section */}
              <div className="mb-8" id="conclusion">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Conclusion
                </h2>
                <p className="text-lg text-black">
                  The market landscape of last week was diverse, reflecting
                  consumer interest in health, sustainability, technology, and
                  personal care. For entrepreneurs, this mix suggests
                  opportunities in eco-friendly products, niche health
                  solutions, and innovative home tech. For consumers, it's a
                  reminder of the evolving marketplace, where trends can both
                  reflect and shape cultural shifts towards more informed,
                  sustainable, and health-focused lifestyles. With YouSave on
                  your side, leading your shopping experience, you can maximize
                  savings on all these products within minutes.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TrendingProductsofLastWeek;
