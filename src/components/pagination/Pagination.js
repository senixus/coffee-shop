import React from "react";

import "./pagination.scss";

const Pagination = ({ paginate, coffee }) => {
  const pageNumbers = [];
  const productsPerPage = 6;
  for (let i = 1; i <= Math.ceil(coffee / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination-list">
      {pageNumbers.map((number) => (
        <li key={number} className="pagination-list__item">
          <button
            className="pagination-list__btn"
            onClick={() => paginate(number)}
            type="button"
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
