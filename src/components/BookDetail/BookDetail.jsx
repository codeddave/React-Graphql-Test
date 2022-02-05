import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../api/queries";
import ImageOne from "../../assets/images/big-magic-cover_euc3rh.jpg";
import "./BookDetail.scss";
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
      <section
        style={{ border: "1px solid black" }}
        className="book-detail-info"
      >
        <div className="book-detail-image-container">
          <img src={data.book.image_url} alt="book" />
        </div>

        <p className="book-detail-copies">
          {data.book.available_copies} copies available
        </p>
        <p className="book-detail-price">${data.book.price}</p>

        <button>Add to Cart</button>
      </section>
      <section
        style={{ border: "1px solid black" }}
        className="book-detail-description"
      >
        <h3>
          {data.book.title}: {data.book.subtitle}
        </h3>
        {data.book.authors.map((author) => (
          <p key={author.id}>{author.name}</p>
        ))}
      </section>
    </div>
  );
};

export default BookDetail;
