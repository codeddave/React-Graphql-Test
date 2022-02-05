import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ImageOne from "../../assets/images/the-effective-engineer-cover_bgj7u4.jpg";
import ImageTwo from "../../assets/images/built-to-last-cover_cb92oa.jpg";
import ImageThree from "../../assets/images/the-lean-startup-cover_dmwrjj.jpg";
import { Carousel } from "react-responsive-carousel";
import "./BookCarousel.scss";
const BookCarousel = () => {
  return (
    <section className="carousel-container">
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        <div style={{ display: "flex" }} className="set">
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageThree} alt="book22" className="carousel-image" />
        </div>
        <div style={{ display: "flex" }} className="set">
          <img src={ImageThree} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
          <img src={ImageOne} alt="book22" className="carousel-image" />
        </div>
      </Carousel>
    </section>
  );
};

export default BookCarousel;
