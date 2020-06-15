import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="ftco-footer ftco-bg-dark ftco-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved by
                  <a href="https://colorlib.com" target="_blank">
                    PrimeDev
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
