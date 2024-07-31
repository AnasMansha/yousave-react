import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductTable from "./ProductTable";
import ProductReviews from "./ProductReviews";
import RecentViewed from "./RecentViewed";

const ProductResult = () => {
  return (
    <>
      <div className="w-full lg:w-3/4 p-4">
        <ProductList />
        <ProductTable />
        <ProductReviews />
        <RecentViewed />
      </div>
    </>
  );
};

export default ProductResult;
