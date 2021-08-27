import React, {useContext, useState} from 'react'
import {CartContext} from "./context/CartContext"
import { Link } from 'react-router-dom';
import {getFirestore} from "./firebaseService"
import portada3 from "./../img/portada2.jpg"


export default function CartList() {

const [buyer, setBuyer] = useState(initialState)
const [id, setId] = useState(0)
const {cart, removeItem, Price } = useContext(CartContext)
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
    
    
    return (
        <>
        
        {cart.length===0? 

        <>
        <div className="card bg-dark text-white">
            <img src={portada3} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h3 className="card-title">Ups! No tienes productos en tu carrito</h3>
                <Link to={"productos/bombs"}><button className="btn btn-warning  " >Comprar</button></Link> 
            </div>
        </div>
             
        
        </>
        
        : 
        
        <div>
            <div className="row align-items-center filaDescripcion">
                    <h4 className="col-5 ">Articulo</h4>
                    <h4 className="col-2">Precio</h4>
                    <h4 className="col-2">Cantidad</h4>
                    <h4 className="col-1">Total parcial</h4>
                    <h4 className="col-2">Quitar</h4>
                </div>
            {cart.map(item=>{
            const img = item.item.img ? require(`../img/${item.item.img}`).default : ''
            return (
            <>
                
            <div className="row align-items-center colorFila">
                    <img alt="" src={img} className="col-2  imgCart "/>
                    <h5 className="col-3">{item.item.nombre}</h5>
                    <p className="col-2 precio"> ${item.item.precio}</p>
                    <p className="col-1"> X{item.cantidad}</p>
                    <p className="col-3 precio">$ {parseInt(item.item.precio) * parseInt(item.cantidad)}</p>
                    <button className="btn col-1" onClick={() => {removeItem(item)}}><img alt="" src="https://img.icons8.com/cotton/30/000000/erase.png"/></button>
                    
            </div>
            
            </>
        )})}

            <div>

            <div><div><h4 className="total precio">Total: $ {Price()}</h4></div></div></div>

            {id===0?  
            <form className="from fondoFrom"
            onSubmit={handlerSumit}
            onChange={handlerChange}

            >
                <h4>Complete los datos para finalizar la compra</h4>
                <div className="input-group flex-nowrap from">
                <span className="input-group-text" id="basic-addon1">Ingrese su Nombre</span>
                  <input 
                    className="input-group-text form-control"
                      type="texto" 
                      placeholder="Ej.: Emilia Garcia"   
                      name="name"
                      defaultValue={buyer.name}/>
                </div>

                <div className="input-group flex-nowrap from">
                <span className="input-group-text" id="basic-addon1">Ingrese su Telefono</span>
                  <input 
                        className="input-group-text form-control "
                      type="texto" 
                      placeholder="Ej.: 011 1523456678" 
                      name="phone"
                      defaultValue={buyer.phone}/>
                      </div>

                <div className="input-group flex-nowrap from">
                <span className="input-group-text" id="basic-addon1">Ingrese su Mail</span>
                  <input 
                        className="input-group-text form-control"
                      type="texto" 
                      placeholder="Ej.: usuario@gmail.com" 
                      name="mail"
                      defaultValue={buyer.mail}/>
                      </div>

                <div className="input-group flex-nowrap from">
                <span  className="input-group-text" id="basic-addon1">Ingrese nuevamente su mail</span>
                    <input 
                    className= {buyer.mail === buyer.mailControl && buyer.mail!==""? "input-group-text form-control" : "input-group-text form-control is-invalid"  }
                      type="texto" 
                      placeholder="Ej.: usuario@gmail.com" 
                      name="mailControl"
                      defaultValue={buyer.mailControl}/>
                
                  </div>
                  {buyer.mail === buyer.mailControl && buyer.mail!==""? <div classNames="d-grid gap-2"><button className=" btn btn-success">Enviar</button></div> : <label htmlFor="floatingInputInvalid"></label>}
              
  
            </form>
             : 
             <div>
                 <h4 className="precio">Gracias por tu compra!</h4>
             <div className="precio">Tu numero de compra es: {id}</div> 
             </div>
             }
             
            </div>
            }
          
       
        </>
    )
}

const initialState = {

    name: "",
    phone: "",
    mail: "",
    mailControl: ""

}