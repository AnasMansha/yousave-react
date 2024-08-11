import React from "react";
import Header from "components/common/Header";

const SecurityTechnlogy = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <section
          className="slider-blog bg-cover bg-center h-40vh"
          style={{
            backgroundImage:
              "url('https://yousave.ai/img/cyber-security-banner%201.svg')",
          }}
        >
          <div className="slider-blog-content py-20 text-center text-white font-bold">
            <p className="text-4xl">
              YouSave’s Next Generation Security Technology
            </p>
          </div>
        </section>

        <div className="container mx-auto my-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12">
              <div className="blog-post-content">
                <img
                  src="https://yousave.ai/img/businessman-with-shield-protecting-attact-of-enemy-vector-12618405%201.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="blog-content-spaces mt-4 mb-4">
                <div className="text-gray-500">
                  <span>
                    <img
                      className="inline-block align-middle"
                      src="https://yousave.ai/img/c-Icon.png"
                      alt=""
                    />
                  </span>
                  March 6, 2023
                </div>
              </div>
              <div className="blog-content-spaces mt-4 mb-4">
                <p className="text-center text-gray-500">
                  YouSave has just completed development and deployment of the
                  next generation of security technology.&nbsp;
                </p>
              </div>
              <div className="blog-content-spaces mt-4 mb-4">
                <h2 className="font-semibold text-2xl">
                  Who is the enemy?&nbsp;
                </h2>
                <p className="text-gray-500  mt-8">
                  Scams are usually targeted towards high price products. Here
                  are a few of the giveaways we base our software’s algorithm
                  on.
                </p>
                <ul className="list-inside text-gray-500">
                  <li>
                    They give abnormally low prices, use fake links and
                    impersonate big sites.
                  </li>
                  <li>
                    Since they are banned on-the-go, they are usually very new
                    (same year).
                  </li>
                  <li>
                    They tend to give unknown/fake addresses, and have
                    low-nonexistent reviews.
                  </li>
                </ul>
                <br />
                <p className="text-gray-500">
                  This scam industry profits $50 billion ($50 000 000 000) per
                  year; Victims lose $50 billion ($50 000 000 000) per year. Due
                  to scams promoted or un-filtered on other websites.&nbsp;Our
                  priority is making sure our shoppers are safe.
                </p>
              </div>
              <div className="blog-content-spaces mt-8 mb-4">
                <h2 className="font-semibold text-2xl ">
                  Who is the Solution?&nbsp;
                </h2>
                <img
                  src="https://yousave.ai/img/What-are-the-Best-Resources-for-Mastering-Data-Structures-and-Algorithms-2%201.png"
                  alt=""
                  className="w-full  mt-8"
                />
                <p className="text-gray-500 mt-4 ">
                  This software will continously sort through our extensive (and
                  always evolving) catalog of over 2 billion products from over
                  14 million sellers and remove/ban all sites with possibility
                  of scams.
                </p>
                <p className="text-gray-500">
                  Having 100s of different industries, our technology had to
                  have a deeper level of understanding and not a specific
                  target. Interchanging machine automation with advanced
                  probability formulas has given us a great starting point with
                  we will continue to grow and adapt on to keep our users safe.
                  This complex technology is not patented, and will not be, to
                  support the bigger effort to end this industry.
                </p>
              </div>
              <div className="blog-content-spaces mt-4 mb-4">
                <h2 className="font-semibold text-2xl">Ending note</h2>
                <img
                  src="https://yousave.ai/img/concept-teamwork-in-business-company-vector-29066303%201.png"
                  alt=""
                  className="w-full  mt-8"
                />
                <p className="text-gray-500 mt-4">
                  Our goal was to find a middle ground between mass removing
                  scam offers while leaving larger selection of offers. Allowing
                  the true best price to thrive and not limiting to the biggest
                  retailers. Promoting competition and ultimately resulting in
                  larger and safer savings for our users.
                </p>
                <p className="text-gray-500">
                  This is part of your/our major effort to drastically reduce
                  and in the end completely eliminate this industry. As more
                  users migrate to our site we must become more and more
                  responsible and will continue to invest heavily so you don’t
                  lose heavily. Our priority is making sure our shoppers are
                  safe. We want you to shop free of mind, while Saving Money,
                  Saving Faster.
                </p>
              </div>
              <div className="yousave-footer-text text-center pb-10">
                <img
                  src="https://yousave.ai/img/new-logo%201.png"
                  alt=""
                  className="pb-4"
                />
                <p className="text-gray-500">
                  YouSave Money, YouSave Faster
                  <span className="float-right">
                    <img src="https://yousave.ai/img/s-Icon.svg" alt="" />
                  </span>
                </p>
              </div>
            </div>
            {/* Sidebar blog */}
            <div className="w-full md:w-4/12 hidden md:block">
              <div className="contact-recent-post p-4">
                <h3 className="text-gray-500 text-sm">Contact us</h3>
                <form>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      className="form-control w-full p-2 border rounded"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="password"
                      className="form-control w-full p-2 border rounded"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control w-full p-2 border rounded"
                      rows="3"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary p-2 w-full bg-blue-500 text-white rounded"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityTechnlogy;
