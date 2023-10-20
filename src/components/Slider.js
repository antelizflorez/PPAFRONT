import React from "react";
import ropa1 from "../components/images/ropa1.jpg"
import ropa2 from "../components/images/ropa2.jpg"
import ropa3 from "../components/images/ropa3.jpg"


function Slider () {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={ropa1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>¡Nuevo catalogo!</h5>
              <p>En Cata Store encontraras una gran variedad de productos de ropa!.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={ropa2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>¡Con la mejor calidad!</h5>
              <p>Tenemos las mejores prendas en materiales</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={ropa3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>!Hecha un vistazo¡</h5>
              <p>Somos la mejor tienda de ropa!</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Slider;