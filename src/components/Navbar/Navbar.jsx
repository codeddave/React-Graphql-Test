import React from "react";
import Logo from "../../assets/icons/books.svg";
import CartIcon from "../../assets/icons/cart.svg";

import Brand from "../../assets/icons/brand-full.svg";

import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <div>
        {/*  <div className="logo-wrapper">
          <img src={Logo} alt="logo" />
        </div>

        <div className="logo-text-wrapper">
          <p>Quidax Books</p>
          <p>A flimsy book company</p>
        </div> */}

        <img src={Brand} alt="" srcset="" />
      </div>
      <div></div>

      <div className="logo-end">
        <div className="book-wrapper">
          <img src={Logo} alt="logo" />
        </div>
        <img src={CartIcon} alt="cart" />
      </div>
    </nav>
  );
};

export default Navbar;
