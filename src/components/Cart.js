import { AiFillMinusCircle } from "react-icons/ai";
export default function Cart(props) {
  const itemStyle = {
    display: "flex",
    marginTop: "10px",
    padding: "0 2%",
    fontSize: "1.2em",
  };

  return (
    <div
      class="col-lg-4 container"
      id="sidebar_fixed"
      style={{ margin: "35px 0 0 20px", borderRadius: "50px" }}
    >
      <div
        class="box_order mobile_fixed"
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "0 0 8px 8px",
        }}
      >
        <div
          class="head"
          style={{
            backgroundColor: "#474747",
            textAlign: "center",
            padding: "15px 0px 6px 0px",
            borderRadius: "8px 8px 2px 2px ",
            marginBottom: "4%",
          }}
        >
          <h4 style={{ color: "white" }}>
            <b>Order Summary</b>
          </h4>
          <a href="#0" class="close_panel_mobile">
            <i class="icon_close"></i>
          </a>
        </div>
        <div
          class="main"
          style={{
            padding: "0 5% 5% 5%",
          }}
        >
          <div style={itemStyle}>
            <div style={{ flex: "70%" }}>
              {" "}
              <AiFillMinusCircle />
              &emsp;
              <a href="#0">2x Yam Fries</a>
            </div>

            <div>$11.00</div>
          </div>
          <div style={itemStyle}>
            <div style={{ flex: "70%" }}>
              {" "}
              <AiFillMinusCircle />
              &emsp;
              <a href="#0">1x Gyu Don</a>
            </div>

            <div>$12.10</div>
          </div>
          <div style={itemStyle}>
            <div style={{ flex: "70%" }}>
              {" "}
              <AiFillMinusCircle />
              &emsp;
              <a href="#0">1x Pork Tonkatsu Don</a>
            </div>

            <div>$12.50</div>
          </div>
          <div style={itemStyle}>
            <div style={{ flex: "70%" }}>
              {" "}
              <AiFillMinusCircle />
              &emsp;
              <a href="#0">1x Menchikatsu Don</a>
            </div>

            <div>$13.50</div>
          </div>

          <div style={{ ...itemStyle, marginTop: "3%" }}>
            <div style={{ flex: "70%" }}>Subtotal</div>
            <div>$49.10</div>
          </div>
          <div style={{ ...itemStyle, marginTop: "0" }}>
            <div style={{ flex: "70%" }}>Tax</div>
            <div>$7.37</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "1.3em",
              padding: "0 2%",
              margin: "2% 0",
            }}
          >
            <div style={{ flex: "70%" }}>
              <b>TOTAL</b>
            </div>
            <div>
              <b>$56.47</b>
            </div>
          </div>
          <div class="btn_1_mobile" style={{ marginTop: "1%" }}>
            <a href="order.html" class="btn_1 gradient full-width mb_5">
              Order Now
            </a>
            <div class="text-center">
              <small>No money charged on this steps</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
