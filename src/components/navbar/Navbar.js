import "./navbar.scss";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiLogOut, FiList } from "react-icons/fi";
import { currentUserAction } from "../../redux/actions/auth/currentUser";
import { logoutAction } from "../../redux/actions/auth/logout";
import logo from "../../assets/images/coffee.png";
import {
  selectCartTotalPrice,
  selectCart,
} from "../../redux/reducers/selectors/cartSelector";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => selectCart(state.cart));
  const total = useSelector((state) => selectCartTotalPrice(state.cart));
  const user = useSelector((state) => state.auth.user);
  const getCurrentUser = () => dispatch(currentUserAction());
  const logout = () => dispatch(logoutAction());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCurrentUser();

    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav className={isOpen ? `shrink-navbar` : `navbar`}>
        <div className="navbar-logo">
          <h1>
            <Link to="/" className="navbar-logo__item">
              <img src={logo} alt="Logo" width="70px" />
            </Link>
          </h1>
        </div>
        <ul className="navbar-nav">
          <li className="navbar-nav__item">
            <Link to="/" className="navbar-nav__link">
              Home
            </Link>
          </li>
          <li className="navbar-nav__item">
            <Link to="/shop" className="navbar-nav__link">
              Shop
            </Link>
          </li>
          <li className="navbar-nav__item">
            <Link to="/contact" className="navbar-nav__link">
              Contact
            </Link>
          </li>

          <li className="navbar-nav__item">
            <Link to="/cart" className="navbar-nav__link">
              <FaShoppingCart />
              <span className="basket-count">{cart.length}</span>
            </Link>

            <div className="dropdown">
              <div className="dropdown-info">
                {cart &&
                  cart.map((cartItem) => (
                    <div className="dropdown-child" key={cartItem.id}>
                      <div className="dropdown-child__items">
                        <div className="dropdown-child__img">
                          <img
                            src={cartItem.coffeePic && cartItem.coffeePic.name}
                            alt={cartItem.coffeeName}
                          />
                        </div>
                        <ul className="dropdown-child__list">
                          <li>{cartItem.coffeeName}</li>
                          <li>
                            {cartItem.quantity} x
                            <span>
                              {cartItem.price.toFixed(2) || cartItem.price}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                <div className="total-price">
                  <p>TOTAL</p>
                  <p>${total && total.toFixed(2)}</p>
                </div>
                <div className="dropdown-info__btn">
                  <Link to="/cart" className="view-btn">
                    view cart
                  </Link>
                </div>
              </div>
            </div>
          </li>
          {!user ? (
            <>
              <li className="navbar-nav__item">
                <Link to="/login" className="navbar-nav__link">
                  Login
                </Link>
              </li>
              <li className="navbar-nav__item">
                <Link to="/register" className="navbar-nav__link">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-nav__item profile">
                <Link to="/" className="navbar-nav__link">
                  {user.displayName}
                </Link>
                <ul className="profile-dropdown">
                  <li>
                    <Link to="/wishlist">
                      <span className="icon">
                        <FiList />
                      </span>
                      Wish List
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={() => logout()}>
                      <span className="icon">
                        <FiLogOut />
                      </span>
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </>
          )}

          <li className="bar">
            <FaBars />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
