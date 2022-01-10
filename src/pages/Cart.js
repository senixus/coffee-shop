import React from "react";

import Cart from "../components/cart/Cart";
import ReactHelmet from "../components/helmet/ReactHelmet";

const CartPage = () => {
  return (
    <React.Fragment>
      <ReactHelmet title="Cart" />
      <Cart />
    </React.Fragment>
  );
};

export default CartPage;
