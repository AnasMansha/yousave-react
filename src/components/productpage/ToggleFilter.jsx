import React from 'react';

const Filter = () => {
  const closeFilter = () => {
    document.getElementById('filterMobile').classList.add('hidden');
  };

  return (
    <div className="w-full lg:w-1/5 mt-8 lg:mt-0">
      <div id="filterMobile" className="hidden lg:block w-full mx-auto p-4 bg-white text-black border border-gray-200 rounded lg:rounded-none lg:rounded-r-lg lg:rounded-tl-lg">
        <button
          id="prefrencesFilterButton"
          type="button"
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg mb-5"
        >
          Apply Preferences Filter
        </button>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center font-bold">
            <div>Filters</div>
            <button
              id="filterButtonsTop"
              type="button"
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg hidden lg:block"
            >
              Apply Filter
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              className="ClearFilterButton"
              id="close-filter"
            >
              <i className="fa fa-rotate-right"></i>
            </button>
            <button
              type="button"
              className="ClearFilterButton"
              id="hide-filter"
            >
              <i className="fa fa-caret-up"></i>
            </button>
            <button
              type="button"
              className="ClearFilterButton lg:hidden"
              onClick={closeFilter}
              id="hide-filter"
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
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
            <label className="form-check-label" htmlFor="mr:1,price:1,ppr_max:50">
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
            <label className="form-check-label" htmlFor="mr:1,price:1,ppr_min:50,ppr_max:100">
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
            <label className="form-check-label" htmlFor="mr:1,price:1,ppr_min:100,ppr_max:250">
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
            <label className="form-check-label" htmlFor="mr:1,merchagg:g8299768%7Cm117089458%7Cm117079928">
              Walmart - UPGRADE SOLUTION INC
            </label>
          </div>
        </div>
        <div className="mt-5">
          <button
            id="filterButtons"
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
