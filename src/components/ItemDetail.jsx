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
                    <div className= "container px-4">
                      <div className="row gx-5" key={p.id}>
                        <div className= "col">
                          <div className="p-3 border bg-light">
                            <img src={imgD} className=" card-img-top imgDetail "/>
                        
                        
                          </div>   
                         </div>
                        <div className="col align-self-center   border bg-light">
                          <h5 className="detailNombre row">{p.nombre}</h5>
                          <p className="detailCaracteristica row">{p.caract}</p>
                           <ItemCount className= "p-3 border bg-light " id={p.id} stock={p.stock} initial={1} onAdd={handleCount}/>
                         </div>
                      </div>
                                       
                    </div>
                  )
                })}
        </div>
        
    
    )
}
