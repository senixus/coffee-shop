import { useEffect, useState } from "react";
import { getAllCoffee } from "../../redux/actions/coffee/getAllCoffee";
import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import Origins from "../origins/Origins";
import Search from "../search/Search";
import ProductHeader from "../productHeader/ProductHeader";
import {
  selectSearchCoffee,
  selectLowestPrice,
  selectAlphabetic,
  selectHighestPrice,
  selectReverseAlphabetic,
} from "../../redux/reducers/selectors/coffeeSelectors";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../pagination/Pagination";
import { handlePagination } from "../../helpers/pagination";
import { searchCoffee } from "../../redux/actions/coffee/searchCoffee";
import Filter from "../filter/Filter";
import { addToCart } from "../../redux/actions/cart/addToCart";
import { addToWishList } from "../../redux/actions/wishlist/wishlist";

const Products = () => {
  const dispatch = useDispatch();
  const getCoffee = () => dispatch(getAllCoffee());
  const [search, setSearch] = useState("");
  const coffee = useSelector((state) => selectSearchCoffee(search)(state));
  const searchItem = (coffee) => dispatch(searchCoffee(coffee));
  const [filter, setFilter] = useState(null);
  const lowest = useSelector((state) => selectLowestPrice(filter)(state));
  const name = useSelector((state) => selectAlphabetic(filter)(state));
  const highest = useSelector((state) => selectHighestPrice(filter)(state));
  const reverse = useSelector((state) =>
    selectReverseAlphabetic(filter)(state)
  );
  const user = useSelector((state) => state.auth.user);
  const [currentPage, setCurrentPage] = useState(1);
  const addCart = (coffee) => dispatch(addToCart(coffee));
  const addWishList = (coffee, user) => dispatch(addToWishList(coffee, user));

  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    getCoffee();
  }, [filter]);

  let currentCoffee = handlePagination(coffee, currentPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchItem(search);
  };

  const handleCart = (coffee) => {
    addCart(coffee);
    toast.success(`${coffee.coffeeName} added to cart`);
  };

  const handleWishList = (coffee, user) => {
    addWishList(coffee, user);
    toast.success(`${coffee.coffeeName} added to wish list`);
  };

  return (
    <>
      <ProductHeader title="Product List" />
      <Toaster />
      <main className="container">
        <div className="filter-section">
          <div className="filter-section__child">
            <p>{currentCoffee.length} results</p>
          </div>
          <div className="filter-section__child">
            <Search handleChange={handleChange} />
          </div>
          <div className="filter-section__child">
            <Filter handleSelect={handleSelect} />
          </div>
        </div>

        <div className="products-section">
          {currentCoffee.length > 0 ? (
            <div className="products">
              {currentCoffee &&
                currentCoffee.map((c) => (
                  <div key={c.id} className="products-child">
                    <img
                      src={c.coffeePic.name}
                      width="250px"
                      className="products-child__img"
                      alt={c.coffeeName}
                    />
                    <p className="products-child__name">{c.coffeeName}</p>
                    <p className="products-child__price">$ {c.price}</p>
                    <div>
                      <button
                        onClick={() => handleCart(c)}
                        className="product-btn"
                        type="button"
                      >
                        Add to Cart
                      </button>
                      {user ? (
                        <button
                          onClick={() => handleWishList(c, user.uid)}
                          className="product-btn"
                          type="button"
                        >
                          Add to WishList
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="no-product">
              <h1>There is no product</h1>
            </div>
          )}

          <div className="origins">
            <Origins />
          </div>
        </div>

        <Pagination coffee={coffee.length} paginate={paginate} />
      </main>
    </>
  );
};

export default Products;
