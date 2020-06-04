import React from "react";
const JsonQuiz = require("../util/quiz.json");

export function Title(props) {
  const { index } = props;
  const title = JsonQuiz[index].question;

  return (
    <>
      <h2>{title}</h2>
    </>
  );
}
