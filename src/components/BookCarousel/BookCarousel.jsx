import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PrevIcon from "../../assets/icons/back.svg";
import NextIcon from "../../assets/icons/next.svg";
import PeopleIcon from "../../assets/icons/dd.svg";
import LikeIcon from "../../assets/icons/df.svg";
import FullStar from "../../assets/icons/full-star.svg";
import EmptyStar from "../../assets/icons/empty-star.svg";
import Rating from "react-rating";
import "./BookCarousel.scss";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { getFeaturedBooks } from "../../api/queries";
import { useNavigate } from "react-router-dom";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prev-arrow arrow">
      <img src={PrevIcon} alt="previous" />
    </div>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="next-arrow arrow">
      <img src={NextIcon} alt="next" />
    </div>
  );
};
const BookCarousel = () => {
  const navigate = useNavigate();

  const { data } = useQuery(getFeaturedBooks);
  const settings = {
    slidesPerRow: 6,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesPerRow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesPerRow: 2,
        },
      },
    ],
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <section className="ghh">
      <div className="carousel-title-wrapper">
        <h2 className="all-books-title">Featured Books</h2>
        <div className="border-line" />
      </div>

      <section className="carousel-container">
        <Slider {...settings} classNam="full">
          {data?.books.map((book) => (
            <div
              key={book.id}
              className="carousel-image-container"
              onClick={() => navigate(`/${book.id}`)}
            >
              <div className="image-hover">
                <p className="available">{`${
                  book.available_copies > 0 ? "Available" : "Not available"
                }`}</p>

                <p className="title">{book.title}</p>
                <p>{book.authors[0].name}</p>

                <p className="sub-title">Genre</p>
                <p>{book.genres[0].name}</p>

                <div className="image-hover-div">
                  <div className="details">
                    <div>
                      <img src={PeopleIcon} alt="readers" className="img" />
                      <p>{book.number_of_purchases}</p>
                    </div>

                    <div>
                      <img src={LikeIcon} alt="likes" />
                      <p>{book.likes}</p>
                    </div>
                  </div>

                  <div className="rating">
                    <p>Ratings: {book.rating} </p>
                    <p style={{ zIndex: "888" }}>
                      <Rating
                        //onChange={onChange}
                        stop={5}
                        readonly
                        initialRating={book.rating}
                        emptySymbol={<img src={EmptyStar} alt="dvd" />}
                        fullSymbol={<img src={FullStar} alt="dkjcb" />}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <img src={book.image_url} alt={book.title} />
            </div>
          ))}
        </Slider>
      </section>
    </section>
  );
};

export default BookCarousel;
