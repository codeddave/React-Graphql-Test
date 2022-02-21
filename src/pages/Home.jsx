import React, { useContext } from "react";
import AllBooks from "../components/AllBooks/AllBooks";
import BookCarousel from "../components/BookCarousel/BookCarousel";
import SearchResults from "../components/SearchResults/SearchResults";
import { SearchContext } from "../context/search";

const Home = () => {
  const { searchQuery } = useContext(SearchContext);

  return (
    <div style={{ position: "relative" }}>
      {searchQuery ? null : <BookCarousel />}

      {searchQuery ? <SearchResults /> : <AllBooks />}
    </div>
  );
};

export default Home;
