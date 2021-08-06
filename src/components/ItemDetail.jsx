import React, {useState, useEffect, useContext} from 'react';
import ItemCount from './ItemCount'
import {CartContext} from "./context/CartContext"


export default function ItemDetail({item, itemId}) {
  const [detail, setDetail] = useState([]);
  const {cart, guardarCart } = useContext(CartContext)
const id = ("/"+itemId)



  const handleCount=(cant)=>{
   
    guardarCart({item: detail[0], cantidad: cant})
}
  
  
  
  



console.log(cart)
  useEffect(() => {

      const prom = new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve(item);
              
          },2000) 
      });
      prom.then((resp)=>setDetail(resp.filter(it=>it.id===id)))
  }, [itemId])

  
    return (
     
        <div>
            {detail.map(p=> {
                  const imgD = p.img ? require(`../img/${p.img}`).default : ''
                  
                  return (
                    <div>
                    <div className="datailContainer" key={p.id}>
                        <img src={imgD} className="imgCard card-img-top imgDetail"/>
                        <div className="detailBody">
                          <h5 className="detailNombre">{p.nombre}</h5>
                          <p className="detailCaracteristica">{p.caract}</p>
                          <a className="btn btn-primary detailAgregar">Agregar a carrito</a>
                        </div>
                    </div>
                    <div className="itemCount">
                    <ItemCount id={p.id} stock={p.stock} initial={1} onAdd={handleCount}/>
                    </div>
                                       
                    </div>
                  )
                })}
        </div>
        
    
    )
}
