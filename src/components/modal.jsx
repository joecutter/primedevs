import React, { Component } from "react";
import { Link } from "react-router-dom";

export function Modal() {
  return (
    <div>
      <section class="home-slider ftco-degree-bg">
        <div class="slider-item">
          <div class="overlay"></div>
          <div class="container">
            <div class="row slider-text align-items-center justify-content-center">
              <div class="col-md-10 ftco-animate text-center fadeInUp ftco-animated">
                <h1 class="mb-4">
                  Profile Submitted Successfully
                  <br></br>
                  <strong
                    class="typewrite"
                    data-period="3000"
                    data-type="[ 😝,😝,👻 ]"
                  ></strong>
                  <br></br>
                </h1>

                <p>
                  <Link
                    to="/"
                    class="btn btn-primary btn-outline-white px-4 py-3 popup-vimeo"
                  >
                    Home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
