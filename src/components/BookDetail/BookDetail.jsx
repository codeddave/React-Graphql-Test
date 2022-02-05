import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../api/queries";
import ImageOne from "../../assets/images/big-magic-cover_euc3rh.jpg";

const BookDetail = ({ book }) => {
  const { id } = useParams();

  const { error, data, loading } = useQuery(getBook, {
    variables: {
      id,
    },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error occured {error.message}</p>;
  console.log(data);
  return (
    <div className="book-detail-container">
      <section>
        <img src={data.book.image_url} alt="book" />

        <p>23 copies available</p>
        <p>$29.99</p>

        <button>Add to Cart</button>
      </section>
      <section>
        <h3>Big Magic: Creative Living Beyond Fear</h3>
        <p>Elizabeth GIlbert</p>
      </section>
    </div>
  );
};

export default BookDetail;
