import React from "react";
import Items from "../components/Items";
import Cart from "../components/Cart";

export default function Restaurant() {
  return (
    <div>
      <div style={{ display: "flex", padding: "5% 10%" }}>
        <div style={{ flex: "80%", marginRight: "25px" }}>
          <section id="section-1">
            <div style={{ margin: "15px" }}>
              <h4>Starters</h4>
            </div>
            <div class="table_wrapper">
              <table class="table table-borderless cart-list menu-gallery">
                {/* <thead>
                  <tr>
                    <th style={{ marginLeft: "10px" }}>Item</th>
                    <th>Price</th>
                    <th>Order</th>
                  </tr>
                </thead> */}

                <tbody>
                  <Items
                    itemName="Yam Fries"
                    description="French fries with spicy mayo sauce"
                    price="5.50"
                    img="https://imgur.com/l2iHbvv.png"
                  />
                  <div style={{ margin: "15px" }}>
                    <h4>Main Courses</h4>
                  </div>

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
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <Cart />
      </div>
    </div>
  );
}
