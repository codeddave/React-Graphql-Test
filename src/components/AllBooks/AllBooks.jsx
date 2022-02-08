import React, { useContext, useState } from "react";

import BookCard from "../BookCard/BookCard";
import "./AllBooks.scss";
import { useQuery } from "@apollo/client";
import { getAllBooks, getBooksByFilter } from "../../api/queries";
import { SearchContext } from "../../context/search";
import { TailSpin } from "react-loader-spinner";

const AllBooks = () => {
  const { data, loading, error } = useQuery(getAllBooks);

  const { searchQuery } = useContext(SearchContext);

  if (loading)
    return (
      <div className="loader ">
        <TailSpin type="TailSpin" color="#0f4a7b" />
      </div>
    );

  if (error) return <p>error occured {error.message}</p>;
  return (
    <section className="all-books-container">
      <h2 className="all-books-title">All Books</h2>
      <div className="border-line" />

      <div className="all-books">
        {data?.books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
