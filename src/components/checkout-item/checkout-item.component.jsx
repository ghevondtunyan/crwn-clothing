import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.action.js";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, removeItem, asd }) => {
  const { name, imageUrl, price, quntity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quntity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          {" "}
          &#x2770;
        </div>
        <span className="value">{quntity}</span>
        <div className="arrow" onClick={() => asd(cartItem)}>
          &#x2771;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  asd: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
