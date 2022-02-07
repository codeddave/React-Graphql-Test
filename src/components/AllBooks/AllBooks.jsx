import React from "react";

import BookCard from "../BookCard/BookCard";
import "./AllBooks.scss";
import { useQuery } from "@apollo/client";
import { getAllBooks } from "../../api/queries";

const AllBooks = () => {
  const { data, loading, error } = useQuery(getAllBooks);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error occured {error.message}</p>;
  //console.log(data);
  return (
    <section className="all-books-container">
      <h2 className="all-books-title">All Books</h2>
      <div className="border-line" />
      <div className="all-books">
        {data.books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
