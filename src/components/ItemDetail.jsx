import React from 'react'

export default function ItemDetail({item}) {
    return (
        <div>
            {item.map(p=> {
                  const imgD = p.img ? require(`../img/${p.img}`).default : ''
                  console.log(imgD)
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
