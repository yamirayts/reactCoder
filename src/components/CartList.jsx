import React, {useContext} from 'react'
import {CartContext} from "./context/CartContext"
import { Link } from 'react-router-dom';

export default function CartList() {

    const {cart, guardarCart, removeItem, Price } = useContext(CartContext)
    

    return (
        <>
        {cart.length===0? <Link to={"productos/bombs"}><button className="btn btn-info  " >Comprar</button></Link> : <div>{cart.map(item=>(

            <div className="row" key={item.item.id}>

                    <h5 className="col-4">{item.item.nombre}</h5>
                    <p className="col-2">Precio:{item.item.precio}</p>
                    <p className="col-2">Cantidad: X{item.cantidad}</p>
                    <p className="col-2">Total parcial: {parseInt(item.item.precio) * parseInt(item.cantidad)}</p>
                    <button className="btn btn-info col-2" onClick={() => {removeItem(item)}}>X</button>
                    
            </div>
            
            ))}
            <div><div><h4>Total: {Price()}</h4></div></div></div>}
         
       
        </>
    )
}
