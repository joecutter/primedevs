import React, { useState } from "react";
import $ from "jquery";

export function Loader() {
  useEffect(() => {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  });

  return (
    <div>
      <div id="ftco-loader" class="fullscreen">
        <svg class="circular" width="48px" height="48px">
          <circle
            class="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke="#eeeeee"
          ></circle>
          <circle
            class="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke="#F96D00"
          ></circle>
        </svg>
      </div>
    </div>
  );
}
