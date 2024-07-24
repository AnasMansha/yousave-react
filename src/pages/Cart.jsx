import Footer from "components/common/Footer";
import Header from "components/common/Header";
import { useEffect, useState } from "react";
import { addAlert, removeAlert } from "utils/apis/alert";
import { getCart } from "utils/apis/cart";

const Cart = () => {
  const [cart, setCart] = useState(null);

  const token = localStorage.token;

  const handleGetCart = async () => {
    const cart = await getCart();
    setCart(cart);
  };

  const handleCheckboxToggle = async (productId, isChecked) => {
    if (isChecked) addAlert(productId);
    else removeAlert(productId);
  };

  useEffect(() => {
    if (token) handleGetCart();
  }, [token]);

  return (
    <div>
      <Header />
      <div className="text-center">
        <div>Your cart is waiting</div>
        {!cart && (
          <div>{token ? "Loading..." : "Please login to use cart!"}</div>
        )}
        {cart && cart.length === 0 && <div>Your cart is empty!</div>}
        {cart && cart.length && (
          <div>
            {cart.map((item) => (
              <div>
                <div>{item.product.title}</div>
                <input
                  type="checkbox"
                  id={item.product_id}
                  onChange={(event) => {
                    handleCheckboxToggle(event.target.id, event.target.checked);
                  }}
                  defaultChecked={item.alert}
                />
                <label for={item.product_id}>Toggle</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
