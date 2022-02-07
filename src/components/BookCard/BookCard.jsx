import React, { useContext } from "react";
import PeopleIcon from "../../assets/icons/people.svg";
import LikeIcon from "../../assets/icons/heart.svg";
import FullStar from "../../assets/icons/full-star.svg";
import EmptyStar from "../../assets/icons/empty-star.svg";

import CartIcon from "../../assets/icons/cart.svg";
import Rating from "react-rating";

import "./BookCard.scss";
import { ProductContext } from "../../context/cart";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  //console.log(book);
  const { addToCart } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div
      className="book-card-container"
      onClick={() => navigate(`/${book.id}`)}
    >
      <div>
        <img src={book.image_url} alt="book" className="book-image" />
      </div>
      <article className="book-details-container">
        <p className="book-title">{book.title}</p>

        <p className="small-text">{book.author}</p>
        <p className="small-text">{book.genre}</p>

        <div className="book-info">
          <div className="testtt">
            <div>
              <img src={PeopleIcon} alt="readers" />
              <p>{book.number_of_purchases}</p>
            </div>

            <div>
              <img src={LikeIcon} alt="likes" />

              <p>{book.likes}</p>
            </div>
          </div>
          <div className="book-rating">
            <p>Rating: {book.rating}</p>
            <p>
              <Rating
                //onChange={onChange}
                stop={5}
                readonly
                initialRating={book.rating}
                emptySymbol={<img src={EmptyStar} alt="dvd" />}
                fullSymbol={<img src={FullStar} alt="dkjcb" />}
              />
            </p>
          </div>
        </div>

        <p className="book-price">
          ${book.price} <span>{book.stock} copies available</span>
        </p>

        <div
          className="book-cart "
          onClick={() => {
            addToCart(book);
          }}
        >
          <img src={CartIcon} alt="" />
          <p>Add to Cart</p>
        </div>
      </article>
    </div>
  );
};

export default BookCard;
