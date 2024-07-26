import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const saveComparisonApi = (product) => {
  try {
    // localStorage.setItem("product_api", product.serpapi_product_api);
    // localStorage.setItem(
    //   "product_api_comparisons",
    //   product.serpapi_product_api_comparisons
    // );
    var productAPIComparisons = {
      product_api: product.serpapi_product_api,
      product_api_comparisons: product.serpapi_product_api_comparisons,
    };
    var productAPIString = JSON.stringify(productAPIComparisons);
    localStorage.setItem(product.product_id, productAPIString);
  } catch (e) {
    return;
  }
};

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg">
        <div
          className="flex-grow cursor-pointer p-4"
          onClick={() => {
            saveComparisonApi(product);
            navigate(`/product/${product.product_id}`);
          }}
        >
          <div className="h-48 w-full flex justify-center">
            <img
              className="w-4/5 pt-2 object-contain"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center text-lg font-semibold mb-2">
              <div
                className="flex-grow cursor-pointer text-inherit no-underline text-base"
                onClick={() => navigate(`/product/${product.product_id}`)}
              >
                {product.title.substring(0, 50) +
                  (product?.title?.length > 50 ? "..." : "")}
              </div>
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            </div>
            <div className="text-xl text-center font-bold mb-2">
              {product.price}
            </div>
          </div>
          <div className="mt-auto">
            <div className="text-center mb-2 w-full">
              {product.number_of_comparisons} Stores
            </div>
            <div className="text-center cursor-pointer w-full">Quick View</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    number_of_comparisons: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
