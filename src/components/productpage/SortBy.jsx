import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faRotateRight, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const SortBy = () => {
  const closeSort = () => {
    document.getElementById('sortMobile').classList.add('hidden');
    document.getElementById('sortOverlay').classList.add('hidden');
  };

  return (
    <div className="w-full lg:w-1/5 mt-8 lg:mt-0">
      <div id="sortOverlay" className="hidden fixed inset-0 bg-black bg-opacity-60 z-50 lg:hidden"></div>
      <div
        id="sortMobile"
        className="hidden lg:block fixed inset-0 lg:static lg:mt-0 lg:w-full lg:mx-auto bg-white text-black border border-gray-200 rounded-t-2xl lg:rounded-none lg:rounded-r-lg lg:rounded-tl-lg p-4 z-50 lg:p-4 filter-space-responsive"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center font-bold">
            <div>Sort By</div>
          </div>
          <div className="flex space-x-2">
            <div className="ClearFilterdiv">
              <FontAwesomeIcon icon={faRotateRight} />
            </div>
            <div className="ClearFilterdiv">
              <FontAwesomeIcon icon={faCaretUp} />
            </div>
            <div className="ClearFilterdiv lg:hidden" onClick={closeSort} id="hide-sort">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SortBy;
