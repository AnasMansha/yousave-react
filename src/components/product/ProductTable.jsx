import { SORT_TYPES } from "constants/index";
import ProductDataContext from "contexts/ProductDataContext";
import React, { useContext, useState } from "react";
import { addToGlobalSavings } from "utils/apis/saving";

const ProductTableRow = ({
  comparison,
  price,
  condition,
  shipping,
  reviews,
  buyNowLink,
  unhighlighted = false,
  isBestPrice,
  isBestTotalPrice,
  amountSaved,
}) => {
  function gtag_report_conversion(url) {
    // eslint-disable-next-line
    gtag("event", "conversion", {
      send_to: "AW-16518157480/j6ZQCPa8qK0ZEKipvMQ9",
    });
  }

  const openProductSource = () => {
    window.open(buyNowLink, "_blank", "noopener,noreferrer");
    if (amountSaved > 0) addToGlobalSavings(amountSaved);

    window._mfq.push(["tag", "buy now"]);
    gtag_report_conversion(buyNowLink);
  };

  return (
    <tr
      className={`px-4 py-2 ${
        unhighlighted ? "opacity-30" : "opacity-100"
      } transition-all duration-500 hover:scale-105`}
    >
      <td className="px-4 py-2">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.amazon.com/Apple-iPhone-11-64GB-White/dp/B07ZPJW2XH?source=ps-sl-shoppingads-lpcontext&amp;ref_=fplfs&amp;psc=1&amp;smid=A1IDGLU7MC87O4&amp;opi=95576897&amp;sa=U&amp;ved=0ahUKEwiL1e7WgLuHAxUB5ckDHf2yDv8Q2ykIHQ&amp;usg=AOvVaw2jorDHmC_KHpmo2CnJjJ-j"
          style={{ color: "black" }}
        >
          {comparison}
        </a>
      </td>
      <td className="px-4 py-2">{price}</td>
      <td className="px-4 py-2 td-productcondition">{condition}</td>
      <td className="px-4 py-2">
        {shipping === "$0.00" ? "Free Delivery" : shipping}
      </td>
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
        <div
          className="text-blue-600 underline cursor-pointer"
          onClick={openProductSource}
        >
          Buy Now
        </div>
      </td>
    </tr>
  );
};

const extractPrice = (priceString) => {
  try {
    priceString = priceString.replace(",", "");
    if (priceString.includes("/mo")) {
      const nowPriceMatch = priceString.match(/\$([\d.]+)/);
      const monthlyPriceMatch = priceString.match(/(\$[\d.]+)\/mo/);

      if (nowPriceMatch && monthlyPriceMatch) {
        const nowPrice = parseFloat(nowPriceMatch[1]);
        const monthlyPrice = parseFloat(monthlyPriceMatch[1].replace("$", ""));

        const totalPrice = nowPrice + 12 * monthlyPrice;
        return totalPrice;
      } else {
        return 0;
      }
    } else {
      const simplePriceMatch = priceString.match(/\$([\d.]+)/);
      if (simplePriceMatch) {
        return parseFloat(simplePriceMatch[1]);
      } else {
        return 0;
      }
    }
  } catch (error) {
    return 0;
  }
};

const extractShippingPrice = (priceString) => {
  try {
    const lowerCaseString = priceString.toLowerCase();

    if (lowerCaseString.includes("free")) {
      return 0;
    }

    const priceMatch = priceString.match(/\$([\d.]+)/);
    if (priceMatch) {
      return parseFloat(priceMatch[1]);
    } else {
      return 0;
    }
  } catch (error) {
    return 0;
  }
};

const sortByPrice = (comparisons) => {
  return comparisons.sort((a, b) => {
    const priceA = extractPrice(a.total_price);
    const priceB = extractPrice(b.total_price);
    return priceA - priceB;
  });
};

const sortByReviews = (comparisons) => {
  return comparisons;
};

const sortByShipping = (comparisons) => {
  return comparisons.sort((a, b) => {
    const shippingA = extractShippingPrice(a.additional_price.shipping);
    const shippingB = extractShippingPrice(b.additional_price.shipping);
    return shippingA - shippingB;
  });
};

