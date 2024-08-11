import React, { useEffect, useState } from "react";

const CartProduct = ({ item, handleCheckboxToggle }) => {
  const [isChecked, setIsChecked] = useState(item.alert);

  const handleToggleChange = (e) => {
    setIsChecked(e.target.checked);
    handleCheckboxToggle(item.product_id, e.target.checked);
  };

  return (
    <div className="p-4 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 flex">
      <div className="border rounded-lg shadow-lg overflow-hidden flex flex-col w-full">
        <a href={item.product.link}>
          <div className="p-4">
            <img
              className="w-full h-48 object-cover"
              src={item.product.image}
              alt={item.product.title}
            />
          </div>
        </a>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <a
            href={item.product.link}
            className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300 text-center"
          >
            {item.product.title}
            <i className="fas fa-heart float-right"></i>
          </a>
          <div className="text-lg font-bold mt-2 text-center">${item.product.price}</div>
          <div className="mt-2 text-center">
            <a
              href={item.product.storeLink}
              className="text-sm hover:text-blue-600 transition-colors duration-300"
            >
              1 Store
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
