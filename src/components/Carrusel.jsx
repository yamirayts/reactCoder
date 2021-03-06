import React from 'react'
import {Carousel}from 'react-bootstrap'
import portada1 from "./../img/portada.jpg"
import portada2 from "./../img/portada1.jpg"
import portada3 from "./../img/portada2.jpg"

export default function Carrusel() {

    return (

        <div>

           <Carousel fade  controls={false} interval={4000} pause={false}>

              <Carousel.Item>
                  <img
                  className="d-block w-100 h-25"
                  src={portada1}
                  alt="First slide"
                  />
              </Carousel.Item>

              <Carousel.Item>
                  <img
                  className="d-block w-100 h-25"
                  src={portada2}
                  alt="Second slide"
                  />
              </Carousel.Item>
              
              <Carousel.Item>
                  <img
                  className="d-block w-100 h-25"
                  src={portada3}
                  alt="Third slide"
                  />
              </Carousel.Item>

          </Carousel>
           
        </div>
        
    )
}
