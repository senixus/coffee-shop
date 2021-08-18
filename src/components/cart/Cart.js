import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductHeader from "../productHeader/ProductHeader";
import "./cart.scss";
import { IoMdClose } from "react-icons/io";
import {
  removeItemFromCart,
  clearCartItems,
} from "../../redux/actions/cart/removeFromCart";

import { addToCart } from "../../redux/actions/cart/addToCart";
import { selectCartTotalPrice } from "../../redux/reducers/selectors/cartSelector";
import CheckoutButton from "../checkoutButton/CheckoutButton";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeCart = (coffee) => dispatch(removeItemFromCart(coffee));
  const total = useSelector((state) => selectCartTotalPrice(state.cart));
  const addCart = (coffee) => dispatch(addToCart(coffee));
  const clearItemFromCart = (coffee) => dispatch(clearCartItems(coffee));

  return (
    <main className="cart">
      <ProductHeader title="Cart Detail" />

      <div className="cart-child container">
        {cart &&
          cart.map((coffee) => (
            <table className="cart-info" key={coffee.id}>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button
                      className="close-btn"
                      onClick={() => clearItemFromCart(coffee)}
                    >
                      <IoMdClose />
                    </button>
                  </td>
                  <td>
                    <span>
                      <img
                        src={coffee.coffeePic.name}
                        alt={coffee.coffeeName}
                      />
                    </span>
                    <span style={{ marginLeft: ".4rem" }}>
                      {coffee.coffeeName}
                    </span>
                  </td>
                  <td>
                    <span className="arrows" onClick={() => removeCart(coffee)}>
                      &#10094;
                    </span>
                    {coffee.quantity}
                    <span className="arrows" onClick={() => addCart(coffee)}>
                      &#10095;
                    </span>
                  </td>
                  <td>$ {coffee.price.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          ))}

        <div className="cart-totals">
          <table>
            <tbody>
              <tr className="cart-subtotal">
                <th>Total : </th>
                <td>$ {total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ color: "red", fontSize: "1.3rem" }}>
            <h4>Test Card Number : </h4>
            <p>4242 4242 4242 4242</p>
            <p>10-22 | 123</p>
          </div>
          <div className="cart-totals__checkout">
            <CheckoutButton />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
