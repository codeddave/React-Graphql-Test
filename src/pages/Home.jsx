import React from "react";
import AllBooks from "../components/AllBooks/AllBooks";
import BookCarousel from "../components/BookCarousel/BookCarousel";

const Home = () => {
  return (
    <div>
      <BookCarousel />
      <AllBooks />
    </div>
  );
};

export default Home;
