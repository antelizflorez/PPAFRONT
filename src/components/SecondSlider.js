import React from "react";
import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"
import p4 from "./images/p4.jpg"


function SecondSlider () {
    return (
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={p1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={p2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={p3} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={p4} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default SecondSlider;