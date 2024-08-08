import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { generateUrlName } from "utils";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [showQuickView, setShowQuickView] = useState(false);
  const quickViewRef = useRef(null);
  const cardRef = useRef(null);

  const handleQuickView = () => {
    setShowQuickView(!showQuickView);
  };

  useEffect(() => {
    if (quickViewRef.current && cardRef.current) {
      const parentWidth = cardRef.current.offsetWidth;
      quickViewRef.current.style.width = `${parentWidth}px`;
    }
  }, [showQuickView]);

  return (
    <div
      ref={cardRef}
      className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 relative card-width"
    >
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
          <div className="flex flex-col sm:flex-row text-lg mb-2">
            <div
              className="w-full sm:flex-grow cursor-pointer text-inherit no-underline text-xs md:text-[16px] text-center sm:text-left font-medium leading-tight"
              onClick={() => navigate(`/product/${product.product_id}`)}
            >
              {product.title.substring(0, 50) +
                (product?.title?.length > 50 ? "..." : "")}
            </div>
          </div>

          <div className="mt-auto relative">
            <div className="text-center font-bold mb-2 text-sm md:text-base lg:text-lg">
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
            <div
              ref={quickViewRef}
              className={`quick-view-div ${
                showQuickView ? "opacity-100" : "opacity-0"
              } transition-opacity duration-200`}
              style={{
                top: "calc(85% + 20px)",
                left: "50%",
              }}
            >
              <h4 className="text-[15px] mt-[5%] font-semibold	">
                Best Offer: {product.price}
              </h4>
              <h4 className="text-[15px] mt-[5%] font-semibold">
                <a href={product.link}>{product.source}</a>
              </h4>
              <div className="review-stars my-2">
                {product.rating &&
                  Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="star-icon text-yellow-500">
                      {index < Math.floor(product.rating) ? "★" : "☆"}
                    </span>
                  ))}
              </div>
              <h3 className="text-[14px] mt-2">
                {product.delivery || "Free Shipping"}
              </h3>
              <h3 className="text-[14px] mt-2">
                Available at:{" "}
                <a href={product.link} className="font-semibold">
                  {product.number_of_comparisons || 1} Store
                  {product.number_of_comparisons && "s"}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
