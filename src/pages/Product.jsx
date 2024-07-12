import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Filter from "components/productpage/ToggleFilter";
import SortBy from "components/productpage/SortBy";
import ProductList from "components/productpage/ProductList";

const Product = () => {
  const toggleFilter = () => {
    document.getElementById('filterMobile').classList.toggle('hidden');
  };

  const toggleSort = () => {
    document.getElementById('sortMobile').classList.toggle('hidden');
  };

  return (
    <>
      <Header />
      <div className="flex flex-wrap pt-2 lg:pt-20">
          <Filter />
          <ProductList />
          <SortBy />
      </div>
      <Footer/>
      {/* Mobile Controls for Filter and Sort */}
      
    </>
  );
};

export default Product;
