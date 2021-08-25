import React from "react";
import "./coffeeProducts.scss";
import slide from "../../assets/images/slider-separator.png";
import { Link, useHistory } from "react-router-dom";

const CoffeeProducts = () => {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/shop");
  };

  return (
    <header className="coffee-background">
      <div className="coffee-background__child">
        <h1>Coffee Products</h1>
        <img src={slide} alt="coffee" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
        <Link onClick={handleRoute}>View more</Link>
      </div>
    </header>
  );
};

export default CoffeeProducts;
