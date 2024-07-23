import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateUrlName } from "utils";
import { getRecentlyViewed } from "utils/apis/recent";

const RecentViewed = () => {
  const [products, setProducts] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const products = await getRecentlyViewed();
      setProducts(products);
    };

    if (!localStorage.token) return;

    getProducts();
  }, []);

  if (!products) return null;

  return (
    <section className="recent-products-wrapper mt-20 mx-5 flex justify-center">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Recently Viewed</h2>
        <div
          id="recently-viewed-products"
          className="recent-products flex flex-wrap justify-center"
        >
          {products.map((product, index) => (
            <img
              key={index}
              className="recent-image h-40 border border-gray-300 p-2 m-2 cursor-pointer cursor-pointer"
              src={product?.product?.data?.product_results?.media?.[0]?.link}
              alt={`Recently viewed ${index + 1}`}
              onClick={() => {
                navigate(
                  `/product/${generateUrlName(
                    product?.product?.data?.product_results?.title
                  )}/${product?.product?.data?.product_results?.product_id}`
                );
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentViewed;
