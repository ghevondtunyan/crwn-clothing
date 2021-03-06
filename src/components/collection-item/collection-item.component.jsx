import React from "react";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import CustomButton from "../custem-button/custom-button.component";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, price, name } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
