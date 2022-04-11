import React from "react";
import { AiFillHome, AiTwotonePhone, AiFillMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="wave footer"></div>
      <div className="container margin_60_40 fix_mobile">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_1">Quick Links</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_1">
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Add your restaurant</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_2">Categories</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_2">
              <ul>
                <li>
                  <a href="#">Top Categories</a>
                </li>
                <li>
                  <a href="#">Top Rated Restaurants</a>
                </li>
                <li>
                  <a href="#">Best Price</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_3">Contacts</h3>
            <div className="collapse dont-collapse-sm contacts" id="collapse_3">
              <ul>
                <li>
                  <i>
                    <AiFillHome />
                  </i>
                  1455 Boulevard de Maisonneuve O<br />
                  Montréal, QC H3G
                </li>
                <li>
                  <i>
                    <AiTwotonePhone />
                  </i>
                  514-123-4567
                </li>
                <li>
                  <i>
                    <AiFillMail />
                  </i>
                  <a href="#">deezcountz@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-bs-target="#collapse_4">Keep in touch</h3>
            <div className="collapse dont-collapse-sm" id="collapse_4">
              <div id="newsletter">
                <div id="message-newsletter"></div>
                <div className="form-group">
                  <input
                    name="email_newsletter"
                    id="email_newsletter"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <button id="submit-newsletter" type="submit">
                    <i className="arrow_carrot-right"></i>
                  </button>
                </div>
              </div>
              <div className="follow_us">
                <h5>Follow Us</h5>
                <ul>
                  <li>
                    <a href="#">
                      <img src="https://imgur.com/sEclT3X.png" alt="" className="lazy" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://imgur.com/G3e5UOO.png" alt="" className="lazy" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://imgur.com/jxpquFq.png" alt="" className="lazy" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://imgur.com/ie4IZje.png" alt="" className="lazy" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row add_bottom_25">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <ul className="additional_links">
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <span>© DeezCountz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
