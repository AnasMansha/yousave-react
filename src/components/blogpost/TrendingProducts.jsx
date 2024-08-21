import React from "react";
import Header from "components/common/Header";

const TrendingProducts = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-0 font-poppins">
        <section className="text-center py-6">
          <p className="text-black text-2xl md:text-4xl font-bold">
          We Asked Grok What Were The Top Trending Products <br /> This Week
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    Answer
                </h2>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    Here are the top 10 trending products this week based on the provided context:
                </h2>
                <ol className="list-decimal pl-4 mb-4 space-y-2">
                <a href="https://yousave.ai/product/AllNew-Kindle-Ereader-Black-6-inch-Glarefree-Touchscreen-Display-WiFi/17481504675113623171">
                <li>Kindle - 6" Glare-Free Display with Built-In Front Light</li>
                </a>
                
                  <a href="https://yousave.ai/product/Amazon-Kindle-Paperwhite-32GB-Signature-Edition-Black/4698106929299711198">
                  <li>
                  Kindle Paperwhite - 8 GB
                  </li>
                  </a>

               <a href="https://yousave.ai/product/Amazon-Kindle-Paperwhite-32GB-Signature-Edition-Black/4698106929299711198">
               <li>
                  Kindle Paperwhite - 32 GB
                  </li>
               </a>
                 <a href="https://yousave.ai/product/Contigo-Autoseal-West-Loop-Stainless-Steel-Coffee-Travel-Mug-24-oz-Silver/5710347506560371031">
                 <li>
                  Contigo Autoseal West Loop Vacuum-Insulated Stainless Steel Travel Mug
                  </li>
                 </a>
                 <a href="https://yousave.ai/product/Lilyana-Naturals-Eye-Cream-1-oz/12705102643531095780">
                 <li>
                  LilyAna Naturals Eye Cream Moisturizer
                  </li>

                 </a>
                <a href="https://yousave.ai/product/Lilyana-Naturals-Retinol-Cream-for-Face-Made-in-USA-Retinol-Cream-Anti-Aging-/9516307406057637633">
                <li>
                  LilyAna Naturals Retinol Cream Moisturizer
                  </li>
                </a>
              <a href="https://yousave.ai/product/LilyAna-Naturals-Vitamin-C-Serum-1-oz-30g/4926449677263248925">
              <li>
                  LilyAna Naturals Vitamin C Serum with Hyaluronic Acid for Face and Eyes
                  </li>
              </a>
              <a href="https://yousave.ai/product/Frsara-Neck-Fan-Portable-Strong-Wind-Adjustable-360-Cooling-Super-Quiet-No-/2145328501079504967">
              <li>
                  FrSara Neck Fan
                  </li>
              </a>
              
              <a href="https://yousave.ai/product/TRUSCEND-6-Segmented-Fishing-Lure-Jointed-Swimbait/14858215410946849817">
              <li>
                  TRUSCEND Top Water Fishing Lures
                  </li>
              </a>
                <a href="https://yousave.ai/product/Playtek-PT8025-Tropical-Watermelon-Print-Tube-Inflatable-Pool-Float/15268603305310854289">
                <li>
                  Inflatable Watermelon Pool Float” 
                  </li>
                </a>
                
                </ol>
                <p className="mb-4">
                    _Grak
                </p>
                <p className="mb-4 text-center">
                 It took us 3 minutes to find the best deal for each on YouSave:
                </p>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/AllNew-Kindle-Ereader-Black-6-inch-Glarefree-Touchscreen-Display-WiFi/17481504675113623171">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                                Kindle - 6" Glare-Free Display with Built-In Front Light ($90): 
                            </h2>
                            <img
                                src="/assets/images/image 71.png"
                                alt="Maximizing Your Savings"
                                className="w-80 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/Amazon-Kindle-Paperwhite-8-GB-Black/5632313598264998413">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                                 Kindle Paperwhite - 8 GB ($140):
                            </h2>
                            <img
                                src="/assets/images/image 72.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/Amazon-Kindle-Paperwhite-32GB-Signature-Edition-Black/4698106929299711198">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                                    Kindle Paperwhite - 32 GB ($115):
                            </h2>
                            <img
                                src="/assets/images/image 73.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/Contigo-Autoseal-West-Loop-Stainless-Steel-Coffee-Travel-Mug-24-oz-Silver/5710347506560371031">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            Contigo Autoseal West Loop Vacuum - Insulated Stainless Steel Travel Mug ($15):
                            </h2>
                            <img
                                src="/assets/images/image 64.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/Lilyana-Naturals-Eye-Cream-1-oz/12705102643531095780">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            LilyAna Naturals Eye Cream Moisturizer ($17):
                            </h2>
                            <img
                                src="/assets/images/image 65.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/Lilyana-Naturals-Retinol-Cream-for-Face-Made-in-USA-Retinol-Cream-Anti-Aging-/9516307406057637633">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            LilyAna Naturals Retinol Cream Moisturizer ($12):
                            </h2>
                            <img
                                src="/assets/images/image 67.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/LilyAna-Naturals-Vitamin-C-Serum-1-oz-30g/4926449677263248925">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            LilyAna Naturals Vitamin C Serum with Hyaluronic Acid for Face and Eyes ($10):
                            </h2>
                            <img
                                src="/assets/images/image 711.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/Frsara-Neck-Fan-Portable-Strong-Wind-Adjustable-360-Cooling-Super-Quiet-No-/2145328501079504967">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            FrSara Neck Fan ($15):
                            </h2>
                            <img
                                src="/assets/images/image 74.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/TRUSCEND-6-Segmented-Fishing-Lure-Jointed-Swimbait/14858215410946849817">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            FrSara Neck Fan ($15):
                            </h2>
                            <img
                                src="/assets/images/716.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>

                <section id="savings" className="mb-8">
                            <a href="https://yousave.ai/product/Playtek-PT8025-Tropical-Watermelon-Print-Tube-Inflatable-Pool-Float/15268603305310854289">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            Inflatable Watermelon Pool Float ($17):
                                                        </h2>
                            <img
                                src="/assets/images/image 77.png"
                                alt="Maximizing Your Savings"
                                className="w-100 mx-auto"
                                />
                            </a>
                </section>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
