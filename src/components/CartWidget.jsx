import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from "./context/CartContext"



export default function CartWidget() {
    const {cart} = useContext(CartContext)
    return (
        <>
        {cart.length===0? <div className="cartWidget"><Link to={"/cart"}> <img alt="" src="https://img.icons8.com/wired/64/000000/shopping-cart.png"/></Link></div> : <div className="cartWidget"><Link to={"/cart"}> <img alt="" src="https://img.icons8.com/wired/64/000000/shopping-cart-loaded.png"/> <span className="position-absolute  badge p- bg-info border border-light rounded-circle"> {cart.length}
    
  </span> </Link> </div>
         }
    </>)
}
