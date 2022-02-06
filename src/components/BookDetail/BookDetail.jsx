import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../../api/queries";
import PeopleIcon from "../../assets/icons/people.svg";
import LikeIcon from "../../assets/icons/heart.svg";
import BackIcon from "../../assets/icons/arrow.svg";

import CartIcon from "../../assets/icons/cartt.svg";
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
  //console.log(data);
  return (
    <>
      {" "}
      <div>
        <Link to="/">
          <button className="book-detail-back-btn">
            {" "}
            <img src={BackIcon} alt="back" /> Back
          </button>
        </Link>
      </div>
      <div className="book-detail-container">
        <section className="book-detail-info">
          <div className="book-detail-image-container">
            <img src={data.book.image_url} alt="book" />
          </div>

          <p className="book-detail-copies">
            {data.book.available_copies} copies available
          </p>
          <p className="book-detail-price">${data.book.price}</p>

          <button className="book-detail-add-to-cart">
            {" "}
            <img className="book-detail-cart-icon" src={CartIcon} alt="" />
            <span> Add to Cart</span>
          </button>
        </section>
        <section className="book-detail-description">
          <h3>
            {data.book.title}: {data.book.subtitle}
          </h3>
          {data.book.authors.map((author) => (
            <p className="book-detail-author" key={author.id}>
              {author.name}
            </p>
          ))}
          <p>2016</p>

          <div className="border-line" />

          <section className="book-detail-details">
            <div className="book-details-reader-wrapper">
              <div>
                <img src={PeopleIcon} alt="readers" />
                <p>{data.book.number_of_purchases}</p>
              </div>

              <div>
                <img src={LikeIcon} alt="likes" />

                <p>{data.book.likes}</p>
              </div>
            </div>
            <div>
              <p>Ratings:</p>
              <p></p>
            </div>
            <div>
              <p>Genre:</p>
              {data.book.genres.map((genre) => (
                <>
                  <p className="book-detail-genre" key={genre.id}>
                    {genre.name}
                  </p>
                  {","}{" "}
                </>
              ))}
            </div>
            <div>
              <p>Tags:</p>
              {data.book.tags.map((tag) => (
                <>
                  <p className="book-detail-tag" key={tag.id}>
                    {tag.name}
                  </p>
                  {","}{" "}
                </>
              ))}
            </div>
            <div>
              <p>Publisher:</p>

              <p>{data.book.publisher}</p>
            </div>
            <div>Released:</div>
          </section>
          <div className="border-line" />

          <section>
            <p>{data.book.full_description}</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default BookDetail;
