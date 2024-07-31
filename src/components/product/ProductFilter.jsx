import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import FilterButton from "components/common/FilterButton";
import ProductDataContext from "contexts/ProductDataContext";
import { getPreferences } from "utils/apis/prefrences";

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
  const initialState = {
    stores: [],
    conditions: [],
    shipping: "all",
    minPrice: null,
    maxPrice: null,
    reviews: [false, false, false, false, false],
  };

  const [filters, setFilters] = useState(initialState);

  const { productComparisons } = useContext(ProductDataContext);

  let names, conditions;
  if (productComparisons && productComparisons.length) {
    names = extractUniqueNames(productComparisons);
    conditions = extractUniqueConditions(productComparisons);
  }

  const applyFilters = () => {
    setComparisonFilters({ ...filters });
  };

  const clearFilters = () => {
    const storeInputs = Array.from(
      document.querySelectorAll('input[id^="filter-store-"]')
    );

    storeInputs.forEach((input) => {
      input.checked = false;
    });

    const conditionInputs = Array.from(
      document.querySelectorAll('input[id^="filter-condition-"]')
    );

    conditionInputs.forEach((input) => {
      input.checked = false;
    });

    document.getElementById("filter-price-min").value = "";
    document.getElementById("filter-price-max").value = "";
    document.getElementById("filter-shipping").selectedIndex = 0;

    setFilters(initialState);
    setComparisonFilters(initialState);

    const reviewInputs = Array.from(
      document.querySelectorAll('input[id^="filter-review-"]')
    );
    reviewInputs.forEach((input) => {
      input.checked = false;
    });
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
    debugger;
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

  const updateShipping = (shipping) => {
    filters.shipping = shipping;
    setFilters(filters);
  };

  const updatePrice = (price, isMin = true) => {
    if (isMin) filters.minPrice = price;
    else filters.maxPrice = price;
    setFilters(filters);
  };

  const updateReviews = (index) => {
    filters.reviews[index] = !filters.reviews[index];
    setFilters(filters);
  };

  const processStoreName = (name) => {
    if (name.toLowerCase().includes("amazon")) return "Amazon";
    return name;
  };

  const decapitalize = (str) => str.toLowerCase();

  useEffect(() => {
    const fetchPreferences = async () => {
      if (!localStorage.token) return;
      const preferences = await getPreferences();

      const stores = preferences.stores.map((store) => decapitalize(store));
      const conditions = preferences.conditions.map((condition) =>
        decapitalize(condition)
      );
      const minPrice = preferences.price_limits[0];
      const maxPrice = preferences.price_limits[1];

      const storeInputs = Array.from(
        document.querySelectorAll('input[id^="filter-store-"]')
      );

      storeInputs.forEach((input) => {
        const storeId = input.id.replace("filter-store-", "");
        const decapitalizedStoreId = decapitalize(storeId);

        const shouldCheck = stores.some((store) =>
          decapitalizedStoreId.includes(store)
        );

        if (shouldCheck) {
          input.checked = true;
          updateStore(storeId);
        }
      });

      const conditionInputs = Array.from(
        document.querySelectorAll('input[id^="filter-condition-"]')
      );

      conditionInputs.forEach((input) => {
        const condition = input.id.replace("filter-condition-", "");
        const decapitalizedCondition = decapitalize(condition);

        const shouldCheck = conditions.some((condition) =>
          decapitalizedCondition.includes(condition)
        );

        if (shouldCheck) {
          input.checked = true;
          updateCondition(condition);
        }
      });

      document.getElementById("filter-price-min").value = minPrice;
      document.getElementById("filter-price-max").value = maxPrice;

      updatePrice(minPrice, true);
      updatePrice(maxPrice, false);
    };

    if (productComparisons) fetchPreferences();
  }, [productComparisons]);

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
            <div className=" cursor-pointer mt-1" onClick={clearFilters}>
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
                    htmlFor={"filter-store-" + name}
                  >
                    {processStoreName(name)}
                  </label>
                </div>
              ))}
              <div className="mt-2 mb-3 text-center text-2xl font-semibold">
                Condition:
              </div>
              {conditions.map((condition) => (
                <div key={condition}>
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
                    htmlFor={"filter-condition-" + condition}
                  >
                    {condition}
                  </label>
                </div>
              ))}
              <div className="mt-2 mb-3 text-center text-2xl font-semibold">
                Shipping:
              </div>
              <div className="w-full flex justify-center my-2">
                <select
                  className="text-center cursor-pointer border-2 border-gray-600 rounded"
                  onChange={(e) => {
                    updateShipping(e.target.value);
                  }}
                  id="filter-shipping"
                >
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
                  onBlur={(e) => {
                    if (e.target.value === "") return updatePrice(null);
                    const price = Number(e.target.value);
                    if (price < 0) {
                      e.target.value = 0;
                      updatePrice(0);
                    } else if (filters.maxPrice && price > filters.maxPrice) {
                      e.target.value = filters.maxPrice;
                      updatePrice(filters.maxPrice);
                    } else updatePrice(price);
                  }}
                />
                <div className="mx-1">-</div>
                <input
                  className="w-2/5 border-2 border-gray-400 rounded px-1"
                  type="number"
                  id="filter-price-max"
                  min={0}
                  onBlur={(e) => {
                    if (e.target.value === "") return updatePrice(null, false);
                    const price = Number(e.target.value);
                    if (price < 0) {
                      e.target.value = 0;
                      updatePrice(0, false);
                    } else if (filters.minPrice && price < filters.minPrice) {
                      e.target.value = filters.minPrice;
                      updatePrice(filters.minPrice, false);
                    } else updatePrice(price, false);
                  }}
                />
              </div>
              <div className="mt-1 text-center text-lg">Reviews With</div>
              <div className="flex flex-col items-start mb-2">
                {[
                  { id: 1, label: "★★★★★" },
                  { id: 2, label: "★★★★" },
                  { id: 3, label: "★★★" },
                  { id: 4, label: "★★" },
                  { id: 5, label: "★" },
                ].map(({ id, label }, index) => (
                  <div key={id}>
                    <input
                      type="checkbox"
                      id={`filter-review-${id}`}
                      onChange={() => updateReviews(index)}
                    />
                    <label
                      className="text-orange-400 ml-1 select-none cursor-pointer"
                      htmlFor={`filter-review-${id}`}
                    >
                      {label}
                    </label>
                  </div>
                ))}
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
