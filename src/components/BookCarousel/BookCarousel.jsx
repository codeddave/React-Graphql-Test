import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ImageOne from "../../assets/images/big-magic-cover_euc3rh.jpg";
import ImageTwo from "../../assets/images/built-to-last-cover_cb92oa.jpg";
import ImageThree from "../../assets/images/the-lean-startup-cover_dmwrjj.jpg";
import { Carousel } from "react-responsive-carousel";
import "./BookCarousel.scss";
import Slider from "infinite-react-carousel";

const BookCarousel = () => {
  const settings = {
    slidesPerRow: 8,
    dots: true,
    autoplay: true,
  };
  return (
    <section>
      <div className="carousel-title-wrapper">
        <h2 className="all-books-title">Featured Books</h2>
        <div className="border-line" />
      </div>

      <section className="carousel-container">
        <div className="left-arrow"></div>

        <Slider
          {...settings}
          classNam="full"
          nextArrow={
            <button
              type="button"
              className="arrow"
              style={{ color: "green", display: "block" }}
            >
              d.vljbjlb qlshkDCVqkhjvckhjqVCKHJQvkqwhvwkhv
            </button>
          }
          prevArrow={
            <button
              type="button"
              className="arrow"
              style={{ color: "green", display: "block" }}
            >
              d.vljbjlb qlshkDCVqkhjvckhjqVCKHJQvkqwhvwkhv
            </button>
          }
        >
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
