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
import { deepCopy, findMessage } from "utils";
import Scroller from "components/common/Scroller";
import LoaderGif from "resources/gif/loader.gif";
import Magnifier from "resources/images/search/magnifier.png";

function sortByName(products) {
  products.sort((a, b) => {
    const nameA = a.title ? a.title.toLowerCase() : "";
    const nameB = b.title ? b.title.toLowerCase() : "";
    return nameA.localeCompare(nameB);
  });
}

function sortByPrice(products, descending = false) {
  products.sort((a, b) => {
    if (descending) return b.extracted_price - a.extracted_price;
    return a.extracted_price - b.extracted_price;
  });
}

function sortByReviews(products) {
  products.sort((a, b) => {
    const reviewsA = a.reviews ? a.reviews : 0;
    const reviewsB = b.reviews ? b.reviews : 0;
    return reviewsB - reviewsA;
  });
}

const GifLoader = () => {
  const [hidden, setHidden] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setHidden(false);
    const timer = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location]);

  return (
    <div
      className={
        `fixed z-10 inset-0 bg-gray-600 bg-opacity-20 flex justify-center items-center backdrop-blur-sm` +
        (hidden ? " hidden" : " ")
      }
    >
      <img src={LoaderGif} alt="loading..." className={"h-40"} />
    </div>
  );
};

const Results = () => {
  const pagesCache = useRef({});

  const lastSearchQuery = useRef(null);

  const [searchData, setSearchData] = useState(null);

  const [pageData, setPageData] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const [prefrences, setPrefrences] = useState(null);

  const sort = useRef(0);

  const activeFilters = useRef(new Set());

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const searchQuery = queryParams.get("q");
  const currentPage = pageData.currentPage;

  const updateSearchData = (data) => {
    if (!data) return setSearchData(data);
    const updatedData = deepCopy(data);

    if (sort.current === 1)
      sortByPrice(
        updatedData.results || updatedData.shopping_results || updatedData,
        false,
      );
    if (sort.current === 2)
      sortByPrice(
        updatedData.results || updatedData.shopping_results || updatedData,
        true,
      );
    if (sort.current === 3)
      sortByName(
        updatedData.results || updatedData.shopping_results || updatedData,
      );
    if (sort.current === 4)
      sortByReviews(
        updatedData.results || updatedData.shopping_results || updatedData,
      );

    setSearchData(updatedData);
  };

  const fetchProducts = useCallback(async () => {
    if (!searchQuery) return;
    updateSearchData(null);
    let data;
    if (lastSearchQuery.current !== searchQuery) {
      lastSearchQuery.current = searchQuery;
      pagesCache.current = {};
    }
    if (pagesCache.current[currentPage]) {
      data = pagesCache.current[currentPage];
    } else {
      data = await search({
        query: searchQuery,
        pageNumber: pageData.currentPage,
      });
      pagesCache.current[currentPage] = data;
      setPageData({ currentPage, totalPages: data?.total_pages || 1 });
    }
    updateSearchData(data);
  }, [searchQuery, pageData, currentPage]);

  const onSort = (value) => {
    sort.current = value;
    fetchProducts();
  };

  const applyFilter = useCallback(async () => {
    if (!searchQuery) return;
    const filtersList = [...activeFilters.current];
    if (!filtersList.length) return;
    updateSearchData(null);
    const filters = filtersList.join(",");
    const searchPromise = search({
      query: searchQuery,
      filters,
      pageNumber: pageData.currentPage,
    });
    toast.promise(
      searchPromise,
      {
        loading: "Applying filters",
        success: "Filters Applied",
        error: (error) => findMessage(error, "Error applying filters!"),
      },
      toastOptions,
    );
    const data = await searchPromise;
    updateSearchData(data);
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
      (obj) => obj.type === "Seller",
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
      (condition) => (filter += getConditionFilter(condition)),
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
    updateSearchData(null);
    const searchPromise = search({
      query: searchQuery,
      filters: prefrencesFilters,
      pageNumber: pageData.currentPage,
    });
    toast.promise(
      searchPromise,
      {
        loading: "Applying prefrences",
        success: "Prefrences Applied",
        error: (error) => findMessage(error, "Error applying prefrences!"),
      },
      toastOptions,
    );
    const data = await searchPromise;
    updateSearchData(data);
  }, [searchQuery, searchData, prefrences]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, searchQuery, currentPage]);

  useEffect(() => {
    const fetchPrefrences = async () => {
      const prefrences = (await getPreferences()) || DEFAULT_PREFRENCES;
      setPrefrences(prefrences);
    };
    if (localStorage.token) {
      fetchPrefrences();
    }
  }, []);

  if (!searchQuery)
    return (
      <div>
        <Header />
        <div className="w-full flex justify-center mt-10 md:mt-28 mb-4 select-none">
          <img src={Magnifier} alt="magnifier" className="w-40" />
        </div>
        <div className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-40">
          Search among 2 Million+ products
        </div>
      </div>
    );
  return (
    <>
      <GifLoader />
      <Header />
      <Scroller />
      <div className="flex flex-wrap lg:flex-nowrap pt-2 lg:pt-10">
        <Filters
          filters={searchData?.filters || []}
          activeFilters={activeFilters}
          applyFilter={applyFilter}
          applyPrefrences={applyPrefrences}
        />
        <Products
          title={searchQuery}
          products={
            searchData?.results ||
            searchData?.shopping_results ||
            searchData ||
            []
          }
          totalProducts={(searchData?.total_pages || 1) * 60}
          pageData={pageData}
          setPageData={setPageData}
        />
        <SortBy setSort={onSort} />
      </div>

      <Footer />
    </>
  );
};

export default Results;
