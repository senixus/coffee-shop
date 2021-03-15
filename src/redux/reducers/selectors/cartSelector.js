import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartTotalPrice = createSelector([selectCart], (cart) => {
  return cart.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );
});
