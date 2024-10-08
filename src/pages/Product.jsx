import React, { useContext, useEffect, useState } from "react";
import Header from "components/common/Header";
import ProductFilter from "components/product/ProductFilter";
import ProductResult from "components/product/ProductResult";
import { useParams } from "react-router-dom";
import {
  getComparison,
  getProduct,
  getSerpComparison,
} from "utils/apis/product";
import toast from "react-hot-toast";
import ProductDataContext from "contexts/ProductDataContext";
import { addToRecentlyViewed } from "utils/apis/recent";
const Product = () => {
  const [productData, setProductData] = useState(null);

  const [productComparisons, setProductComparisons] = useState(null);

  const [comparisonFilters, setComparisonFilters] = useState({
    stores: [],
    conditions: [],
    shipping: "all",
    minPrice: null,
    maxPrice: null,
    reviews: [false, false, false, false, false],
  });

  const { productId = null } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      setProductData(null);
      try {
        const product = await getProduct(productId);
        setProductData({
          ...product.product_results,
          specs: product.product_spec,
        });
      } catch (e) {
        toast.error(e.message || "Error fetching product data!");
        setProductData(undefined);
      }
    };

    const fetchProductComparisons = async () => {
      setProductComparisons(null);
      try {
        let comparisons = [];
        let productApiComparisons = null;
        try {
          productApiComparisons = localStorage.getItem(productId);
          productApiComparisons = JSON.parse(productApiComparisons);
          productApiComparisons = productApiComparisons.product_api_comparisons;
        } catch {
          productApiComparisons = null;
        }

        if (
          productApiComparisons !== null &&
          productApiComparisons !== undefined &&
          productApiComparisons !== "undefined"
        ) {
          comparisons = await getSerpComparison(
            productId,
            productApiComparisons
          );
        } else comparisons = await getComparison(productId);

        setProductComparisons(comparisons);
      } catch (e) {
        toast.error(e.message || "Error fetching product comparisons!");
        setProductComparisons(undefined);
      }
    };

    if (productId) {
      fetchProductData();
      fetchProductComparisons();
    }
  }, [productId]);

  useEffect(() => {
    if (productData && productComparisons !== null && localStorage.token) {
      addToRecentlyViewed(productId, productData, productComparisons);
    }
  }, [productData, productComparisons]);

  return (
    <>
      <Header />
      <ProductDataContext.Provider
        value={{ productData, productComparisons, comparisonFilters }}
      >
        <div className="flex flex-wrap pt-2 lg:pt-20">
          <ProductFilter setComparisonFilters={setComparisonFilters} />
          <ProductResult />
        </div>
      </ProductDataContext.Provider>
    </>
  );
};

export default Product;
