import Cart from "../components/cart/Cart";
import ReactHelmet from "../components/helmet/ReactHelmet";
import React from "react";

const CartPage = () => {
  return (
    <React.Fragment>
      <ReactHelmet title="Cart" />
      <Cart />
    </React.Fragment>
  );
};

export default CartPage;
