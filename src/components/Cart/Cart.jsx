import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.scss";
import CartIcon from "../../assets/icons/cart.svg";

import BackIcon from "../../assets/icons/arrow.svg";
import { ProductContext } from "../../context/cart";
const Cart = () => {
  const { closeCartModal } = useContext(ProductContext);
  return (
    <div className="cart-container">
      <div className="cart-nav">
        <div>
          <button className="cart-back-btn" onClick={closeCartModal}>
            {" "}
            <img src={BackIcon} alt="back" /> Back
          </button>
        </div>

        <div>
          <p>Your Cart</p>
          <img src={CartIcon} alt="cart" />
        </div>
      </div>

      <CartItem />
    </div>
  );
};

export default Cart;
