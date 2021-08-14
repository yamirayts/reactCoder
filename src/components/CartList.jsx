import React, {useContext, useState} from 'react'
import {CartContext} from "./context/CartContext"
import { Link } from 'react-router-dom';
import {getFirestore} from "./firebaseService"


export default function CartList() {
const [buyer, setBuyer] = useState(initialState)
const [id, setId] = useState(0)
    const {cart, guardarCart, removeItem, Price } = useContext(CartContext)
    
   const order = {buyer, item: cart}

    function handlerChange(evt){
        setBuyer({
            ...buyer,
            [evt.target.name]: evt.target.value
        })
    }

    function handlerSumit(evt){
        evt.preventDefault()
        const db= getFirestore()
        db.collection("order").add(order) // esto es una promesa
        .then(resp => setId(resp.id)) //esto me devuelve el ID de lo que se creo en el firestore

    }
    console.log(order)
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
            <div>
            <div><div><h4>Total: {Price()}</h4></div></div></div>
            {id===0?  <form
            onSubmit={handlerSumit}
            onChange={handlerChange}
            >
  
                  <input 
                      type="texto" 
                      placeholder="nombre"   
                      name="name"
                      value={buyer.name}/>
                  <input 
                      type="texto" 
                      placeholder="Ingresar tel" name="phone"
                      value={buyer.phone}/>
                  <input 
                      type="texto" 
                      placeholder="Imgresa mail" 
                      name="mail"
                      value={buyer.mail}/>
                  
              <button>Enviar</button>
  
            </form> : <div>Tu numero de compra es: {id}</div> }
            
            </div>
            }
          
       
        </>
    )
}

const initialState = {
    name: "",
    phone: "",
    mail: ""
}