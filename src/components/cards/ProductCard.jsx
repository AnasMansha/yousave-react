import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="flex flex-col h-104 bg-white border border-gray-200 rounded-lg">
        <a href={product.link} className="flex-grow">
          <div className="p-4">
            <img
              className="w-full h-auto"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
        </a>
        <div className="p-4">
          <h5 className="flex items-center text-lg font-semibold mb-2">
            <a href={product.link} className="flex-grow">
              {product.title}
            </a>
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </h5>
          <div className="text-xl font-bold mb-2">{product.price}</div>
          <div className="flex justify-between">
            <p className="text-center">
              {product.number_of_comparisons} Stores
            </p>
            <p className="text-center cursor-pointer">Quick View</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stores: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
