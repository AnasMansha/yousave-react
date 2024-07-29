import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SortBy = ({ setSort }) => {
  const closeSort = () => {
    document.getElementById("sortMobile").classList.add("hidden");
    document.getElementById("sortOverlay").classList.add("hidden");
  };

  return (
    <div className="w-full lg:w-1/5 mt-8 lg:mt-0 pt-8">
      <div
        id="sortOverlay"
        className="hidden fixed inset-0 bg-black bg-opacity-60 z-50 lg:hidden"
      ></div>
      <div
        id="sortMobile"
        className="hidden lg:block fixed inset-0 lg:static lg:mt-0 lg:w-full lg:mx-auto bg-white text-black rounded-t-2xl lg:rounded-none lg:rounded-r-lg lg:rounded-tl-lg p-4 z-50 lg:p-4 filter-space-responsive"
      >
        <div className="flex flex-col justify-between items-center">
          <div
            className="flex lg:hidden justify-end w-full cursor-pointer mb-4"
            onClick={closeSort}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="lg:hidden text-xl mb-4 w-full">Sort By</div>
          <select
            className="border-2 border-gray-300 rounded text-center cursor-pointer"
            onChange={(e) => {
              const sort = Number(e.currentTarget.value);
              setSort(sort);
            }}
          >
            <option selected value="0">
              Sort By
            </option>
            <option value="1">Price (Low to High)</option>
            <option value="2">Price (High to Low)</option>
            <option value="3">A - Z </option>
            <option value="4">Reviews</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
