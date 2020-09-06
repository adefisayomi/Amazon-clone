import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider"
function Header() {
  const [{ basket }] = useStateValue()
  console.log(basket)
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Hello Clace</span>
            <span className="header__optionLine2">Sign in</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Return</span>
            <span className="header__optionLine2">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLine1">Your</span>
            <span className="header__optionLine2">Prime</span>
          </div>
        </Link>
      </div>
      {/*  basket icon */}
      <Link to="checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon className="header__optionLine2 header__basketCount" />
  <span className="header__optionLine2 header__basketCount">{ basket?.length }</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
