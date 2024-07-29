import React from "react";
import ProductCard from "components/cards/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Products = ({ products, title, totalProducts }) => {
  const toggleFilter = () => {
    document.getElementById("filterMobile").classList.toggle("hidden");
    document.getElementById("filterOverlay").classList.toggle("hidden");
  };

  const toggleSort = () => {
    document.getElementById("sortMobile").classList.toggle("hidden");
    document.getElementById("sortOverlay").classList.toggle("hidden");
  };

  return (
    <div className="w-full lg:w-3/5 p-4 md:p-6 lg:p-8">
      {/* Mobile & Tablet Only */}
      <div className="lg:hidden my-4">
        <div className="flex justify-between">
          <button
            className="flex items-center bg-white text-black font-medium text-xs border border-gray-300 py-2 px-4 rounded"
            onClick={toggleFilter}
          >
            Filter With
            <span>
              <img
                src="https://yousave.ai/img/caret-down.png"
                alt=""
                className="inline ml-2"
                id="filter-with-button"
              />
            </span>
          </button>
          <button
            className="flex items-center bg-white text-black font-medium text-xs border border-gray-300 py-2 px-4 rounded"
            onClick={toggleSort}
          >
            Sort By
            <span>
              <img src="https://yousave.ai/img/caret-down.png" alt="" className="inline ml-2" />
            </span>
          </button>
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-xl font-bold">
          <span id="searchQuery">
            {title} ({totalProducts} results)
          </span>
        </h4>
      </div>

      <div className="flex flex-wrap">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="w-full mt-4">
        <nav aria-label="Page navigation">
          <ul className="flex justify-center items-center">
            <li className="page-item">
              <a
                className="page-link text-gray-400 cursor-not-allowed bg-white border border-gray-200 rounded-l-lg"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
            </li>
            <li className="page-item mx-3 my-0">
              <p className="text-gray-600">Page 1 of 7</p>
            </li>
            <li className="page-item">
              <a
                className="page-link text-gray-600 bg-white border border-gray-200 rounded-r-lg"
                href="#"
                aria-label="Next"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Products;
