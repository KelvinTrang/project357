import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header black_nav clearfix element_to_stick">
      <div className="container" style={{ fontSize: "20px" }}>
        <div id="logo">
          <Link to="/">
            <img src="https://i.imgur.com/rUSQ42t.png" width="250" height="47.25" alt="" />
          </Link>
        </div>
        <div className="layer"></div>
        <a href="#0" className="open_close">
          <i className="icon_menu"></i>
          <span>Menu</span>
        </a>
        <nav className="main-menu">
          <div id="header_menu">
            <Link to="/restaurant" className="open_close">
              <i className="icon_close"></i>
              <span>Menu</span>
            </Link>
            <Link to="/restaurant">
              <img src="img/logo.svg" width="162" height="35" alt="" />
            </Link>
          </div>
          <ul>
            <li className="submenu">
              <Link to="/restaurant" className="show-submenu">
                Home
              </Link>
              <ul>
                <li>
                  <Link to="/restaurant">Top Rated Restaurants</Link>
                </li>
              </ul>
            </li>

            <li className="submenu">
              <Link to="/restaurant" className="show-submenu">
                Restaurants
              </Link>
              <ul>
                <li>
                  <Link to="/">Help and Faq</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Leave a review</Link>
                </li>
                <li>
                  <Link to="/">Contacts</Link>
                </li>
                <li>
                  <Link to="/">Coming Soon</Link>
                </li>
                <li>
                  <Link to="/">Sign Up</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/restaurant" className="wishlist_bt_top" title="Your wishlist">
                {" "}
                <i>
                  <AiFillHeart />
                </i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
