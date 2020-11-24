export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quntity: cartItem.quntity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quntity: 1 }];
};

export const removeItemFormCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartitem) => cartitem.id === cartItemToRemove.id
  );

  if (existingCartItem.quntity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quntity: cartItem.quntity - 1 }
      : cartItem
  );
};
