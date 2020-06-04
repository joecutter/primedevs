import React, { Component } from "react";
import Q1 from "../../components/quiz/Q1";
import { Q2 } from "../../components/quiz/Q2";
import { Form } from "../../components/quiz/form";
import { Modal } from "../../components/modal";
const JsonQuiz = require("../../util/quiz.json");

export default class Onboard extends Component {
  state = {
    step: 0,
    contact: "",
    answers: []
  };

  nextStep = () => {
    let { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    let { step } = this.state;
    this.setState({ step: step - 1 });
  };

  submit = data => {
    console.log("Received data");
    let { answers, step } = this.state;
    const { answer } = data;
    answers.push(answer);
    this.nextStep();
    console.log("Profile ", answer, step);
    if (step === 6) {
      this.setState({ contact: answer });
    }
  };

  contactInfo = data => {
    console.log("Received data");
    let { answers } = this.state;
    const contact = data;
    answers.push(contact);
    this.nextStep();
    console.log("Contact info ", contact);
  };

  render() {
    const { step, contact } = this.state;

    switch (step) {
      case 0:
        return (
          <>
            <Q2 index={step} submit={this.submit} />
          </>
        );
      case 1:
        return (
          <>
            <Q1 index={step} submit={this.submit} />
          </>
        );
      case 2:
        return (
          <>
            <Q1 index={step} submit={this.submit} />
          </>
        );
      case 3:
        return (
          <>
            <Q1 index={step} submit={this.submit} />
          </>
        );
      case 4:
        return (
          <>
            <Q1 index={step} submit={this.submit} />
          </>
        );
      case 5:
        return (
          <>
            <Q1 index={step} submit={this.submit} />
          </>
        );
      case 6:
        return (
          <>
            <Q1 index={step} submit={this.submit} />
          </>
        );
      case 7:
        return (
          <>
            <Form channel={contact} submit={this.contactInfo} />
          </>
        );
      case 8:
        return (
          <>
            <Modal />
          </>
        );
      default:
        return (
          <>
            <Q1 index={0} submit={this.submit} />
          </>
        );
    }
  }
}
