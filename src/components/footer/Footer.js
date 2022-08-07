import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>&copy; {new Date().getFullYear()} All rights reserved</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
