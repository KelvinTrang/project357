export default function Items({ itemName, description, price, img }) {
  return (
    <tr style={{ borderRadius: "5px", boxShadow: "rgba(100, 100, 111, 0.2) 2px" }}>
      <td class="d-md-flex align-items-center">
        <figure style={{ borderRadius: "50px", margin: "0 15px" }}>
          <a href="https://imgur.com/l2iHbvv.png" title="Photo title" data-effect="mfp-zoom-in">
            <img src={img} width="120px" height="120px" alt="thumb" class="lazy" />
          </a>
        </figure>
        <div class="flex-md-column">
          <h4>{itemName}</h4>
          <p>{description}</p>
        </div>
      </td>
      <td>
        <strong>${price}</strong>
      </td>
      <td>Add to cart</td>
    </tr>
  );
}