const sortByPriceAndShipping = (comparisons) => {
  return comparisons.sort((a, b) => {
    const priceA = extractPrice(a.total_price);
    const priceB = extractPrice(b.total_price);

    const shippingA = extractShippingPrice(a.additional_price.shipping);
    const shippingB = extractShippingPrice(b.additional_price.shipping);

    const totalA = priceA + shippingA;
    const totalB = priceB + shippingB;

    return totalA - totalB;
  });
};

const adjustComparisonLinkAndName = (comparison, productId) => {
  const link = comparison.link;
  if (link.startsWith("https://www.google.com/url?q=")) {
    const decodedLink = decodeURIComponent(link.split("q=")[1]);
    if (decodedLink) {
      const splitLink = decodedLink.split("q=");
      if (splitLink.length > 1) {
        comparison.link = splitLink.slice(1).join("q=");
      } else {
        comparison.link = splitLink[0];
      }
    }
  }
  if (
    comparison.name.toLowerCase().includes("amazon") &&
    comparison.name.toLowerCase().includes("comparison")
  )
    comparison.name = "Amazon";

  if (comparison.link.includes("ebay.com")) {
    if (productId === "5569076775627147601") {
      comparison.link =
        "https://www.ebay.com/itm/386114160732?chn=ps&mkevt=1&mkcid=1&var=653660190201&srsltid=AfmBOorI3ByQFqusDEluXuJ-hWNbAw6e7RD5OimWVK47yGq_qQNBCcrVrkc&amdata=enc%3AAQAJAAAAkEFRhH0nPB3JxNZlmBQZ4Ed3wPeUh1WzWZPipWds2QCnSoV1oAdy2%2BtJB88hVC05bfwa7YQbFJvNbUjiJCD9uvy5cC49hXo6mc0EGwM1lbQzBw%2FQI5xDoWFNQfsNFPPoscDq%2F4zLcAsIA3UbXXUEOAi3Gba5Lv6hBa0DyHYiK%2BEmM1DilUv6YlfSPA%2FXPsAelQ%3D%3D&mkrid=711-53200-19255-0&siteid=0&campid=5339052590&customid=&toolid=10001";
    }
  } else if (comparison.link.includes("walmart.com")) {
    if (productId === "8306560282566508284") {
      comparison.link = "https://sovrn.co/17sonc8";
    }
  } else if (comparison.link.includes("amazon.com")) {
    if (productId === "8453172454885960817") {
      comparison.link = "https://sovrn.co/17c0gyj";
    }
    if (productId === "15467915177872713493") {
      comparison.link = "https://sovrn.co/qnfrpzs";
    }
    if (productId === "9176650716485410648") {
      comparison.link =
        "https://www.amazon.ca/PHALANX-Rechargeable-Accessories-Polishing-Engraving/dp/B0BKFSLZWS?source=ps-sl-shoppingads-lpcontext&smid=A2S031PWSDMTZO&opi=95576897&sa=U&ved=0ahUKEwiVsvaQo8CGAxWSFFkFHcNEDwwQ2ykIJg&usg=AOvVaw2wCow8SaA0FqZOUckvZVdx&th=1&linkCode=ll1&tag=1065473-20&linkId=e47c8bded3c97891dfb6219b0832a35d&language=en_CA&ref_=as_li_ss_tl";
    }
    if (productId === "4945516286398498882") {
      comparison.link = "https://amzn.to/4cbfg5z";
    }

    if (productId === "3715544431094452639") {
      comparison.link = "https://amzn.to/3KzpNf6";
    }
    if (productId === "1617671628587324873") {
      comparison.link = "https://amzn.to/4bMIcBl";
    }
  }
};

const isValidComparison = (comparison) => {
  try {
    if (!comparison.total_price || !comparison.base_price) return false;
    if (comparison.link.includes("68800") || comparison.link.includes("98800"))
      return false;

    const names = comparison.name.split(" ");

    for (let name of names) {
      const decapitalizedName = name.toLowerCase();

      const decapitalizedLink = comparison.link.toLowerCase();

      if (decapitalizedLink.includes(decapitalizedName)) {
        return true;
      }
    }

    return false;
  } catch (error) {
    return true;
  }
};

