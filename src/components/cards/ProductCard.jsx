import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { generateUrlName } from "utils";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [showQuickView, setShowQuickView] = useState(false);

  const handleQuickView = () => {
    setShowQuickView(!showQuickView);
  };

  return (
    <>
      <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 relative">
        <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg">
          <div
            className="flex-grow cursor-pointer p-4"
            onClick={() =>
              navigate(
                `/product/${generateUrlName(product.title)}/${
                  product.product_id
                }`
              )
            }
          >
            <div className="h-48 w-full flex justify-center items-center">
              <img
                className="w-4/5 pt-2 object-contain"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <div className="flex flex-col sm:flex-row items-center text-lg font-semibold mb-2">
                <div
                  className="w-full sm:flex-grow cursor-pointer text-inherit no-underline text-xs md:text-sm text-center sm:text-left"
                  onClick={() => navigate(`/product/${product.product_id}`)}
                >
                  {product.title}
                </div>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-red-500 mt-2 sm:mt-0 sm:ml-2"
                />
              </div>
              <div className="text-center font-bold mb-2 text-xs md:text-sm lg:text-base">
                {product.price}
              </div>
            </div>
            <div className="mt-auto relative">
              <div className="text-center mb-2 w-full">
                {product.number_of_comparisons} Stores
              </div>
              <div
                className="text-center cursor-pointer w-full"
                onClick={handleQuickView}
              >
                Quick View
              </div>
              {showQuickView && (
                <div className="quick-view-div absolute w-full bg-gray-100 rounded-lg p-4 pt-10 shadow-lg z-10 text-center top-full mt-4 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-sm">Best Offer: {product.price}</h4>
                  <h4 className="text-sm">{product.store}</h4>
                  <div className="review-stars my-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="star-icon text-yellow-500">
                        ☆
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-2 text-sm">Free Shipping</h3>
                  <h3 className="mt-2 text-sm">
                    Available at: <a href={product.storeLink}>1 Store</a>
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    number_of_comparisons: PropTypes.string.isRequired,
    store: PropTypes.string.isRequired,
    storeLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
