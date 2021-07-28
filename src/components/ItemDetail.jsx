import React, {useState, useEffect} from 'react';


export default function ItemDetail({item, itemId}) {
  const [detail, setDetail] = useState([]);
const id = ("/"+itemId)
console.log(itemId)
console.log(item)
console.log(id)
console.log(detail)


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
                    <div className="datailContainer" key={p.id}>
                        <img src={imgD} className="imgCard card-img-top imgDetail"/>
                        <div className="detailBody">
                          <h5 className="detailNombre">{p.nombre}</h5>
                          <p className="detailCaracteristica">{p.caract}</p>
                          <a className="btn btn-primary detailAgregar">Agregar a carrito</a>
                        </div>
                    </div>
                  )
                })}
        </div>
        
    )
}
