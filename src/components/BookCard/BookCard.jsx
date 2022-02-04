import React from "react";
import PeopleIcon from "../../assets/icons/people.svg";
import LikeIcon from "../../assets/icons/heart.svg";

import CartIcon from "../../assets/icons/cart.svg";

import "./BookCard.scss";
const BookCard = ({ book }) => {
  return (
    <div className="book-card-container">
      <div>
        <img src={book.image} alt="book" className="book-image" />
      </div>
      <article className="book-details-container">
        <p className="book-title">{book.title}</p>

        <p className="small-text">{book.author}</p>
        <p className="small-text">{book.genre}</p>

        <div className="book-info">
          <div className="test">
            <div>
              <img src={PeopleIcon} alt="readers" />
              <p>{book.readers}</p>
            </div>

            <div>
              <img src={LikeIcon} alt="readers" />

              <p>{book.likes}</p>
            </div>
          </div>
          <div className="book-rating">
            <p>Rating: {book.rating}</p>
          </div>
        </div>

        <p className="book-price">
          ${book.price} <span>{book.stock} copies available</span>
        </p>

        <div className="book-cart ">
          <img src={CartIcon} alt="" />
          <p>Add to Cart</p>
        </div>
      </article>
    </div>
  );
};

export default BookCard;
