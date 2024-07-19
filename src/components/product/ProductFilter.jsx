import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTimes,
  faRotateRight,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

const ProductFilter = () => {
  const closeFilter = () => {
    document.getElementById("filterMobile").classList.add("hidden");
    document.getElementById("filterOverlay").classList.add("hidden");
  };

  return (
    <>
      <div className="w-full lg:w-1/5 mt-8 lg:mt-0 pt-8">
        <div
          id="filterOverlay"
          className="hidden fixed inset-0 bg-black bg-opacity-60 z-50 lg:hidden"
        ></div>
        <div
          id="filterMobile"
          className="hidden lg:block fixed inset-0 lg:static lg:mt-0 lg:w-full lg:mx-auto bg-white text-black border border-gray-200 rounded-t-2xl lg:rounded-none lg:rounded-r-lg lg:rounded-tl-lg p-4 z-50 lg:p-4 filter-space-responsive"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center font-bold">
              <div>Filters</div>
            </div>
            <div className="flex space-x-2">
              <div type="div" className="ClearFilterdiv">
                <FontAwesomeIcon icon={faRotateRight} />
              </div>
              <div className="ClearFilterdiv">
                <FontAwesomeIcon icon={faCaretUp} />
              </div>
              <div
                className="ClearFilterdiv lg:hidden"
                onClick={closeFilter}
                id="hide-filter"
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-bold">Show only</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="mr:1,sales:1"
              />
              <label className="form-check-label" htmlFor="mr:1,sales:1">
                On sale
              </label>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-bold">Price</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="mr:1,price:1,ppr_max:50"
              />
              <label
                className="form-check-label"
                htmlFor="mr:1,price:1,ppr_max:50"
              >
                Up to $50
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="mr:1,price:1,ppr_min:50,ppr_max:100"
              />
              <label
                className="form-check-label"
                htmlFor="mr:1,price:1,ppr_min:50,ppr_max:100"
              >
                $50 – $100
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="mr:1,price:1,ppr_min:100,ppr_max:250"
              />
              <label
                className="form-check-label"
                htmlFor="mr:1,price:1,ppr_min:100,ppr_max:250"
              >
                $100 – $250
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="mr:1,merchagg:g8299768%7Cm117089458%7Cm117079928"
              />
              <label
                className="form-check-label"
                htmlFor="mr:1,merchagg:g8299768%7Cm117089458%7Cm117079928"
              >
                Walmart - UPGRADE SOLUTION INC
              </label>
            </div>
          </div>
          <div className="mt-5">
            <div
              id="filterdivs"
              type="div"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Apply Filter
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductFilter;
