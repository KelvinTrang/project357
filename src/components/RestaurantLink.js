import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function RestaurantLink({ picture, score, type, name, address, discount, price, opening }) {
  return (
    <li>
      <Link to={"/restaurant"}>
        <figure>
          <img src={picture} width="350" height="233" alt="" className="lazy" />
        </figure>
        <div className="score">
          <strong><AiFillStar color="orange"/>{score}</strong>
        </div>
        <em>{type}</em>
        <h3>{name}</h3>
        <small>{address}</small> <br />
        <small>Hours: {opening}</small>
        <ul>
          <li>
            <span className="ribbon off">{discount}</span>
          </li>
          <li>Average price ${price}</li>
        </ul>
      </Link>
    </li>
  );
}
