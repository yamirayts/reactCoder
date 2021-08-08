import React from 'react'
import {Carousel}from 'react-bootstrap'
import portada1 from "./../img/portada.jpg"
import portada2 from "./../img/portada1.jpg"
import portada3 from "./../img/portada2.jpg"

export default function Carrusel() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={portada1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={portada2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={portada3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           
        </div>
    )
}
