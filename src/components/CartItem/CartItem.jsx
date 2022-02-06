import React from "react";
import ImageOne from "../../assets/images/the-effective-engineer-cover_bgj7u4.jpg";
import ImageTwo from "../../assets/images/built-to-last-cover_cb92oa.jpg";
import ImageThree from "../../assets/images/the-lean-startup-cover_dmwrjj.jpg";
import "./CartItem.scss";
const CartItem = () => {
  return (
    <section className="book-cart-ss">
      <div className="book-cart-container">
        <div className="book-cart-details-wrapper">
          <img src={ImageOne} alt="book" />

          <div className="book-cart-details ">
            <p className="book-cart-title">The Effective Engineer</p>
            <p>Edmund Lau</p>

            <p>Remove</p>
          </div>
        </div>

        <div>
          <p>$29.99</p>

          <p>$59.9</p>
        </div>
      </div>
      <div className="border-line" />
    </section>
  );
};

export default CartItem;
