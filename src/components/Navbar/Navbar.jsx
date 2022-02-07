import React, { useContext, useEffect } from "react";
import Logo from "../../assets/icons/books.svg";
import CartIcon from "../../assets/icons/cart.svg";

import Brand from "../../assets/icons/brand-full.svg";
import SearchIcon from "../../assets/icons/search.svg";

import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../context/cart";
import Cart from "../Cart/Cart";
import ClickAwayListener from "react-click-away-listener";
const Navbar = () => {
  const { handleCartModal, isCartModalOpen, closeCartModal } =
    useContext(ProductContext);

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
            <img src={Brand} alt="" />
          </Link>
        </div>
        <div className="search-box">
          <input
            className="search"
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
          <ClickAwayListener onClickAway={closeCartModal}>
            <div>
              <Cart />
            </div>
          </ClickAwayListener>
        ) : null}
      </div>
    </section>
  );
};

export default Navbar;
