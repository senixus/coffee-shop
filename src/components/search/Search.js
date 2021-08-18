import React from "react";
import "./search.scss";

const Search = ({ handleChange }) => {
  return (
    <div className="search">
      <div>
        <input
          type="text"
          placeholder="Search"
          name="coffee"
          onChange={handleChange}
          className="search-bar"
        />
      </div>
    </div>
  );
};

export default Search;
