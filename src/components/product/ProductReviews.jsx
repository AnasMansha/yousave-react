import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { getReviews } from "utils/apis/product";

const ProductReviews = () => {
  const { productId = null } = useParams();
  const [reviewsData, setReviewsData] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(productId);
        setReviewsData(reviews);
      } catch (e) {}
    };

    if (!productId) return;
    fetchReviews();
  }, [productId]);

  return (
    <section id="review" className="mt-20">
      <div className="mx-auto px-4">
        <h2 className="text-center font-bold text-2xl lg:text-3xl mb-8">
          Reviews
        </h2>

        <div className="review-box bg-blue-200 bg-opacity-25 rounded-tl-lg rounded-tr-none rounded-bl-none rounded-br-none p-8 w-4/5 lg:w-full mx-auto mb-8">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 text-center lg:border-r lg:border-black">
              <div className="review-by text-center lg:text-left">
                <h2
                  id="total_reviews"
                  className="text-5xl font-bold text-center"
                >
                  {reviewsData?.product_results?.rating || "0.00"}
                </h2>
                <div
                  className="reviews-star flex justify-center lg:justify-start mt-2"
                  id="reviewsStars"
                >
                  {/* Stars will be dynamically added here */}
                </div>
                <p className="review-p mt-2 text-center">
                  From{" "}
                  <b id="total_review_count">
                    {reviewsData?.product_results?.reviews || 0}
                  </b>{" "}
                  reviewers
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="review-raiting ">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div className="flex items-center my-2">
                   <div className="w-1/5 text-center">
                      <span className="review-p1 text-[0.7rem] sm:text-s md:text-xl">
                        {reviewsData?.rating?.[stars - 1].amount || 0}
                      </span>
                    </div>
                    <div className="w-4/5 flex justify-start ">
                      {[...Array(stars)].map((_, index) => (
                        <span
                          key={index}
                          className="reviews-iconi text-yellow-500 text-base sm:text-lg md:text-xl"
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
