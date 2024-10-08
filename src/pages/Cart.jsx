import React, { useEffect, useState } from "react";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import { addAlert, removeAlert } from "utils/apis/alert";
import { getCart } from "utils/apis/cart";
import CartProduct from "components/cards/CartProduct";
import toast from "react-hot-toast";
import { findMessage } from "utils";

const Cart = () => {
  const [cart, setCart] = useState(null);

  const token = localStorage.token;

  const handleGetCart = async () => {
    const cart = await getCart();
    setCart(cart);
  };

  const handleCheckboxToggle = async (productId, isChecked) => {
    try {
      if (isChecked) await addAlert(productId);
      else await removeAlert(productId);
    } catch (e) {
      toast.error(findMessage(e));
    }
  };

  useEffect(() => {
    if (token) handleGetCart();
  }, [token]);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-5xl font-bold mt-20">Your Cart is Waiting</div>
        </div>
        {!cart && (
          <div className="text-lg mt-4 text-center">
            {token ? "Loading..." : "Please login to use cart!"}
          </div>
        )}
        {cart && cart.length === 0 && (
          <div className="text-2xl mt-4 text-center">Your cart is empty!</div>
        )}
        {cart && cart.length > 0 && (
          <div className="flex flex-wrap mt-2">
            {cart.map((item) => (
              <CartProduct
                key={item.product_id}
                item={item}
                handleCheckboxToggle={handleCheckboxToggle}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
