import { createSelector } from "reselect";

const selectorCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectorCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectorCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quntity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quntity * cartItem.price,
    0
  )
);
