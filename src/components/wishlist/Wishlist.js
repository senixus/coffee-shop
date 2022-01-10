import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductHeader from "../productHeader/ProductHeader";
import Modal from "../modal/Modal";

import { getWishList } from "../../redux/actions/wishlist/getWishlist";

import "./wishlist.scss";

const Wishlist = () => {
  const dispatch = useDispatch();
  const getUserWishList = (user) => dispatch(getWishList(user));

  const wishList = useSelector((state) => state.wishList.wishList);
  const user = useSelector((state) => state.auth.user);

  const ModalRef = useRef(null);

  useEffect(() => {
    getUserWishList(user.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.uid]);

  return (
    <React.Fragment>
      <ProductHeader title="Wish List" />
      <Modal ref={ModalRef} />
      <main className="wishlist container">
        <div className="wishlist">
          {wishList &&
            wishList.map((wish) => (
              <div key={wish.id} className="wishlist-child">
                <button
                  onClick={() =>
                    ModalRef.current.openModal(wish.coffee, wish.id)
                  }
                >
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
    </React.Fragment>
  );
};

export default Wishlist;
