export default function Item({api}) {
    return (
        <div className="container">
            <div className="row align-items-start ">
                {api.map(p=> {
                  const img = p.img ? require(`../img/${p.img}`).default : ''
                  console.log(img)
                  return (
                    <div className="col" key={p.id}>
                        <img src={img} className="imgCard card-img-top"/>
                        <div className="card-body">
                          <h5 className="card-title">{p.nombre}</h5>
                          <p className="card-text">{p.caract}</p>
                          <a className="btn btn-primary">Agregar a carrito</a>
                        </div>
                    </div>
                  )
                })}
            </div>
            </div>
    )
  }