const adjustComparisons = (comparisons, productId) => {
  comparisons.forEach((comparison) =>
    adjustComparisonLinkAndName(comparison, productId)
  );
  comparisons = comparisons.filter(isValidComparison);
};

const calculateMaxPrice = (comparisons) => {
  let maxPrice = 0;
  comparisons.forEach((comparison) => {
    const price = extractPrice(comparison.total_price || comparison.base_price);
    if (price > maxPrice) maxPrice = price;
  });
  return maxPrice;
};

const shouldHighlight = (comparison, filters) => {
  const store = comparison.name;
  const condition = comparison.condition || "New";

  const stores = filters.stores;
  const conditions = filters.conditions;

  const minPrice = filters.minPrice;
  const maxPrice = filters.maxPrice;
  const price = extractPrice(comparison.total_price || comparison.base_price);

  const shipping = filters.shipping;
  const shippingCost = extractPrice(
    comparison?.additional_price?.shipping || "$0.00"
  );

  return (
    (!stores.length || stores.includes(store)) &&
    (!conditions.length || conditions.includes(condition)) &&
    (!minPrice || price >= minPrice) &&
    (!maxPrice || price <= maxPrice) &&
    (!shipping ||
      shipping === "all" ||
      (shipping === "free" && shippingCost === 0) ||
      (shipping === "paid" && shippingCost !== 0))
  );
};

const ProductTable = () => {
  const { productData, productComparisons, comparisonFilters } =
    useContext(ProductDataContext);

  const [showFilter, setShowFilter] = useState(false);

  const [sort, setSort] = useState(SORT_TYPES.PRICE);

  let comparisons = productComparisons;

  let maxPrice = 0;

  let totalSaved = [];

  if (comparisons && productData) {
    if (sort === SORT_TYPES.PRICE) comparisons = sortByPrice(comparisons);
    if (sort === SORT_TYPES.REVIEWS) comparisons = sortByReviews(comparisons);
    if (sort === SORT_TYPES.SHIPPING) comparisons = sortByShipping(comparisons);
    if (sort === SORT_TYPES.PRICE_AND_SHIPPING)
      comparisons = sortByPriceAndShipping(comparisons);

    adjustComparisons(comparisons, productData.product_id);

    maxPrice = calculateMaxPrice(comparisons);

    totalSaved = comparisons.map(
      (comparison) =>
        maxPrice - extractPrice(comparison.total_price || comparison.base_price)
    );
  }

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
            <th className="px-4 py-2">comparison</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2 td-productcondition">Condition</th>
            <th className="px-4 py-2">Shipping</th>
            <th className="px-4 py-2">
              <a href="#review">Reviews</a>
            </th>
            <th className="px-4 py-2">
              Sort By:
              <span>
                <select
                  className="border-0 bg-gray-200 rounded w-full md:w-20"
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  <option value={SORT_TYPES.PRICE}>Price</option>
                  <option value={SORT_TYPES.REVIEWS}>Reviews</option>
                  <option value={SORT_TYPES.SHIPPING}>Shipping</option>
                  <option value={SORT_TYPES.PRICE_AND_SHIPPING}>
                    Price + Shipping
                  </option>
                </select>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {productData &&
            comparisons?.map((comparison, index) => (
              <ProductTableRow
                comparison={comparison.name}
                price={comparison.total_price || comparison.base_price}
                condition={comparison.condition || "New"}
                shipping={
                  comparison?.additional_price?.shipping || "Free Delivery"
                }
                buyNowLink={comparison.link}
                unhighlighted={!shouldHighlight(comparison, comparisonFilters)}
                key={index}
                amountSaved={totalSaved[index]}
              />
            ))}

          {(comparisons === null || productData === null) && (
            <tr id="table-animation">
              <td>
                <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td>
                <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td>
                <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td>
                <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td>
                <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td>
                <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {productData &&
        (comparisons === undefined || comparisons?.length === 0) && (
          <div className="w-full text-center text-red-500 mt-1">
            No Comparisons found
          </div>
        )}
    </div>
  );
};

export default ProductTable;
