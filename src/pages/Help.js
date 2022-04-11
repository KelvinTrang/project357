import React from "react";
import HelpBox from "../components/HelpBox";
export default function Help() {
  return (
    <div>
      <div class="hero_single inner_pages background-image" style={{ backgroundColor: "#ffb665" }}>
        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-10 col-md-8">
                <h1>Help and support</h1>
                <p style={{ marginTop: "2%" }}>Search questions or useful articles</p>
                <div class="row g-0 custom-search-input">
                  <div class="col-lg-10">
                    <div class="form-group">
                      <input class="form-control no_border_r" placeholder="What are you looking for?" />
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <button class="btn_1 gradient">
                      <h5 style={{ color: "white" }}>Search</h5>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wave hero gray"></div>
      </div>

      <div class="bg_gray">
        <div class="container margin_30_40">
          <div class="main_title center">
            <span>
              <em></em>
            </span>

            <h1 style={{ marginTop: "3%" }}>Select a topic</h1>
            <p>Find the answers to your question.</p>
          </div>

          <div class="row" style={{ marginTop: "3%" }}>
            <HelpBox title={"Payments"} description={"Learn more about our payment methods."} />

            <HelpBox title={"Submission"} description={"How to add your restaurant to our list."} />
            <HelpBox title={"General Help"} description={"Find out more about our apps functionality."} />

            <HelpBox title={"International"} description={"Find out more about our apps functionality."} />

            <HelpBox title={"Cancellation"} description={"Learn more about our cancellation policy."} />

            <HelpBox title={"Reviews"} description={"How to write / find reviews."} />
          </div>
        </div>
      </div>
    </div>
  );
}
