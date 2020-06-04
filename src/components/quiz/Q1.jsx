import React, { Component } from "react";
import { Bar } from "../progressBar";
import { Answer } from "../Answer";
import { Title } from "../Title";
const JsonQuiz = require("../../util/quiz.json");

export default class Q1 extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: "" };
  }

  render() {
    const { index, submit } = this.props;
    const answers = JsonQuiz[index].answers;
    const answerList = answers.map((index, ans) => {
      return (
        <button
          onClick={() => {
            console.log("Submit answer");
            const data = {
              step: index,
              answer: answers[ans]
            };
            submit(data);
          }}
          className="btn btn-primary btn-outline-white mt-3 py-3 px-4 quiz"
        >
          <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="media block-6 services d-block text-center">
              <div className="d-flex justify-content-center">
                <div className="icon color-1 d-flex justify-content-center mb-3">
                  <span className="align-self-center icon-layers"></span>
                </div>
              </div>
              <div className="media-body p-2">
                <p>{answers[ans]}</p>
              </div>
            </div>
          </div>
        </button>
      );
    });

    return (
      <>
        <section className="home-slider ftco-degree-bg">
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

              <div className="row">{answerList}</div>

              <div className="row mt-5">
                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                  <Bar index={index} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
