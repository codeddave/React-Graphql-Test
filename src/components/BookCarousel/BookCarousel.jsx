import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ImageOne from "../../assets/images/big-magic-cover_euc3rh.jpg";
import ImageTwo from "../../assets/images/built-to-last-cover_cb92oa.jpg";
import ImageThree from "../../assets/images/the-lean-startup-cover_dmwrjj.jpg";
import PrevIcon from "../../assets/icons/back.svg";
import NextIcon from "../../assets/icons/next.svg";

import { Carousel } from "react-responsive-carousel";
import "./BookCarousel.scss";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { getFeaturedBooks } from "../../api/queries";
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="prev-arrow arrow">
      <img src={PrevIcon} alt="previous" />
    </div>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="next-arrow arrow">
      <img src={NextIcon} alt="next" />
    </div>
  );
};
const BookCarousel = () => {
  const { data, loading, error } = useQuery(getFeaturedBooks);
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
            <>
              <div className="image-hover"></div>
              <div className="carousel-image-container">
                <img src={book.image_url} alt={book.title} />
              </div>
            </>
          ))}
        </Slider>
      </section>
    </section>
  );
};

export default BookCarousel;
