import React from "react";
import { Link } from "react-router-dom";
import { Bar } from "../progressBar";
import { Answer } from "../Answer";
import { Title } from "../Title";

export function Q2(props) {
  const { index, submit } = props;
  return (
    <>
      <section className="home-slider  ftco-degree-bg">
        <div
          className="slider-item bread-wrap bg-image-about"
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                <Title index={index} />
              </div>
            </div>

            <Answer index={index} getAnswer={submit} />
            <div className="row mt-5">
              <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                <Bar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
