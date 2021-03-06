import React from "react";
import "./productHeader.scss";
import Navbar from "../navbar/Navbar";

const ProductHeader = ({ title }) => {
  return (
    <header className="product-header">
      <Navbar />
      <div className="product-header__child">
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default ProductHeader;
