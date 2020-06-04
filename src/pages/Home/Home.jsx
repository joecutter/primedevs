import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/header";
import { Loader } from "../../components/loader";

export default class Home extends Component {
  state = {
    show: true
  };
  render() {
    return (
      <div>
        <Header />
        <section class="home-slider ftco-degree-bg">
          <div class="slider-item">
            <div class="overlay"></div>
            <div class="container">
              <div class="row slider-text align-items-center justify-content-center">
                <div class="col-md-10 ftco-animate text-center fadeInUp ftco-animated">
                  <h1 class="mb-4">Hello folks, we are PrimeDev Studio.</h1>

                  <br></br>

                  <h1 class="mb-4">
                    We help you find the right
                    <br></br>
                    <strong
                      class="typewrite"
                      data-period="4000"
                      data-type='[ "Blockchain", "UX", "Backend", "Mobile", "Frontend" ]'
                    ></strong>
                    <br></br>
                    developer in less than 60 seconds.
                  </h1>

                  <p>
                    We'll ask 10 quick questions to better understand your needs
                    and then provide you with personalized recommendations.
                  </p>
                  <p>
                    <Link
                      to="/onboard"
                      class="btn btn-primary btn-outline-white px-4 py-3 popup-vimeo"
                    >
                      <span class="ion-ios-play mr-2"></span> Start
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Loader />
      </div>
    );
  }
}
