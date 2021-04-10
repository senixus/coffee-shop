import "./wishlist.scss";
import ProductHeader from "../productHeader/ProductHeader";
import { useDispatch, useSelector } from "react-redux";
import { getWishList } from "../../redux/actions/wishlist/getWishlist";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";

const Wishlist = () => {
  const dispatch = useDispatch();
  const getUserWishList = (user) => dispatch(getWishList(user));
  const wishList = useSelector((state) => state.wishList.wishList);
  const [isOpen, setIsOpen] = useState(false);
  const [coffee, setCoffee] = useState({});
  const [id, setId] = useState("");
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    getUserWishList(user.uid);
  }, [user.uid]);

  const openModal = (coffee, id) => {
    setIsOpen(true);
    setCoffee(coffee);
    setId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ProductHeader title="Wish List" />
      <Modal id={id} open={isOpen} closeModal={closeModal} coffee={coffee} />
      <main className="wishlist container">
        <div className="wishlist">
          {wishList &&
            wishList.map((wish) => (
              <div key={wish.id} className="wishlist-child">
                <button onClick={() => openModal(wish.coffee, wish.id)}>
                  <img
                    src={wish.coffee.coffeePic && wish.coffee.coffeePic.name}
                    width="250px"
                    className="wishlist-child__img"
                    alt={wish.coffee.coffeeName}
                  />
                  <p className="wishlist-child__name">
                    {wish.coffee.coffeeName}
                  </p>
                  <p className="wishlist-child__price">$ {wish.coffee.price}</p>
                </button>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default Wishlist;
