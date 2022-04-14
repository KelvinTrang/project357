import Button from "react-bootstrap/Button";
export default function Items({ itemName, description, price, img }) {
  return (
    <div
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: "5px",
        margin: "2% 0",
        padding: "1%",
        paddingRight: "2%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex", flex: "60%" }}>
          <img
            src={img}
            width="100px"
            height="100px"
            alt="thumb"
            class="lazy"
            style={{ borderRadius: "3px" }}
          />
          <div class="flex-md-column" style={{ margin: "1% 2%" }}>
            <h4>{itemName}</h4>
            <p>{description}</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: "10%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <strong>${price}</strong>
          </div>
          <a href="#">Add to cart</a>
        </div>
      </div>
    </div>
  );
}
