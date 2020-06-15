import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import { Loader } from "../../components/loader";
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
                  href="portfolio-single.html"
                  className="image mobile-image"
                ></a>
                <div className="text">
                  <h4 className="subheading"></h4>
                  <h2 className="heading">
                    <a href="portfolio-single.html">Mobile Apps Development</a>
                  </h2>
                  <p>
                    From B2B or B2E apps for enterprises, small businesses, and
                    startups, we have a proven track record of offering
                    high-impact, result driven and engaging mobile application
                    development services. PrimeDev is a top mobile app
                    development company that is renowned for delivering native
                    Android app development, native iOS app development, hybrid
                    and cross-platform app development services to build
                    next-gen mobile applications using the latest technology
                    stack.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate fadeInUp ftco-animated">
                <a
                  href="portfolio-single.html"
                  className="image order-2 web-image"
                ></a>
                <div className="text order-1">
                  <h4 className="subheading"></h4>
                  <h2 className="heading">
                    <a href="portfoli-singleo.html">Web Development</a>
                  </h2>
                  <p>
                    Being a leading website application development company, our
                    certified developers have unparalleled expertise in working
                    with the latest web technologies to deliver custom web
                    solutions. Whether creating a web presence for your company,
                    an information hub for your business or empowering your
                    apps/IoT devices through backend- PrimeDev does it all by
                    covering a wide spectrum of web solutions and framework.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate fadeInUp ftco-animated">
                <a
                  href="portfolio-single.html"
                  className="image devops-image"
                ></a>
                <div className="text">
                  <h4 className="subheading"></h4>
                  <h2 className="heading">
                    <a href="portfolio-single.html">DevOps</a>
                  </h2>
                  <p>
                    DevOps Consulting & DevOps Services providing Company,
                    enables delivering large applications at the pace of client
                    business with evolving nature of development with Agile
                    DevOps services to automate the continuous delivery –
                    divided into predictive, well organized and consistent
                    ecosystem and operational workflow.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate fadeInUp ftco-animated">
                <a
                  href="portfolio-single.html"
                  className="image order-2 ui-image"
                ></a>
                <div className="text order-1">
                  <h4 className="subheading"></h4>
                  <h2 className="heading">
                    <a href="portfoli-singleo.html">UI/UX Design</a>
                  </h2>
                  <p>
                    UI/UX design is the catalyst behind the success of any web
                    or mobile app. PrimeDev is a leading web design and mobile
                    app design agency with a knack of turning great ideas into
                    meaningful interactions. Starting from conceptualization,
                    information architecture, visual identity, and UX design;
                    hire UI/UX designers from PrimeDev for timely delivery of
                    appealing websites and mobile apps resulting maximum user
                    engagement.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate fadeInUp ftco-animated">
                <a
                  href="portfolio-single.html"
                  className="image game-image"
                ></a>
                <div className="text">
                  <h4 className="subheading"></h4>
                  <h2 className="heading">
                    <a href="portfoli-singleo.html">Mobile Game Development</a>
                  </h2>
                  <p>
                    Creating games is the most energetic part of our business.
                    Our skilled mobile game development team can handle projects
                    from scratch or from any development stage. We’ve been
                    successfully involved in the delivery of highly interactive
                    and exciting gaming experience on Mobile, Console, and
                    Virtual Reality platforms. We turn your idea into an
                    addictive Android or iOS game application while making sure
                    we create out of the box gaming solutions.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate fadeInUp ftco-animated">
                <a
                  href="portfolio-single.html"
                  className="image order-2 iot-image"
                ></a>
                <div className="text order-1">
                  <h4 className="subheading"></h4>
                  <h2 className="heading">
                    <a href="portfoli-singleo.html">IoT Solutions</a>
                  </h2>
                  <p>
                    Leveraging the power of Internet of Things (IoT), the
                    network of “Connected Devices”, PrimeDev is the best IoT
                    service provider in developing innovative IoT solutions. Our
                    IoT experts develop bespoke and innovative IoT solutions to
                    simplify and automate complex business processes. Together
                    we can create amazing wireless experiences with the modern
                    IoT hardware to collect information. Hire the best IoT
                    programmers from PrimeDev who help startups and enterprises
                    to build an IoT platform and connect it with other cloud,
                    onsite applications or multiple IoT platforms.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate fadeInUp ftco-animated">
                <a href="portfolio-single.html" className="image ml-image"></a>
                <div className="text">
                  <h4 className="subheading"></h4>
                  <h2 className="heading">
                    <a href="portfoli-singleo.html">AI - ML App Development</a>
                  </h2>
                  <p>
                    Looking to add intelligence to your existing business
                    application or want to develop a new one? You are in the
                    right place. Our AI-ML engineers will help you do that. We
                    build AI-ML solutions that will save upto 30% cost on your
                    overall business operations. We have expertise in working
                    with tools, frameworks and technologies like TensorFlow,
                    Apache SystemML, Caffe, Apache Mahout, OpenNN, Torch,
                    Neuroph, Mycroft AI, etc. to foster business intelligence to
                    diverse industry verticals.
                  </p>
                </div>
              </div>
              <div className="block-3 d-md-flex ftco-animate fadeInUp ftco-animated">
                <a
                  href="portfolio-single.html"
                  className="image order-2 qa-image"
                ></a>
                <div className="text order-1">
                  <h4 className="subheading"></h4>
                  <h2 className="heading">
                    <a href="portfoli-singleo.html">Quality Assurance (QA)</a>
                  </h2>
                  <p>
                    We keep Quality Assurance (QA) and software testing services
                    at the core of our ecosystem. PrimeDev has proven testing
                    experts whose confidence helps in faster releases with
                    uncompromised quality. We perform various tests such as
                    Functional, GUI, Usability, Security, Database testing,
                    Cross-platform, Cross-browser, Accessibility, etc. Our QA
                    experts work with DevOps tools and automated build testing
                    techniques for faster delivery. With us, you will have full
                    access to QA reports to stay updated about test results
                    having all the details.
                  </p>
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
