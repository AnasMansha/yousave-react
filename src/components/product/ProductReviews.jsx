import React from "react";

const ProductReviews = () => {
  return (
    <section id="review" className="mt-20">
      <div className="mx-auto px-4">
        <h2 className="text-center font-bold text-2xl lg:text-3xl mb-8">Reviews</h2>

        <div className="review-box bg-blue-200 bg-opacity-25 rounded-tl-lg rounded-tr-none rounded-bl-none rounded-br-none p-8 w-4/5 lg:w-full mx-auto mb-8">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 border-r border-black text-center">
              <div className="review-by text-center lg:text-left">
                <h2 id="total_reviews" className="text-5xl font-bold text-center">0.0</h2>
                <div className="reviews-star flex justify-center lg:justify-start mt-2" id="reviewsStars">
                  {/* Stars will be dynamically added here */}
                </div>
                <p className="review-p mt-2 text-center">
                  From <b id="total_review_count ">0</b> reviewers
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="review-raiting ">
                {[
                  { countId: "review-5-count", stars: 5 },
                  { countId: "review-4-count", stars: 4 },
                  { countId: "review-3-count", stars: 3 },
                  { countId: "review-2-count", stars: 2 },
                  { countId: "review-1-count", stars: 1 },
                ].map(({ countId, stars }) => (
                  <div className="flex items-center my-2" key={countId}>
                    <div className="w-1/5 text-center">
                      <span className="review-p1 text-xl" id={countId}>0</span>
                    </div>
                    <div className="w-4/5">
                      {[...Array(stars)].map((_, index) => (
                        <span
                          key={index}
                          className="reviews-iconi text-yellow-500 text-2xl"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="review-boxes">
          {/* Additional review boxes will be dynamically added here */}
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
