import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Loader } from "../../components/loader";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="home-slider ftco-degree-bg">
          <div
            className="slider-item bread-wrap bg-image-about"
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row slider-text justify-content-center align-items-center">
                <div className="col-md-10 col-sm-12 ftco-animate mb-4 text-center fadeInUp ftco-animated">
                  <p className="breadcrumbs">
                    <span className="mr-2">
                      <Link to="/">Home</Link>
                    </span>{" "}
                    <span>About</span>
                  </p>
                  <h1 className="mb-3 bread">About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section-2 ftco-degree-bg">
          <div className="container d-flex">
            <div className="section-2-blocks-wrapper row d-flex">
              <div className="img col-sm-12 col-lg-6 order-last image-about"></div>
              <div className="text col-lg-6 order-first ftco-animate fadeInUp ftco-animated">
                <div className="text-inner align-self-start">
                  <h3 className="heading">Welcome to our website</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>

                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftco-section ftco-counter ftco-degree-bg"
          id="section-counter"
        >
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section heading-section-white ftco-animate fadeInUp ftco-animated">
                <h2>Our Technologies</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="1000">
                      1,000
                    </strong>
                    <span>
                      Customers are satisfied with our professional support
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="12000">
                      12,000
                    </strong>
                    <span>Amazing preset options to be mixed and combined</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number="10000">
                      10,000
                    </strong>
                    <span>
                      Average response time on live chat support channel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <Loader />
      </div>
    );
  }
}
