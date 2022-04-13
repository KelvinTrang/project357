import React from "react";
import Items from "../components/Items";
import Cart from "../components/Cart";
import { AiFillStar } from "react-icons/ai";

export default function Restaurant() {
  return (
    <div>
      <div style={{ margin: "2% 10% 0 10%" }}>
        <div style={{ display: "flex" }}>
          <h1>
            <b>Chicha Donburi</b> &nbsp;
          </h1>
          <div style={{ fontSize: "2.3em" }}>
            <AiFillStar style={{ color: "#ff837a" }} />
            4.7
          </div>
        </div>
        Japanese &#8211; 1433A Bishop St, Montreal, Quebec H3G 2E4 &#8211;{" "}
        <a href="#">Get directions</a>
      </div>

      <div style={{ display: "flex", padding: "2% 10%" }}>
        <div style={{ flex: "80%", marginRight: "25px" }}>
          <section id="section-1">
            <div>
              <h4>Starters</h4>
            </div>
            <div style={{ padding: "0 1%" }}>
              <Items
                itemName="Yam Fries"
                description="French fries with spicy mayo sauce"
                price="5.50"
                img="https://imgur.com/l2iHbvv.png"
              />
            </div>

            <div>
              <h4>Main Courses</h4>
            </div>
            <div style={{ padding: "0 1%" }}>
              <Items
                itemName="Citrus Chicken"
                description="Bbq chicken on rice with vegetables"
                price="14.30"
                img="https://imgur.com/jmVcjEx.png"
              />

              <Items
                itemName="Gyu Don"
                description="Bbq beef on rice with vegetables"
                price="12.10"
                img="https://imgur.com/GktPqYd.png"
              />
              <Items
                itemName="Yaki Don"
                description="Minced beef on rice with vegetables"
                price="12.10"
                img="https://imgur.com/GktPqYd.png"
              />
              <Items
                itemName="Pork Tonkatsu Don"
                description="Fried pork tonkatsu on rice with vegetables"
                price="12.50"
                img="https://imgur.com/jmVcjEx.png"
              />
              <Items
                itemName="Chicken Tonkatsu Don"
                description="Fried chicken tonkatsu on rice with vegetables"
                price="12.50"
                img="https://imgur.com/jmVcjEx.png"
              />
              <Items
                itemName="Curry Tomato Don"
                description="Curry tomato on rice with vegetables"
                price="12.50"
                img="https://imgur.com/uGluGxZ.png"
              />
              <Items
                itemName="Curry Chicken Tonkatsu Don"
                description="Curry fried chicken tonkatsu on rice with vegetables"
                price="12.50"
                img="https://imgur.com/uGluGxZ.png"
              />
              <Items
                itemName="Curry Pork Tonkatsu Don"
                description="Curry fried pork tonkatsu on rice with vegetables"
                price="12.50"
                img="https://imgur.com/uGluGxZ.png"
              />
              <Items
                itemName="Menchikatsu Don"
                description="Menchikatsu on rice with vegetables"
                price="13.50"
                img="https://imgur.com/GXNdDJz.png"
              />
            </div>
          </section>
        </div>
        <Cart />
      </div>
    </div>
  );
}
