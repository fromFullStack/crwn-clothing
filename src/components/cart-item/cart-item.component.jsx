import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <dev className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </dev>
  </div>
);

export default CartItem;
