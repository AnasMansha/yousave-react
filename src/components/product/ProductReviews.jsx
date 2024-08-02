import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "utils/apis/product";
import ReviewList from "./ReviewCard";

const ProductReviews = () => {
  const { productId = null } = useParams();
  const [reviewsData, setReviewsData] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(productId);
        setReviewsData(reviews);
        debugger;
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

        <div className="review-box bg-[#E3F4FA] rounded-tl-3xl rounded-br-3xl p-8 w-4/5 mx-auto lg:w-full mb-8">
          <div className="flex flex-wrap">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 h-fit text-center lg:text-left lg:border-r lg:border-black lg:pr-8">
              <div className="review-by">
                <h2
                  className="text-5xl font-bold text-center lg:text-left md:ml-20"
                  id="total_reviews"
                >
                  {reviewsData?.product_results?.rating || "0.0"}
                </h2>
                <div
                  className="reviews-star flex justify-center lg:justify-start mt-2"
                  id="reviewsStars"
                >
                  {/* Stars will be dynamically added here */}
                </div>
                <p className="review-p mt-2 text-center lg:text-left md:ml-20">
                  From{" "}
                  <b id="total_review_count">
                    {reviewsData?.product_results?.reviews || 0}
                  </b>{" "}
                  reviewers
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 md:pl-10">
              <div className="review-rating">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div className="flex items-center my-6" key={stars}>
                    <div className="w-1/5 text-center">
                      <span className="review-p1 text-xs sm:text-sm md:text-lg">
                        {reviewsData?.rating?.[stars - 1].amount || 0}
                      </span>
                    </div>
                    <div className="w-4/5 flex">
                      {[...Array(stars)].map((_, index) => (
                        <span
                          key={index}
                          className="reviews-iconi text-[#FF9900] mr-1 text-base sm:text-lg md:text-xl"
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
      {reviewsData?.reviews?.length ? (
        <ReviewList reviews={reviewsData.reviews} />
      ) : null}
    </section>
  );
};

export default ProductReviews;
