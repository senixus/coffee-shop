import React from "react";

import Footer from "../components/footer/Footer";
import ReactHelmet from "../components/helmet/ReactHelmet";
import Products from "../components/products/Products";

const Shop = () => {
  return (
    <React.Fragment>
      <ReactHelmet title="Shop" />
      <Products />
      <Footer />
    </React.Fragment>
  );
};

export default Shop;
