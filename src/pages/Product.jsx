import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Filter from "components/productpage/ToggleFilter";
import SortBy from "components/productpage/SortBy";
import ProductList from "components/productpage/ProductList";
const Product = () => {
  
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Filter />
        <ProductList />
        <SortBy />
     </div>

    </>
  );
};

export default Product;
