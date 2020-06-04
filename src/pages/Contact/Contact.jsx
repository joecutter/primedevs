import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="home-slider ftco-degree-bg">
          <div
            className="slider-item bread-wrap bg-image-contact"
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
                    <span>Contact</span>
                  </p>
                  <h1 className="mb-3 bread">Contact Us</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section contact-section ftco-degree-bg">
          <div className="container bg-light">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h4">Contact Information</h2>
              </div>
              <div className="w-100"></div>
              <div className="col-md-3">
                <p>
                  <span>Address:</span> 198 West 21th Street, Suite 721 New York
                  NY 10016
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="#tel://1234567920tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>Email:</span>{" "}
                  <a href="#mailto:info@yoursite.com">info@yoursite.com</a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>Website</span> <a href="#">yoursite.com</a>
                </p>
              </div>
            </div>
            <div className="row block-9">
              <div className="col-md-6 pr-md-5">
                <form action="#">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-6" id="map"></div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
