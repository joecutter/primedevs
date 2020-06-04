import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="home-slider ftco-degree-bg">
          <div
            className="slider-item bread-wrap bg-image-portfolio"
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
                    <span>Portfolio</span>
                  </p>
                  <h1 className="mb-3 bread">Portfolio</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-degree-bg">
          <div className="container">
            <div className="row no-gutters">
              <div className="block-3 d-md-flex ftco-animate fadeInUp ftco-animated">
                <a
                  href="#portfolio-single.html"
                  className="image work-image-1"
                ></a>
                <div className="text">
                  <h4 className="subheading">Illustration</h4>
                  <h2 className="heading">
                    <a href="#portfolio-single.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate">
                <a
                  href="#portfolio-single.html"
                  className="image order-2 work-image-2"
                ></a>
                <div className="text order-1">
                  <h4 className="subheading">Application</h4>
                  <h2 className="heading">
                    <a href="#portfoli-singleo.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate">
                <a
                  href="#portfolio-single.html"
                  className="image work-image-2"
                ></a>
                <div className="text">
                  <h4 className="subheading">Web Design</h4>
                  <h2 className="heading">
                    <a href="#portfolio-single.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate">
                <a
                  href="#portfolio-single.html"
                  className="image work-image-2 order-2"
                ></a>
                <div className="text order-1">
                  <h4 className="subheading">Application</h4>
                  <h2 className="heading">
                    <a href="#portfoli-singleo.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate">
                <a
                  href="#portfolio-single.html"
                  className="image work-image-2"
                ></a>
                <div className="text">
                  <h4 className="subheading">Animation</h4>
                  <h2 className="heading">
                    <a href="#portfoli-singleo.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate">
                <a
                  href="#portfolio-single.html"
                  className="image work-image-2 order-2"
                ></a>
                <div className="text order-1">
                  <h4 className="subheading">Branding</h4>
                  <h2 className="heading">
                    <a href="#portfoli-singleo.html">
                      Even the all-powerful Pointing has no control
                    </a>
                  </h2>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li>
                      <a href="##">&lt;</a>
                    </li>
                    <li className="active">
                      <span>1</span>
                    </li>
                    <li>
                      <a href="##">2</a>
                    </li>
                    <li>
                      <a href="##">3</a>
                    </li>
                    <li>
                      <a href="##">4</a>
                    </li>
                    <li>
                      <a href="##">5</a>
                    </li>
                    <li>
                      <a href="##">&gt;</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
