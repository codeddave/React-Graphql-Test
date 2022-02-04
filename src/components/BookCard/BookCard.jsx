import React from "react";
import ImageOne from "../../assets/images/the-effective-engineer-cover_bgj7u4.jpg";
import ImageTwo from "../../assets/images/built-to-last-cover_cb92oa.jpg";
import ImageThree from "../../assets/images/the-lean-startup-cover_dmwrjj.jpg";

const data = [
  {
    id: 1,
    image: ImageOne,
    title: "The Effective Engineer",
    author: "Edmod Lau",
    genre: "motivational",
    likes: 9,
    reader: 31,
    rating: 4,
    price: 29,
    stock: 23,
  },

  {
    id: 2,
    image: ImageThree,
    title: "Built to Last",
    author: "Jim Collins",
    genre: "Business, Entrepreneurship",
    likes: 9,
    reader: 31,
    rating: 4,
    price: 29,
    stock: 23,
  },
  {
    id: 3,
    image: ImageTwo,
    title: "The Lean Startup",
    author: "Eric Reis",
    genre: "Motivational",
    likes: 9,
    reader: 31,
    rating: 4,
    price: 29,
    stock: 23,
  },
];
const BookCard = () => {
  return (
    <div>
      {data.map((book) => (
        <div>
          <div>
            <img src={book.image} alt="book" />
          </div>
          <div>
            <p>{book.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
