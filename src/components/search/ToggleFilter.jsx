import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faRotateRight,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

const Filter = ({ filters, activeFilters, applyFilter, applyPrefrences }) => {
  const closeFilter = () => {
    document.getElementById("filterMobile").classList.add("hidden");
    document.getElementById("filterOverlay").classList.add("hidden");
  };

  const handleFilterSelect = (event) => {
    const { checked, id } = event.target;

    if (checked) {
      activeFilters.current.add(id);
    } else {
      activeFilters.current.delete(id);
    }
  };

  return (
    <div className="w-full lg:w-1/5 mt-8 lg:mt-0 pt-8">
      <div
        id="filterOverlay"
        className="hidden fixed inset-0 bg-black bg-opacity-60 z-50 lg:hidden"
      ></div>
      <div
        id="filterMobile"
        className="hidden lg:block fixed inset-0 lg:static lg:mt-0 lg:w-full lg:mx-auto bg-white text-black border border-gray-200 rounded-t-2xl lg:rounded-none lg:rounded-r-lg lg:rounded-tl-lg p-4 z-50 lg:p-4 filter-space-responsive"
      >
        <div
          id="prefrencesFilterdiv"
          type="div"
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg mb-5 cursor-pointer"
          onClick={applyPrefrences}
        >
          Apply Preferences Filter
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center font-bold">
            <div>Filters</div>
            <div
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg hidden lg:block cursor-pointer"
              onClick={applyFilter}
            >
              Apply Filter
            </div>
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
        {filters.map((filter) => (
          <div className="mt-4">
            <p className="font-bold mb-3">{filter.type}</p>
            {filter.options.map((option) => (
              <div className="form-check hover:bg-gray-200">
                <input
                  className="form-check-input mr-1"
                  type="checkbox"
                  value=""
                  id={option.tbs}
                  onChange={handleFilterSelect}
                />
                <label
                  className="form-check-label cursor-pointer select-none"
                  htmlFor={option.tbs}
                >
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        ))}

        <div className="mt-5">
          <div
            id="filterdivs"
            type="div"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer"
            onClick={applyFilter}
          >
            Apply Filter
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
