import React from "react";
import ProductCard from "components/cards/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Products = ({
  products,
  title,
  totalProducts,
  pageData,
  setPageData,
}) => {
  const { currentPage, totalPages } = pageData;

  const openNextPage = () => {
    if (currentPage === totalPages) return;
    setPageData({ ...pageData, currentPage: currentPage + 1 });
  };
  const openPrevPage = () => {
    if (currentPage === 1) return;
    setPageData({ ...pageData, currentPage: currentPage - 1 });
  };

  const toggleFilter = () => {
    document.getElementById("filterMobile").classList.toggle("hidden");
    document.getElementById("filterOverlay").classList.toggle("hidden");
  };

  const toggleSort = () => {
    document.getElementById("sortMobile").classList.toggle("hidden");
    document.getElementById("sortOverlay").classList.toggle("hidden");
  };

  if (products.length === 0)
    return (
      <div className="flex flex-col items-center w-full lg:w-3/5">
        <div className="text-xl font-bold">Search Results for {title}</div>
        <div className="flex flex-wrap w-full">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full md:w-1/4 p-2">
              <div className="animate-pulse rounded-lg p-2">
                <div className="bg-gray-300 h-48 w-full mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-1/2 mx-auto"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-1/3 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <div className="w-full lg:w-7/12 p-4 md:p-6 lg:p-8">
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
              <img
                src="https://yousave.ai/img/caret-down.png"
                alt=""
                className="inline ml-2"
              />
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
      <div className="w-full mt-4 flex justify-center items-center">
        <div
          className={`p-1 cursor-pointer ${
            currentPage === 1 ? "text-gray-400" : "text-gray-600"
          } bg-white border border-gray-200 rounded-l-lg`}
          onClick={openPrevPage}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <p className="text-gray-600 mx-3 my-0 select-none">
          Page {currentPage} of {totalPages}
        </p>
        <div
          className={`p-1 cursor-pointer ${
            currentPage === totalPages ? "text-gray-400" : "text-gray-600"
          } bg-white border border-gray-200 rounded-r-lg`}
          onClick={openNextPage}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default Products;
