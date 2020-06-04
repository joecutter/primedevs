import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export function Bar(props) {
  // const [length, setLength] = useState(7);
  const { index } = props;
  const progress = 14.2857142857 * index;

  return (
    <div>
      <ProgressBar striped variant="danger" animated now={progress} />
    </div>
  );
}
