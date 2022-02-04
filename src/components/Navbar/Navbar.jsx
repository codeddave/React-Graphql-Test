import React from "react";
import Logo from "../../assets/icons/book.svg";
import CartIcon from "../../assets/icons/cart.svg";

import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" />
        </div>

        <div className="logo-text-wrapper">
          <p>Quidax Books</p>
          <p>A flimsy book company</p>
        </div>
      </div>
      <div></div>

      <div>
        <div className="book-wrapper">
          <img src={Logo} alt="logo" />
        </div>
        <img src={CartIcon} alt="cart" />
      </div>
    </nav>
  );
};

export default Navbar;
