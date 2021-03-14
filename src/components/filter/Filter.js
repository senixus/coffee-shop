import "./filter.scss";

const Filter = ({ handleSelect }) => {
  return (
    <div className="filter">
      <select onChange={handleSelect}>
        <option>Select</option>
        <option value="name">Name(A-Z)</option>
        <option value="name reverse">Name(Z-A)</option>
        <option value="lowest price">Lowest Price</option>
        <option value="highest price">Highest Price</option>
      </select>
    </div>
  );
};

export default Filter;
