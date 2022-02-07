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
  const settings = {
    slidesPerRow: 8,
    dots: true,
    infinite: true,
    speed: 1000,
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
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
          <div>
            <img src={ImageThree} alt="book22" className="carousel-image" />
          </div>
        </Slider>
      </section>
    </section>
  );
};

export default BookCarousel;
