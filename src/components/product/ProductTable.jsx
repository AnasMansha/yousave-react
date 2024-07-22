import React, { useState } from "react";

const ProductTable = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="product-table block w-full mt-5">
      <div className="filter-button-mobile mb-4">
        <button
          id="filterButton"
          onClick={toggleFilter}
          className="bg-gray-200 px-4 py-2 rounded-md flex items-center"
        >
          Filter with{" "}
          <span>
            <img
              src="img/caret-down.png"
              alt=""
              id="filter-with-button"
              className={`ml-2 transition-transform ${
                showFilter ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <table className="w-full border-collapse mt-5 font-sans text-base font-bold text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Seller</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2 td-productcondition">Condition</th>
            <th className="px-4 py-2">Shipping</th>
            <th className="px-4 py-2">
              <a href="#review">Reviews</a>
            </th>
            <th className="px-4 py-2">
              Sort By:{" "}
              <span>
                <select
                  id="select_options"
                  className="border-0 bg-gray-200 rounded"
                >
                  <option value="Price">Price</option>
                  <option value="Reviews">Reviews</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Price+Shipping">Price + Shipping</option>
                </select>
              </span>
            </th>
          </tr>
        </thead>
        <tbody id="sellerTableBody">
          <tr className="product_image_slider">
            <td className="px-4 py-2">
              <a
                target="_blank"
                href="https://www.amazon.com/Apple-iPhone-11-64GB-White/dp/B07ZPJW2XH?source=ps-sl-shoppingads-lpcontext&amp;ref_=fplfs&amp;psc=1&amp;smid=A1IDGLU7MC87O4&amp;opi=95576897&amp;sa=U&amp;ved=0ahUKEwiL1e7WgLuHAxUB5ckDHf2yDv8Q2ykIHQ&amp;usg=AOvVaw2jorDHmC_KHpmo2CnJjJ-j"
                style={{ color: "black" }}
              >
                Amazon
              </a>
            </td>
            <td className="px-4 py-2">$211.86</td>
            <td className="px-4 py-2 td-productcondition">Refurbished</td>
            <td className="px-4 py-2">Free delivery</td>
            <td className="px-4 py-2">
              <div className="review-stars">
                <span className="star-icon text-gray-400">☆</span>
                <span className="star-icon text-gray-400">☆</span>
                <span className="star-icon text-gray-400">☆</span>
                <span className="star-icon text-gray-400">☆</span>
                <span className="star-icon text-gray-400">☆</span>
              </div>
            </td>
            <td className="px-4 py-2 relative">
              <a
                target="_blank"
                href="#"
                className="text-blue-600 underline cursor-pointer"
              >
                Buy Now
              </a>
              {/* <div className="absolute top-0 right-0 flex items-center">
                <img
                  src="img/bestPriceLogo.png"
                  className="best-save-img"
                  alt="Best Price"
                />
                <div className="best-save-div z-10">
                  <div className="best-save-top-text">Best Total Price</div>
                  <div className="best-save-bottom-text">You Save $308.13</div>
                </div>
              </div> */}
            </td>
          </tr>
          {/* Repeat similar <tr> for other sellers */}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
