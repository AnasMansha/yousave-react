import React from "react";
import Header from "components/common/Header";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="pb-2">
        <div className="container mx-auto w-full md:w-4/5 lg:w-3/5">
          <h2 className="text-center text-2xl md:text-5xl py-5 font-poppins mb-2 py-8">
            YouSave’s Blog
          </h2>
          <div
            className="blog-banner w-full h-96 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url('https://yousave.ai/img/cyber-security-banner%202.png')",
            }}
          >
            <div className="pt-10">
              <div className="blog-category w-1/2 md:w-1/2 lg:w-1/5 h-14 bg-gradient-to-r from-lime-400 to-green-700 rounded-r-lg flex justify-center items-center">
                <p className="text-white leading-8 text-center m-0">
                  <img src="https://yousave.ai/img/clock.png" alt="" /> 19th
                  April, 2024
                </p>
              </div>
            </div>
            <div className="blog-text pt-10">
              <div className="blog-title w-full md:w-2/3 lg:w-1/2 pl-4 text-white text-xl md:text-2xl font-poppins font-medium">
                <p>
                  YouSave’s next Generation <br /> Security technology
                </p>
              </div>
            </div>
            <div className="read-text pt-10">
              <div className="read-more w-3/4 md:w-2/3 lg:w-2/5 pl-4 text-white text-sm md:text-xs font-poppins font-medium underline">
                <a
                  href="blogs/security-technlogy.html"
                  className="hover:text-lime-400"
                >
                  Read Now
                </a>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex flex-wrap justify-between py-8">
            {[
              {
                link: "/blog/DigitalArt",
                img: "https://yousave.ai/img/hero__z7kty0msgsya_large 2.svg",
                title:
                  "Revolutionize Your Digital Art: the Apple Pencil Pro is Every Artist's Dream Tool",
                date: "19th April, 2024",
              },
              {
                link: "/blog/IPadGeneration",
                img: "https://yousave.ai/img/images-4 1.png",
                title:
                  "The iPad 10th Generation: YouSave’s Technology Unveils the Ultimate Powerhouse.",
                date: "19th April, 2024",
              },
              {
                link: "/blog/Mastering-the-Art-of-Savvy-Shopping",
                img: "https://yousave.ai/img/Vector (2).png",
                title:
                  "Mastering the Art of Savvy Shopping: Tips and Tricks for Effective Price Comparison",
                date: "19th April, 2024",
              },
              {
                link: "/blog/best-price-comparison-sites",
                img: "https://yousave.ai/img/create-cashback-app 1.png",
                title:
                  "Best Price Comparison Sites in the USA: Save Money on Every Purchase with YouSave.ai",
                date: "19th April, 2024",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/2 pb-6 relative p-5"
              >
                <div className="car-box relative h-full">
                  <div
                    onClick={() => navigate(post.link)}
                    className="cursor-pointer"
                  >
                    <div className="img-box h-full">
                      <img
                        src={post.img}
                        alt=""
                        className=" w-full h-full rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black  bg-opacity-50 p-4 flex flex-col justify-end">
                        <p className="img-details-pp text-white font-poppins text-lg font-bold">
                          {post.title}
                        </p>
                        <div className="blog-category-text w-full md:w-full lg:w-2/5 bg-gradient-to-r from-lime-400 to-green-700 rounded-r-lg mt-4">
                          <p className="text-white text-xs text-center flex items-center justify-center">
                            <img
                              src="https://yousave.ai/img/clock.png"
                              alt=""
                              className="mr-2"
                            />{" "}
                            {post.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
