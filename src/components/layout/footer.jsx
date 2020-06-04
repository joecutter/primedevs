import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="ftco-footer ftco-bg-dark ftco-section">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Company</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <ul class="ftco-footer-social list-unstyled float-md-left float-lft">
                    <li class="ftco-animate">
                      <a href="#">
                        <span class="icon-twitter"></span>
                      </a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#">
                        <span class="icon-facebook"></span>
                      </a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#">
                        <span class="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Quick Links</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Contact Information</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block">
                        198 West 21th Street, Suite 721 New York NY 10016
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block">
                        + 1235 2355 98
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block">
                        info@yoursite.com
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block">
                        email@email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Newsletter</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries.
                  </p>
                  <form action="#" class="subscribe-form">
                    <div class="form-group">
                      <span class="icon icon-paper-plane"></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Subscribe"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | This template is made with
                  <i class="icon-heart" aria-hidden="true"></i> by
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
