export const removeItemFromCart = (cart, cartItemToRemove) => {
  const existingCartItem = cart.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cart.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cart.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addItemToCart = (cart, cartItemToAdd) => {
  const existingCartItem = cart.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cart.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cart, { ...cartItemToAdd, quantity: 1 }];
};
