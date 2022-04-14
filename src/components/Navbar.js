import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Navbar.css'

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
              <Link to="/" className="show-submenu">
                <h5>Home</h5>
              </Link>
              <ul>
                <li>
                  <Link to="/restaurant">Top Rated Restaurants</Link>
                </li>
              </ul>
            </li>

            <li className="submenu">
              <Link to="/restaurant" className="show-submenu">
                <h5>Restaurants</h5>
              </Link>
              <ul>
                <li>
                  <Link to="/help">Help and Faq</Link>
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
              <Link to="/"><h5>Sign In</h5> </Link>
            </li>
            <li>
              <Link to="/help"><h5>Help</h5></Link>
            </li>
            <li>
              <a href="#" className="wishlist_bt_top" title="Your wishlist">
                <i>
                  <AiFillHeart />
                </i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
