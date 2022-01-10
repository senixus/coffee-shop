import React from "react";
import { Link } from "react-router-dom";

import "./error.scss";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>page not found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;
