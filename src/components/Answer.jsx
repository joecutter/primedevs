import React from "react";
const JsonQuiz = require("../util/quiz.json");

export function Answer(props) {
  const { index, getAnswer } = props;
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
          getAnswer(data);
        }}
        className="btn btn-primary btn-outline-primary mt-3 py-3 px-4 quiz"
      >
        <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
          <div className="media block-6 services d-block text-center">
            <div className="d-flex justify-content-center">
              <div className="icon color-1 d-flex justify-content-center mb-3">
                <span className="align-self-center icon-layers"></span>
              </div>
            </div>
            <div className="media-body p-2">
              <p class="text-break">{answers[ans]}</p>
            </div>
          </div>
        </div>
      </button>
    );
  });

  return (
    <>
      <div className="row">{answerList}</div>
    </>
  );
}
