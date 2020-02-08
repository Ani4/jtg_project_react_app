import React from "react";

export default function Slider(props) {
  return (
    <div
      className="inside-box slider cycle-slideshow"
      data-cycle-timeout="2000"
      data-cycle-pause-on-hover="false"
      data-cycle-caption="#caption-holder"
      data-cycle-caption-template={`<div class="slider-content">
          {{alt}}</div>
          <button>LEARN MORE <img src="/assets/images/arrow.png"/></button>
      `}
    >
      <img
        src="/assets/images/banner_slider_01.jpg"
        alt={`<h2 class="slider-content-header">META CONSECTETUS</h2><br/>Nulla Pariatur. Nulla Pariatur.
Nulla Voluptatem Pariatur.`}
      />
      <img
        src="/assets/images/banner_slider_02.jpg"
        alt={`<h2 class="slider-content-header">ACCUSANTIUM, ONDOLONERMA</h2> <br/>Ccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo ccusantium doloremque`}
      />

      <div className="slider-card " id="caption-holder"></div>
    </div>
  );
}
