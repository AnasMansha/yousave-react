import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateUrlName, isValidComparison } from "utils";

const CartProduct = ({ item, handleCheckboxToggle }) => {
  const [isChecked, setIsChecked] = useState(item.alert);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const handleToggleChange = async (e) => {
    setBusy(true);
    setIsChecked(e.target.checked);
    await handleCheckboxToggle(item.product_id, e.target.checked);
    setBusy(false);
  };

  const openProductPage = () =>
    navigate(
      `/product/${generateUrlName(item.product.title)}/${
        item.product.product_id
      }`
    );

  const totalComparisons =
    item.product_comparison.filter(isValidComparison).length;

  return (
    <div className="p-4 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 flex">
      <div className="border border-[#DDDDDD] rounded-lg overflow-hidden flex flex-col w-full">
        <a href={item.product.link}>
          <div className="p-4">
            <img
              className="w-full h-24 md:h-48 object-contain cursor-pointer"
              src={item.product.media?.[0]?.link}
              alt={item.product.title}
              onClick={openProductPage}
            />
          </div>
        </a>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <a
            href={item.product.link}
            className="text-base font-medium hover:text-blue-600 transition-colors duration-300 text-center cursor-pointer max-h-12 overflow-hidden"
            onClick={openProductPage}
          >
            {item.product.title}
            <i className="fas fa-heart float-right"></i>
          </a>
          <div className="text-lg font-bold mt-2 text-center">
            {item.product.prices?.[0] || "$0.00"}
          </div>
          <div className="mt-2 text-center">
            <a
              href={item.product.storeLink}
              className="text-sm hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              onClick={openProductPage}
            >
              {totalComparisons > 10 ? "10+" : totalComparisons} Store
              {totalComparisons > 1 ? "s" : ""}
            </a>
          </div>
          <div className="mt-auto flex justify-end pt-4">
            <label
              htmlFor={item.product_id}
              className="inline-flex items-center cursor-pointer"
            >
              <span className="relative">
                <input
                  type="checkbox"
                  id={item.product_id}
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleToggleChange}
                  disabled={busy}
                />
                <span
                  className={`block w-10 h-6 rounded-full shadow-inner transition-colors duration-200 ease-in-out ${
                    isChecked ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-0 w-4 h-4 mt-1 ml-1 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                    isChecked ? "translate-x-full bg-white" : "bg-white"
                  }`}
                ></span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
