import React from 'react';

const ProductList = () => {
  const toggleFilter = () => {
    document.getElementById('filterMobile').classList.toggle('hidden');
  };

  return (
    <div className="w-full lg:w-3/5">
      {/* Mobile & Tablet Only */}
      <div className="lg:hidden my-4">
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={toggleFilter}>
            Filter With
            <span>
              <img src="img/caret-down.png" alt="" className="inline ml-2" id="filter-with-button" />
            </span>
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Sort By
            <span>
              <img src="img/caret-down.png" alt="" className="inline ml-2" />
            </span>
          </button>
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-xl font-bold">
          <span id="searchQuery">iphone 16 (420 results)</span>
        </h4>
      </div>

      <div className="flex flex-wrap">
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="flex flex-col h-104 bg-white border border-gray-200 rounded-lg">
            <a href="Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488" className="flex-grow">
              <div className="p-4">
                <img
                  className="w-full h-auto"
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTISC-XXBNAYBhkSpIwhJIgxkJpQgIBV4VF17bTnksU3iug4IrbUU7Huml8mcMXedHWTHaKkuCYxwTJZdvBJZ1NGS_f-Zu6H-1t-j-XJW6E3iFmUjuiZFOGVw&usqp=CAE"
                  alt="Product"
                />
              </div>
            </a>
            <div className="p-4">
              <h5 className="flex items-center text-lg font-semibold mb-2">
                <a
                  href="Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488"
                  className="flex-grow"
                >
                  Apple iPhone 15 Pro Max - 256 GB - Blue Titanium -...
                </a>
                <i className="fas fa-heart text-red-500"></i>
              </h5>
              <div className="text-xl font-bold mb-2">$1,199.99</div>
              <div className="flex justify-between">
                <p className="text-center">10+ Stores</p>
                <p className="text-center cursor-pointer">Quick View</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="flex flex-col h-104 bg-white border border-gray-200 rounded-lg">
            <a href="Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488" className="flex-grow">
              <div className="p-4">
                <img
                  className="w-full h-auto"
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTISC-XXBNAYBhkSpIwhJIgxkJpQgIBV4VF17bTnksU3iug4IrbUU7Huml8mcMXedHWTHaKkuCYxwTJZdvBJZ1NGS_f-Zu6H-1t-j-XJW6E3iFmUjuiZFOGVw&usqp=CAE"
                  alt="Product"
                />
              </div>
            </a>
            <div className="p-4">
              <h5 className="flex items-center text-lg font-semibold mb-2">
                <a
                  href="Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488"
                  className="flex-grow"
                >
                  Apple iPhone 15 Pro Max - 256 GB - Blue Titanium -...
                </a>
                <i className="fas fa-heart text-red-500"></i>
              </h5>
              <div className="text-xl font-bold mb-2">$1,199.99</div>
              <div className="flex justify-between">
                <p className="text-center">10+ Stores</p>
                <p className="text-center cursor-pointer">Quick View</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="flex flex-col h-104 bg-white border border-gray-200 rounded-lg">
            <a href="Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488" className="flex-grow">
              <div className="p-4">
                <img
                  className="w-full h-auto"
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTISC-XXBNAYBhkSpIwhJIgxkJpQgIBV4VF17bTnksU3iug4IrbUU7Huml8mcMXedHWTHaKkuCYxwTJZdvBJZ1NGS_f-Zu6H-1t-j-XJW6E3iFmUjuiZFOGVw&usqp=CAE"
                  alt="Product"
                />
              </div>
            </a>
            <div className="p-4">
              <h5 className="flex items-center text-lg font-semibold mb-2">
                <a
                  href="Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488"
                  className="flex-grow"
                >
                  Apple iPhone 15 Pro Max - 256 GB - Blue Titanium -...
                </a>
                <i className="fas fa-heart text-red-500"></i>
              </h5>
              <div className="text-xl font-bold mb-2">$1,199.99</div>
              <div className="flex justify-between">
                <p className="text-center">10+ Stores</p>
                <p className="text-center cursor-pointer">Quick View</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="flex flex-col h-104 bg-white border border-gray-200 rounded-lg">
            <a href="Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488" className="flex-grow">
              <div className="p-4">
                <img
                  className="w-full h-auto"
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTISC-XXBNAYBhkSpIwhJIgxkJpQgIBV4VF17bTnksU3iug4IrbUU7Huml8mcMXedHWTHaKkuCYxwTJZdvBJZ1NGS_f-Zu6H-1t-j-XJW6E3iFmUjuiZFOGVw&usqp=CAE"
                  alt="Product"
                />
              </div>
            </a>
            <div className="p-4">
              <h5 className="flex items-center text-lg font-semibold mb-2">
                <a
                  href="Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488"
                  className="flex-grow"
                >
                  Apple iPhone 15 Pro Max - 256 GB - Blue Titanium -...
                </a>
                <i className="fas fa-heart text-red-500"></i>
              </h5>
              <div className="text-xl font-bold mb-2">$1,199.99</div>
              <div className="flex justify-between">
                <p className="text-center">10+ Stores</p>
                <p className="text-center cursor-pointer">Quick View</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full mt-4">
        <nav aria-label="Page navigation">
          <ul className="flex justify-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                <span className="fa fa-chevron-left" aria-hidden="true"></span>
              </a>
            </li>
            <li className="page-item">
              <p className="mx-3 my-0">Page 1 of 7</p>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span className="fa fa-chevron-right" aria-hidden="true"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductList;
