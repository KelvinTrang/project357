import { AiFillMinusCircle } from "react-icons/ai";
export default function Cart(props) {
  return (
    <div class="col-lg-4" id="sidebar_fixed" style={{ margin: "35px 0 0 20px", borderRadius: "50px" }}>
      <div class="box_order mobile_fixed">
        <div class="head" style={{ backgroundColor: "#5e6063", textAlign: "center" }}>
          <h3 style={{ color: "white" }}>Order Summary</h3>
          <a href="#0" class="close_panel_mobile">
            <i class="icon_close"></i>
          </a>
        </div>
        <div class="main">
          <div style={{ display: "flex" }}>
            {" "}
            <AiFillMinusCircle />
            <a href="#0">1x Enchiladas</a>
            <span>$11</span>
          </div>
          <div style={{ display: "flex" }}>
            {" "}
            <AiFillMinusCircle />
            <a href="#0">1x Enchiladas</a>
            <span>$11</span>
          </div>{" "}
          <div style={{ display: "flex" }}>
            {" "}
            <AiFillMinusCircle />
            <a href="#0">1x Enchiladas</a>
            <span>$11</span>
          </div>{" "}
          <div style={{ display: "flex" }}>
            {" "}
            <AiFillMinusCircle /> &nbsp;
            <a href="#0">1x Enchiladas</a>
            <span>$11</span>
          </div>{" "}
          <div style={{ display: "flex" }}>
            {" "}
            <AiFillMinusCircle />
            <a href="#0">1x Enchiladas</a>
            <span>$11</span>
          </div>
          {/* <ul class="clearfix">
            <li> */}
          <div style={{ display: "flex" }}>
            <div style={{ flex: "70%" }}>Subtotal</div>
            <div>$56</div>
          </div>
          <div style={{ display: "flex", fontSize: "1.3em" }}>
            <div style={{ flex: "70%" }}>
              <b>TOTAL</b>
            </div>
            <div>
              <b>$66</b>
            </div>
          </div>
          <div class="btn_1_mobile">
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
