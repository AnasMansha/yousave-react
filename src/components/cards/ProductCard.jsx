import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { generateUrlName } from "utils";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [showQuickView, setShowQuickView] = useState(false);

  const handleQuickView = () => {
    setShowQuickView(!showQuickView);
  };

  debugger;

  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 relative">
      <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg">
        <div
          className="cursor-pointer px-4"
          onClick={() =>
            navigate(
              `/product/${generateUrlName(product.title)}/${product.product_id}`
            )
          }
        >
          <div className="h-48 w-full flex justify-center items-center">
            <img
              className="w-full h-full object-contain"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div className="flex flex-col sm:flex-row text-lg font-semibold mb-2">
            <div
              className="w-full sm:flex-grow cursor-pointer text-inherit no-underline text-xs md:text-sm text-center sm:text-left"
              onClick={() => navigate(`/product/${product.product_id}`)}
            >
              {product.title.substring(0, 50) +
                (product?.title?.length > 50 ? "..." : "")}
            </div>
          </div>

          <div className="mt-auto relative">
            <div className="text-center font-bold mb-2 text-xs md:text-sm lg:text-base">
              {product.price}
            </div>
            <div className="text-center mb-2 w-full">
              {product.number_of_comparisons || 1} Store
              {product.number_of_comparisons && "s"}
            </div>
            <div
              className="text-center cursor-pointer w-full select-none"
              onClick={handleQuickView}
            >
              Quick View
            </div>
            {showQuickView && (
              <div className="absolute w-full bg-gray-100 rounded-lg p-4 box-shadow z-10 text-center top-full mt-4 left-1/2 transform -translate-x-1/2">
                <div>
                  Best Offer: <b>{product.price}</b>
                </div>
                <a className="cursor-pointer" href={product.link}>
                  {product.source.includes("Amazon")
                    ? "Amazon"
                    : product.source}
                </a>
                <div className="review-stars my-2">
                  {product.rating &&
                    Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className="star-icon"
                        style={{
                          color:
                            index < Math.floor(product.rating)
                              ? "rgb(255, 153, 0)"
                              : "gray",
                        }}
                      >
                        ★
                      </span>
                    ))}
                </div>
                <h3>Free Shipping</h3>
                <h3>
                  Available at: <a href={product.link}>1 Store</a>
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
