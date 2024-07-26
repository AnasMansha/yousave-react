import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Filters from "components/search/Filters";
import SortBy from "components/search/SortBy";
import Products from "components/search/Products";
import { useCallback, useEffect, useRef, useState } from "react";
import { search } from "utils/apis/product";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { toastOptions } from "constants";
import { getPreferences } from "utils/apis/prefrences";
import { DEFAULT_PREFRENCES } from "constants";
import { storeMerchants } from "constants";
import useGoogleAuth from "hooks/useGoogleAuth";

const Results = () => {
  const [searchData, setSearchData] = useState(null);

  const [prefrences, setPrefrences] = useState(null);

  const activeFilters = useRef(new Set());

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Extract query parameters

  const searchQuery = queryParams.get("q");

  const fetchProducts = useCallback(async () => {
    if (!searchQuery) return;
    setSearchData(null);
    const data = await search({ query: searchQuery });
    setSearchData(data);
  }, [searchQuery]);

  const applyFilter = useCallback(async () => {
    if (!searchQuery) return;
    const filtersList = [...activeFilters.current];
    if (!filtersList.length) return;
    setSearchData(null);
    const filters = filtersList.join(",");
    const searchPromise = search({ query: searchQuery, filters });
    toast.promise(
      searchPromise,
      {
        loading: "Applying filters",
        success: "Filters Applied",
        error: searchPromise.error || "Error applying filters!",
      },
      toastOptions
    );
    const data = await searchPromise;
    setSearchData(data);
  }, [searchQuery]);

  function getStoreFilter(storeName) {
    const storeData = storeMerchants;
    return storeData[storeName];
  }

  function getConditionFilter(condition) {
    const conditionData = {
      New: "new:1",
      Used: "new:3",
      "Open Box": "",
      Refurbished: "",
    };
    return conditionData[condition];
  }

  function hasStore(options, storeMerchantId) {
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].tbs.includes(storeMerchantId)) return true;
    }
    return false;
  }

  function generatePrefrencesFilter() {
    if (!prefrences || !searchData?.filters) return "";

    let filter = "mr:1,";
    const storesArrayObj = searchData.filters.find(
      (obj) => obj.type === "Seller"
    );
    const stores = prefrences.stores;
    if (storesArrayObj) {
      stores.forEach((store) => {
        const storeFilter = getStoreFilter(store);
        if (hasStore(storesArrayObj.options, storeFilter))
          filter += storeFilter + ",";
      });
    }

    const conditions = prefrences.conditions;
    conditions.forEach(
      (condition) => (filter += getConditionFilter(condition))
    );
    const min_price = prefrences.price_limits[0];
    const max_price = prefrences.price_limits[1];
    filter += `price:1,ppr_min:${min_price},ppr_max:${max_price},`;
    const reviews = prefrences.reviews;
    filter += `avg_rating:${reviews * 100}`;

    return filter;
  }

  const applyPrefrences = useCallback(async () => {
    if (!searchQuery) return;
    if (!searchData) return;

    const prefrencesFilters = generatePrefrencesFilter();
    setSearchData(null);
    const searchPromise = search({
      query: searchQuery,
      filters: prefrencesFilters,
    });
    toast.promise(
      searchPromise,
      {
        loading: "Applying prefrences",
        success: "Prefrences Applied",
        error: searchPromise.error || "Error applying prefrences!",
      },
      toastOptions
    );
    const data = await searchPromise;
    setSearchData(data);
  }, [searchQuery, searchData, prefrences]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, searchQuery]);

  useEffect(() => {
    const fetchPrefrences = async () => {
      const prefrences = (await getPreferences()) || DEFAULT_PREFRENCES;
      setPrefrences(prefrences);
    };
    if (localStorage.token) {
      fetchPrefrences();
    }
  }, []);

  return (
    <>
      <Header />
      {searchData ? (
        <div className="flex flex-wrap pt-2 lg:pt-20">
          <Filters
            filters={searchData?.filters || []}
            activeFilters={activeFilters}
            applyFilter={applyFilter}
            applyPrefrences={applyPrefrences}
          />
          <Products
            title={searchQuery}
            products={searchData?.results || searchData?.shopping_results || []}
            totalProducts={(searchData?.total_pages || 0) * 60}
          />
          <SortBy />
        </div>
      ) : (
        <div className="flex flex-wrap pt-2 lg:pt-20">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full md:w-1/4 p-4">
              <div className="animate-pulse rounded-lg p-4">
                <div className="bg-gray-300 h-48 w-full mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-1/2 mx-auto"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-1/3 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Results;
