import React from 'react'
import {Carousel}from 'react-bootstrap'
import { Link } from 'react-router-dom';
import img1 from "./../img/boca.jpg"
import img2 from "./../img/kit.jpg"

export default function CarruselProd() {
    return (
        <>
        <div className="container conProduct  ">
            <div className="col-12  "><h2 className="destacados"> Productos destacados</h2></div>
            <div className="col-12  ">
                
                <div className="">
                <Carousel className=""  fade controls={false} interval={3000} pause={false} >
                <Carousel.Item className="">
                <Link to={"/productos/bombs"}>
               
                    <img className="imgCarru offset-5 " alt="" src={img1} />
                    
                    </Link>
                    </Carousel.Item>
                <Carousel.Item>
                <Link to={"/productos/Accesorios"}>
               
                    <img className="imgCarru offset-5 " alt="" src={img2} />
                    
                    </Link>
                    </Carousel.Item>
               
            </Carousel>
                </div>
                
            </div>
        </div>
             
        </>
    )
}
