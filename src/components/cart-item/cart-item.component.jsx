import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, name, price, quntity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quntity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
