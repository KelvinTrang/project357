import React from "react";

export default function HelpBox({ title, description }) {
  return (
    <div class="col-lg-4 col-md-6">
      <div style={{ backgroundColor: "#ff9623" }}>
        <a class="box_topic" href="#">
          <h2>
            <strong>{title} </strong>
          </h2>
          <p>{description}</p>
        </a>
      </div>
    </div>
  );
}
