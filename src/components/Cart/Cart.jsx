import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.scss";
import CartIcon from "../../assets/icons/cart.svg";

import BackIcon from "../../assets/icons/arrow.svg";
import { ProductContext } from "../../context/cart";
import { useCartData } from "../hooks/useCartData";
const Cart = () => {
  const { closeCartModal } = useContext(ProductContext);
  const { cartData } = useCartData();
  console.log(cartData);
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
      {cartData?.cart.map((cartItem) => (
        <CartItem book={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
