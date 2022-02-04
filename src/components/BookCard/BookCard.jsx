import React from "react";
import "./BookCard.scss";
const BookCard = ({ book }) => {
  return (
    <div className="book-card-container">
      <div>
        <img src={book.image} alt="book" className="book-image" />
      </div>
      <article className="book-details-container">
        <p className="book-title">{book.title}</p>

        <p>{book.author}</p>
        <p>{book.genre}</p>

        <div className="book-info">
          <div>
            <p>{book.readers}</p>
            <p>{book.likes}</p>
          </div>
          <div>
            <p>Rating: {book.rating}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BookCard;
