import React, { useContext } from "react";
import ImageOne from "../../assets/images/the-effective-engineer-cover_bgj7u4.jpg";
import ImageTwo from "../../assets/images/built-to-last-cover_cb92oa.jpg";
import ImageThree from "../../assets/images/the-lean-startup-cover_dmwrjj.jpg";
import "./CartItem.scss";
import { ProductContext } from "../../context/cart";
const CartItem = ({ book }) => {
  const { increment, decrement } = useContext(ProductContext);

  return (
    <section className="book-cart-ss">
      <div className="book-cart-container">
        <div className="book-cart-details-wrapper">
          <img src={book.image_url} alt="book" />

          <div className="book-cart-details ">
            <p className="book-cart-title">{book.title}</p>
            <p>{book.author}</p>

            <p>Remove</p>
          </div>
        </div>

        <div className="testt">
          <p>${book.price}</p>

          <div className="cart-count">
            <span onClick={() => decrement(book.id)}>-</span>
            <span>{book.count}</span>
            <span
              onClick={() => {
                increment(book.id);
              }}
            >
              +
            </span>
          </div>

          <p>${book.total.toFixed(2)}</p>
        </div>
      </div>
      <div className="border-line" />
    </section>
  );
};

export default CartItem;
