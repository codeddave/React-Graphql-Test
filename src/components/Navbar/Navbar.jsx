import React, { useContext, useEffect } from "react";
import Logo from "../../assets/icons/books.svg";
import CartIcon from "../../assets/icons/cart.svg";

import Brand from "../../assets/icons/brand-full.svg";
import BrandLite from "../../assets/icons/brand-lite.svg";

import SearchIcon from "../../assets/icons/search.svg";

import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../context/cart";
import Cart from "../Cart/Cart";
import ClickAwayListener from "react-click-away-listener";
import { CSSTransition } from "react-transition-group";
import { SearchContext } from "../../context/search";

const Navbar = () => {
  const { handleCartModal, isCartModalOpen, closeCartModal } =
    useContext(ProductContext);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const handleBookSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const location = useLocation();

  useEffect(() => {
    closeCartModal();
  }, [location, closeCartModal]);
  return (
    <section className="nav-container">
      <nav>
        <div>
          {/*  <div className="logo-wrapper">
          <img src={Logo} alt="logo" />
        </div>

        <div className="logo-text-wrapper">
          <p>Quidax Books</p>
          <p>A flimsy book company</p>
        </div> */}

          <Link to="/">
            <img src={Brand} alt="" className="brand-full" />
          </Link>

          <Link to="/">
            <img src={BrandLite} alt="" className="brand-lite" />
          </Link>
        </div>
        <div className="search-box">
          <input
            className="search"
            value={searchQuery}
            onChange={handleBookSearch}
            type="text"
            placeholder="Search books, genres, authors, etc."
          />
          <img src={SearchIcon} alt="search" />
        </div>

        <div className="logo-end">
          <div className="book-wrapper">
            <img src={Logo} alt="logo" />
          </div>
          <img
            src={CartIcon}
            onClick={handleCartModal}
            alt="cart"
            className="nav-cart-icon"
          />
        </div>
      </nav>
      <div>
        {isCartModalOpen ? (
          <CSSTransition
            in={isCartModalOpen}
            timeout={5000}
            classNames="slideInRight"
            appear={true}
            unmountOnExit
          >
            <ClickAwayListener onClickAway={closeCartModal}>
              <div>
                <Cart />
              </div>
            </ClickAwayListener>
          </CSSTransition>
        ) : null}
      </div>
    </section>
  );
};

export default Navbar;
