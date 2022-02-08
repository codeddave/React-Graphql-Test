import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { TailSpin } from "react-loader-spinner";
import { getBooksByFilter } from "../../api/queries";
import { SearchContext } from "../../context/search";
import BookCard from "../BookCard/BookCard";

import "./SearchResults.scss";
const SearchResults = () => {
  const { searchQuery } = useContext(SearchContext);

  const { data, loading, error } = useQuery(getBooksByFilter, {
    variables: {
      filter: searchQuery,
    },
  });
  if (loading || !data)
    return (
      <div className="loader">
        <TailSpin type="TailSpin" color="#0f4a7b" />
      </div>
    );
  return (
    <section className="search-results-container">
      <h2 className="search-results-title">
        {data.books.length} results found for `{searchQuery}`
      </h2>
      <div className="border-line" />
      <div className="search-results">
        {data.books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
