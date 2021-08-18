import ReactHelmet from "../components/helmet/ReactHelmet";
import Wishlist from "../components/wishlist/Wishlist";
import React from "react";

const WishListPage = () => {
  return (
    <React.Fragment>
      <ReactHelmet title="Wish List" />
      <Wishlist />
    </React.Fragment>
  );
};

export default WishListPage;
