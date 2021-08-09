import React, {useState, useEffect, useContext} from 'react';
import ItemCount from './ItemCount'
import {CartContext} from "./context/CartContext"


export default function ItemDetail({item, itemId}) {
  const [detail, setDetail] = useState([]);
  const {cart, guardarCart } = useContext(CartContext)
const id = ("/"+itemId)



  const handleCount=(cant)=>{
   
    guardarCart({item: item, cantidad: cant})
}
  
  
  
  
const imgD = item.img ? require(`../img/${item.img}`).default : ''



  
    return (
     
        <div>
           
                    <div className= "container px-4">
                      <div className="row gx-5" key={item.id}>
                        <div className= "col">
                          <div className="p-3 border bg-light">
                            <img src={imgD} className=" card-img-top imgDetail "/>
                        
                        
                          </div>   
                         </div>
                        <div className="col align-self-center   border bg-light">
                          <h5 className="detailNombre row">{item.nombre}</h5>
                          <p className="detailCaracteristica row">{item.caract}</p>
                           <ItemCount className= "p-3 border bg-light " id={item.id} stock={item.stock} initial={1} onAdd={handleCount}/>
                         </div>
                      </div>
                                       
                    </div>
                  )
                
        </div>
        
    
    )
}
