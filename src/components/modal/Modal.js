import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItemFromWishList } from "../../redux/actions/wishlist/deleteItemFromWishList";
import { addToCart } from "../../redux/actions/cart/addToCart";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ id, open, closeModal, coffee }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => dispatch(deleteItemFromWishList(id));
  const addCart = (coffee) => dispatch(addToCart(coffee));

  if (!open) return null;

  const handleCart = (coffee) => {
    addCart(coffee);
    toast.success(`${coffee.coffeeName} added to cart`);
  };

  const handleWishList = (id) => {
    deleteItem(id);
    closeModal();
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <Toaster position="bottom-right" />

      <div className="overlay" onClick={closeModal}></div>
      <div className="modal container">
        <div className="details-child">
          <div className="details-child__img">
            <img
              src={coffee.coffeePic && coffee.coffeePic.name}
              alt={coffee.coffeeName}
            />
          </div>
          <div className="details-info">
            <h1 className="details-info__title">{coffee.coffeeName}</h1>
            <p className="details-info__price">$ {coffee.price}</p>
            <p className="details-info__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <button className="modal-btn" onClick={() => handleCart(coffee)}>
              add to cart
            </button>

            <button className="modal-btn" onClick={() => handleWishList(id)}>
              remove from wishlist
            </button>
          </div>
          <div className="modal-close" onClick={closeModal}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
