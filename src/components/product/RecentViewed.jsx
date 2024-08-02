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
      setProducts(products.reverse());
    };

    if (!localStorage.token) return;

    getProducts();
  }, []);

  if (!products) return null;

  return (
    <section className="mt-20 w-full flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl font-bold mb-2 md:mb-8">
        Recently Viewed
      </h2>
      <div className="flex overflow-x-auto w-full">
        {products.map((product, index) => {
          if (product?.product?.media?.[0]?.link)
            return (
              <img
                key={index}
                className="recent-image h-24 md:h-40 border border-gray-300 p-2 m-2 cursor-pointer"
                src={product?.product?.media?.[0]?.link}
                alt={`Recently viewed ${index + 1}`}
                onClick={() => {
                  navigate(
                    `/product/${generateUrlName(product?.product?.title)}/${
                      product?.product?.product_id
                    }`
                  );
                }}
              />
            );
          return null;
        })}
      </div>
    </section>
  );
};

export default RecentViewed;
