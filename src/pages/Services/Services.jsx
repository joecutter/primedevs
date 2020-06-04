import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

export default class Services extends Component {
  render() {
    return (
      <div>
        <Header />
        <section class="home-slider ftco-degree-bg">
          <div
            class="slider-item bread-wrap bg-image-service"
            data-stellar-background-ratio="0.5"
          >
            <div class="overlay"></div>
            <div class="container">
              <div class="row slider-text justify-content-center align-items-center">
                <div class="col-md-10 col-sm-12 ftco-animate mb-4 text-center fadeInUp ftco-animated">
                  <p class="breadcrumbs">
                    <span class="mr-2">
                      <Link to="/">Home</Link>
                    </span>
                    <span>Solutions</span>
                  </p>
                  <h1 class="mb-3 bread">Services</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="ftco-section ftco-degree-bg">
          <div class="container">
            <div class="row justify-content-center mb-5 pb-5">
              <div class="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                <span class="subheading">Our Services</span>
                <h2>Racks provides a fully featured text services platform!</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                <div class="media block-6 services d-block text-center">
                  <div class="d-flex justify-content-center">
                    <div class="icon color-1 d-flex justify-content-center mb-3">
                      <span class="align-self-center icon-layers"></span>
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Unlimited Features</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                <div class="media block-6 services d-block text-center">
                  <div class="d-flex justify-content-center">
                    <div class="icon color-2 d-flex justify-content-center mb-3">
                      <span class="align-self-center icon-gears"></span>
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Multiple Functions</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                <div class="media block-6 services d-block text-center">
                  <div class="d-flex justify-content-center">
                    <div class="icon color-3 d-flex justify-content-center mb-3">
                      <span class="align-self-center icon-paper-plane"></span>
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Advanced Visualizations</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                <div class="media block-6 services d-block text-center">
                  <div class="d-flex justify-content-center">
                    <div class="icon color-4 d-flex justify-content-center mb-3">
                      <span class="align-self-center icon-live_help"></span>
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Community &amp; Supports</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-4 ftco-animate">
                <h3 class="h5">#01 Web Design</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
              <div class="col-md-4 ftco-animate">
                <h3 class="h5">#02 Web Marketing</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
              <div class="col-md-4 ftco-animate">
                <h3 class="h5">#03 Web Development</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
