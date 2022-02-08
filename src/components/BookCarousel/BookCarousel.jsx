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
    autoPlay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <section>
      <div className="carousel-title-wrapper">
        <h2 className="all-books-title">Featured Books</h2>
        <div className="border-line" />
      </div>

      <section className="carousel-container">
        <Slider {...settings} classNam="full">
          {data?.books.map((book) => (
            <div key={book.id} className="carousel-image-container">
              <div className="image-hover">
                <p>{`${
                  book.available_copies > 0 ? "available" : "not available"
                }`}</p>

                <p>{book.title}</p>
                <p>{book.author}</p>

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
                    <p>Ratingsdwvev: </p>
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
