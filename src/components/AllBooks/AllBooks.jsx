import React from "react";

import ImageOne from "../../assets/images/the-effective-engineer-cover_bgj7u4.jpg";
import ImageTwo from "../../assets/images/built-to-last-cover_cb92oa.jpg";
import ImageThree from "../../assets/images/the-lean-startup-cover_dmwrjj.jpg";
import BookCard from "../BookCard/BookCard";
import "./AllBooks.scss";
import { useQuery } from "@apollo/client";
import { getAllBooks } from "../../api/queries";
const test = [
  {
    id: 1,
    image: ImageOne,
    title: "The Effective Engineer",
    author: "Edmod Lau",
    genre: "motivational",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },

  {
    id: 2,
    image: ImageThree,
    title: "Built to Last",
    author: "Jim Collins",
    genre: "Business, Entrepreneurship",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },
  {
    id: 3,
    image: ImageTwo,
    title: "The Lean Startup",
    author: "Eric Reis",
    genre: "Motivational",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },
  {
    id: 1,
    image: ImageOne,
    title: "The Effective Engineer",
    author: "Edmod Lau",
    genre: "motivational",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },

  {
    id: 2,
    image: ImageThree,
    title: "Built to Last",
    author: "Jim Collins",
    genre: "Business, Entrepreneurship",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },
  {
    id: 3,
    image: ImageTwo,
    title: "The Lean Startup",
    author: "Eric Reis",
    genre: "Motivational",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },
  {
    id: 1,
    image: ImageOne,
    title: "The Effective Engineer",
    author: "Edmod Lau",
    genre: "motivational",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },

  {
    id: 2,
    image: ImageThree,
    title: "Built to Last",
    author: "Jim Collins",
    genre: "Business, Entrepreneurship",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },
  {
    id: 3,
    image: ImageTwo,
    title: "The Lean Startup",
    author: "Eric Reis",
    genre: "Motivational",
    likes: 9,
    readers: 31,
    rating: 4,
    price: 29.99,
    stock: 23,
  },
];
const AllBooks = () => {
  const { data, loading, error } = useQuery(getAllBooks);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error occured {error.message}</p>;
  console.log(data);
  return (
    <div className="all-books">
      {test.map((book) => (
        <BookCard book={book} />
      ))}
    </div>
  );
};

export default AllBooks;
