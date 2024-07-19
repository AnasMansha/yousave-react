import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="flex flex-col h-104 bg-white border border-gray-200 rounded-lg">
        <div
          className="flex-grow cursor-pointer p-4"
          onClick={() => navigate(`/product/${product.product_id}`)}
        >
          <img
            className="w-full h-auto"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <div className="p-4">
          <div className="flex items-center text-lg font-semibold mb-2">
            <div
              className="flex-grow cursor-pointer"
              onClick={() => navigate(`/product/${product.product_id}`)}
            >
              {product.title}
            </div>
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </div>
          <div className="text-xl font-bold mb-2">{product.price}</div>
          <div className="flex justify-between">
            <div className="text-center">
              {product.number_of_comparisons} Stores
            </div>
            <div className="text-center cursor-pointer">Quick View</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    number_of_comparisons: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
