import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faRotateRight,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import FilterButton from "components/common/FilterButton";
import ProductDataContext from "contexts/ProductDataContext";

const extractUniqueNames = (productComparisons) => {
  const names = productComparisons
    .map((comparison) => comparison.name || "None")
    .filter((name) => name !== "None");
  return [...new Set(names)];
};

const extractUniqueConditions = (productComparisons) => {
  const conditions = ["New"];

  for (let i = 0; i < productComparisons.length; i += 1) {
    const condition = productComparisons[i].condition || "New";

    if (!conditions.includes(condition)) {
      conditions.push(condition);
    }
  }

  return conditions;
};

const ProductFilter = ({ setComparisonFilters }) => {
  const closeFilter = () => {
    document.getElementById("filterMobile").classList.add("hidden");
    document.getElementById("filterOverlay").classList.add("hidden");
  };

  const [filters, setFilters] = useState({
    stores: [],
    conditions: [],
    shipping: null,
    minPrice: null,
    maxPrice: null,
    reviews: [],
  });

  const { productData, productComparisons } = useContext(ProductDataContext);

  let names, conditions;
  if (productComparisons && productComparisons.length) {
    names = extractUniqueNames(productComparisons);
    conditions = extractUniqueConditions(productComparisons);
  }

  const applyFilters = () => {
    setComparisonFilters({ ...filters });
  };

  const updateStore = (store) => {
    const stores = filters.stores;

    const index = stores.indexOf(store);

    if (index === -1) {
      stores.push(store);
    } else {
      stores.splice(index, 1);
    }

    filters.stores = stores;
    setFilters(filters);
  };

  const updateCondition = (condition) => {
    const conditions = filters.conditions;

    const index = conditions.indexOf(condition);

    if (index === -1) {
      conditions.push(condition);
    } else {
      conditions.splice(index, 1);
    }

    filters.conditions = conditions;
    setFilters(filters);
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
          className="hidden lg:block fixed inset-0 lg:static lg:mt-0 lg:w-full lg:mx-auto bg-white text-black border border-gray-200 rounded-t-2xl lg:rounded-none lg:rounded-r-lg lg:rounded-tl-lg p-6 z-50 lg:p-6 filter-space-responsive"
        >
          <div className="w-full flex justify-between px-2 mb-2">
            <div className="text-lg font-bold">Filters</div>
            <div className=" cursor-pointer mt-1">
              <FontAwesomeIcon icon={faRotateRight} />
            </div>
          </div>
          {productComparisons ? (
            <div id="product-filters">
              <FilterButton text="Filter" onClick={applyFilters} />
              <div className="mt-2 mb-3 text-center text-2xl font-semibold">
                Stores:
              </div>
              {names.map((name) => (
                <div key={name}>
                  <input
                    type="checkbox"
                    label="Mango"
                    id={"filter-store-" + name}
                    onChange={(e) =>
                      updateStore(e.target.id.replace("filter-store-", ""))
                    }
                  />
                  <label
                    className="ml-1 cursor-pointer select-none"
                    for={"filter-store-" + name}
                  >
                    {name}
                  </label>
                </div>
              ))}
              <div className="mt-2 mb-3 text-center text-2xl font-semibold">
                Condition:
              </div>
              {conditions.map((condition) => (
                <div>
                  <input
                    type="checkbox"
                    label="Mango"
                    id={"filter-condition-" + condition}
                    onChange={(e) =>
                      updateCondition(
                        e.target.id.replace("filter-condition-", "")
                      )
                    }
                  />
                  <label
                    className="ml-1 cursor-pointer select-none"
                    for={"filter-condition-" + condition}
                  >
                    {condition}
                  </label>
                </div>
              ))}
              <div className="mt-2 mb-3 text-center text-2xl font-semibold">
                Shipping:
              </div>
              <div className="w-full flex justify-center my-2">
                <select className="text-center cursor-pointer border-2 border-gray-600 rounded">
                  <option value="all">All</option>
                  <option value="free">Free Delivery</option>
                  <option value="paid">Paid Delivery</option>
                </select>
              </div>
              <div className="mt-2 mb-3 text-center text-2xl font-semibold">
                Data:
              </div>
              <div className="mt-1 text-center text-lg">Price With</div>
              <div className="my-2 flex justify-center">
                <input
                  className="w-2/5 border-2 border-gray-400 rounded px-1"
                  type="number"
                  id="filter-price-min"
                  min={0}
                />
                <div className="mx-1">-</div>
                <input
                  className="w-2/5 border-2 border-gray-400 rounded px-1"
                  type="number"
                  id="filter-price-max"
                  min={0}
                />
              </div>
              <div className="mt-1 text-center text-lg">Reviews With</div>
              <div className="flex flex-col items-start mb-2">
                <div>
                  <input type={"checkbox"} id="filter-review-1" />
                  <label
                    className="text-orange-400 ml-1 select-none"
                    for="filter-review-1"
                  >
                    ★★★★★
                  </label>
                </div>
                <div>
                  <input type={"checkbox"} id="filter-review-2" />
                  <label
                    className="text-orange-400 ml-1 select-none"
                    for="filter-review-2"
                  >
                    ★★★★
                  </label>
                </div>
                <div>
                  <input type={"checkbox"} id="filter-review-3" />
                  <label
                    className="text-orange-400 ml-1 select-none"
                    for="filter-review-3"
                  >
                    ★★★
                  </label>
                </div>
                <div>
                  <input type={"checkbox"} id="filter-review-4" />
                  <label
                    className="text-orange-400 ml-1 select-none"
                    for="filter-review-4"
                  >
                    ★★
                  </label>
                </div>
                <div>
                  <input type={"checkbox"} id="filter-review-5" />
                  <label
                    className="text-orange-400 ml-1 select-none"
                    for="filter-review-5"
                  >
                    ★
                  </label>
                </div>
              </div>
              <FilterButton text={"Filter"} onClick={applyFilters} />
            </div>
          ) : productComparisons?.length === 0 ? null : (
            <div className="animate-pulse h-[400px] bg-gray-300 rounded"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
