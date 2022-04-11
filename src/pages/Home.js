import React from "react";
import { Link } from "react-router-dom";
import RestaurantLink from "../components/RestaurantLink";

const column1 = [
  {
    picture: "https://imgur.com/O22okpt.png",
    score: "9.5",
    type: "Italian",
    name: "Restaurant Di Menna",
    address: "6313 Rue Jarry E, Saint-Léonard, QC H1P 1W1",
    discount: "-15%",
    price: "25",
    opening: "11am-8pm",
  },
  {
    picture: "https://imgur.com/rwIoKqA.png",
    score: "8.5",
    type: "Mexican",
    name: "Mr. Azteca",
    address: "7349 Rue St-Hubert, Montréal, QC H2R 2N4",
    discount: "-10%",
    price: "20",
    opening: "11am-9pm",
  },
  {
    picture: "https://imgur.com/8Ra0r3M.png",
    score: "9.0",
    type: "Sushi - Japanese",
    name: "Ryu",
    address: "1474 Peel St, Montreal, Quebec H3A 1S8",
    discount: "-15%",
    price: "30",
    opening: "5pm-1am",
  },
];

const column2 = [
  {
    picture: "https://imgur.com/hY8dSES.png",
    score: "9.5",
    type: "Vegetarian",
    name: "Sham",
    address: "152 Av. Mozart E, Montréal, QC H2S 1B4",
    discount: "-25%",
    price: "20",
    opening: "11am-8pm",
  },
  {
    picture: "https://i.imgur.com/koUSEk9.jpg",
    score: "8.0",
    type: "Salads",
    name: "Mandy's",
    address: "2313 Saint-Catherine St W, Montreal, Quebec H3H 1N2",
    discount: "-10%",
    price: "15",
    opening: "11am-9pm",
  },
  {
    picture: "https://imgur.com/O22okpt.png",
    score: "8.6",
    type: "Dumpling",
    name: "Sammi & Soupe Dumpling",
    address: "1909 Saint-Catherine St W, Montreal, Quebec H3H 2E8",
    discount: "-25%",
    price: "12",
    opening: "11am-9pm",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <div className="hero_single version_1">
          <div className="opacity-mask">
            <div className="container">
              <div className="row justify-content-lg-start justify-content-md-center">
                <div className="col-xl-7 col-lg-8">
                  <h1>Affordable Takeaway Food for Students</h1>
                  <p>The best restaurants at the best price</p>
                  <div className="row g-0 custom-search-input">
                    <div className="col-lg-10">
                      <div className="form-group">
                        <input
                          className="form-control no_border_r"
                          type="text"
                          id="autocomplete"
                          placeholder="Address, neighborhood..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <Link to="/restaurant">
                        <button className="btn_1 gradient" type="submit">
                          Search
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="search_trends">
                    <h5>Trending: &nbsp;</h5>
                    <ul>
                      <li>
                        <a href="#">Sushi</a>
                      </li>
                      <li>
                        <a href="#">Burger</a>
                      </li>
                      <li>
                        <a href="#">Chinese</a>
                      </li>
                      <li>
                        <a href="#">Pizza</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wave hero"></div>
        </div>

        <div className="bg_gray">
          <div className="container margin_60_40">
            <div className="main_title">
              <h2>Top Rated Restaurants</h2>
              <p>Here are the top rated restaurants.</p>
              <a href="#">View All &rarr;</a>
            </div>
            <div className="row add_bottom_25">
              <div className="col-lg-6">
                <div className="list_home">
                  <ul>
                    {column1.map((restaurant) => (
                      <RestaurantLink {...restaurant} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="list_home">
                  <ul>
                    {column2.map((restaurant) => (
                      <RestaurantLink {...restaurant} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape_element_2">
          <div className="container margin_60_0">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box_how">
                      <figure>
                        <img src="https://imgur.com/TO95q2y.png" alt="" width="150" height="157" className="lazy" />
                      </figure>
                      <h3>Easy discounts</h3>
                      <p>Discover new food with superb discounts</p>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="box_how">
                      <figure>
                        <img src="https://imgur.com/4w2lx7i.png" alt="" width="150" height="130" className="lazy" />
                      </figure>
                      <h3>Enjoy Food</h3>
                      <p>Eat delicious food in top rated restaurants</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 d-block d-lg-none">
                  <a href="#" className="btn_1 medium gradient pulse_bt mt-2">
                    Register Now!
                  </a>
                </p>
              </div>
              <div className="col-lg-5 offset-lg-1 align-self-center">
                <div className="intro_txt">
                  <div className="main_title">
                    <span>
                      <em></em>
                    </span>
                    <h2>Eat Good While Maintaining a Healthy Wallet!</h2>
                  </div>
                  <p className="lead">
                    Start looking for delicious food and restaurants that offers good deals. While eating, receive
                    discounts to make sure you do not end in the street!
                  </p>
                  <p>
                    Our free service allows student to find restaurants and use discount to make sure they are able to
                    survive with their tight budget.
                  </p>
                  <p>
                    <a href="#" className="btn_1 medium gradient pulse_bt mt-2">
                      Register
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
