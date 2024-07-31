import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductTable from "./ProductTable";
import ProductReviews from "./ProductReviews";
import RecentViewed from "./RecentViewed";
import ReviewList from "./ReviewCard";

const ProductResult = () => {
  return (
    <>
      <div className="w-full lg:w-3/4 p-4">
        <ProductList />
        <ProductTable />
        <ProductReviews />
        <RecentViewed />
        <ReviewList/>
      </div>
    </>
  );
};

export default ProductResult;
