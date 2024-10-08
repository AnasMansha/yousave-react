import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faRotateRight,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import FilterButton from "components/common/FilterButton";

const Filters = ({ filters, activeFilters, applyFilter, applyPrefrences }) => {
  const [showFilter, setShowFilter] = useState(true);

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

  const handleClearFilters = () => {
    activeFilters.current.clear();
    const filterGroups = document.getElementsByClassName("filter-group");

    Array.from(filterGroups).forEach((filterGroup) => {
      const inputs = filterGroup.getElementsByTagName("input");

      Array.from(inputs).forEach((input) => {
        input.checked = false;
      });
    });
  };
  return (
    <div className="w-full lg:w-[20%] md:mt-8 lg:mt-0 pt-0 md:pt-20 ml-2">
      <div
        id="filterOverlay"
        className="hidden fixed inset-0 bg-black bg-opacity-60 z-50 lg:hidden"
      ></div>
      <div
        id="filterMobile"
        className="overflow-y-auto hidden lg:block fixed inset-0 lg:static lg:mt-0 lg:w-full lg:mx-auto bg-white text-black border border-gray-200 rounded-t-2xl lg:rounded-none lg:rounded-r-lg lg:rounded-tl-lg z-50 filter-space-responsive"
      >
        {localStorage.token && applyPrefrences && (
          <div
            id="prefrencesFilterdiv"
            type="div"
            className="bg-indigo-600 text-sm text-white py-2 px-2 text-center rounded-lg mb-4 m-1 cursor-pointer"
            onClick={applyPrefrences}
          >
            Apply Preferences Filter
          </div>
        )}
        <div className="flex justify-between items-center mb-4 ml-1 mt-2">
          <div className="flex items-center font-bold">
            <div>Filters</div>
            <FilterButton
              text="Apply Filter"
              onClick={applyFilter}
              className="mx-2 text-sm"
            />
          </div>
          <div className="flex space-x-2">
            {/* <div
              className="cursor-pointer hidden lg:block"
              onClick={handleClearFilters}
            >
              <FontAwesomeIcon icon={faRotateRight} />
            </div>
            <div
              className="cursor-pointer hidden lg:block"
              onClick={() => setShowFilter(!showFilter)}
            >
              <FontAwesomeIcon
                icon={showFilter ? faCaretUp : faCaretDown}
                className="w-5 h-5 select-none"
              />
            </div> */}
            <div className="lg:hidden" onClick={closeFilter} id="hide-filter">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
        <div
          className={`${
            showFilter
              ? "lg:max-h-[10000px] lg:opacity-100"
              : "lg:max-h-0 lg:opacity-0"
          } overflow-hidden transition-all duration-500 ml-1`}
        >
          {filters
            .filter((filter) => filter?.options?.[0]?.text)
            .map((filter, index) => (
              <div className="mt-4" id="filters" key={index}>
                <p className="font-bold mb-3">{filter.type}</p>
                {filter.options.map((option) => (
                  <div
                    className="form-check hover:bg-gray-200 filter-group"
                    key={option.tbs}
                  >
                    <input
                      className="form-check-input mr-1"
                      type="checkbox"
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
        </div>

        <div className="mt-5">
          <FilterButton text="Apply Filter" onClick={applyFilter} />
        </div>
      </div>
    </div>
  );
};
export default Filters;
