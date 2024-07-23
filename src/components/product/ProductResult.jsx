import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductTable from "./ProductTable";
import ProductReviews from "./ProductReviews";
import RecentViewed from "./RecentViewed";

const ProductResult = ({ productData, productComparisons }) => {
  return (
    <>
      <div className="w-full lg:w-3/5 p-4">
        <ProductList productData={productData} />
        <ProductTable productComparisons={productComparisons} />
        <ProductReviews />
        <RecentViewed />
      </div>
    </>
  );
};

export default ProductResult;
