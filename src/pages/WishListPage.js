import React from "react";

import ReactHelmet from "../components/helmet/ReactHelmet";
import Wishlist from "../components/wishlist/Wishlist";

const WishListPage = () => {
  return (
    <React.Fragment>
      <ReactHelmet title="Wish List" />
      <Wishlist />
    </React.Fragment>
  );
};

export default WishListPage;
