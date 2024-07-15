import React from "react";
import Header from "components/common/Header";
import ProductFilter from "components/product/ProductFilter";
import ProductResult from "components/product/ProductResult";
const Product = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap pt-2 lg:pt-20">
        <ProductFilter />
        <ProductResult />
      </div>
    </>
  );
};

export default Product;
