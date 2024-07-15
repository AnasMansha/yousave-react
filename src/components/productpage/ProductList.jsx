import React from 'react';
import ProductCard from 'components/cards/ProductCard';

const products = [
  {
    link: 'Apple-iPhone-15-Pro-Max-256-GB-Blue-Titanium-TMobile/2846896857344116488',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTISC-XXBNAYBhkSpIwhJIgxkJpQgIBV4VF17bTnksU3iug4IrbUU7Huml8mcMXedHWTHaKkuCYxwTJZdvBJZ1NGS_f-Zu6H-1t-j-XJW6E3iFmUjuiZFOGVw&usqp=CAE',
    name: 'Apple iPhone 15 Pro Max - 256 GB - Blue Titanium -...',
    price: '$1,199.99',
    stores: '10+',
  },
  
  // Add more product objects here
];

const ProductList = () => {
  const toggleFilter = () => {
    document.getElementById('filterMobile').classList.toggle('hidden');
    document.getElementById('filterOverlay').classList.toggle('hidden');
  };

  const toggleSort = () => {
    document.getElementById('sortMobile').classList.toggle('hidden');
    document.getElementById('sortOverlay').classList.toggle('hidden');
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
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={toggleSort}>
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
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
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
