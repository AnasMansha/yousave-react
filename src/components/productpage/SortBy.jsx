import React from 'react';

const SortBy = () => {
  const closeSort = () => {
    document.getElementById('sortMobile').classList.add('hidden');
  };

  return (
    <div className="w-full lg:w-1/5 mt-8 lg:mt-0">
      <div id="sortMobile" className="hidden lg:block p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="font-bold">Sort By</h2>
          <button type="button" className="text-red-500" onClick={closeSort}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="mb-4">
          <select
            className="w-full p-2 border border-gray-300 rounded"
            aria-label="Default select example"
            id="sortBySelect"
          >
            <option selected>Sort By</option>
            <option value="1">Price (Low to High)</option>
            <option value="2">Price (High to Low)</option>
            <option value="3">A - Z</option>
            <option value="4">Reviews</option>
          </select>
        </div>
        <div className="mb-4" id="relatedDetails">
          <p className="font-bold">
            Related Deals{' '}
            <span>
              <img src="https://yousave.ai/img/caret-down.png" alt="Caret Down" />
            </span>
          </p>
          <div className="product-list h-6">
            <p className="text-center text-red-500">No Related Deals!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
