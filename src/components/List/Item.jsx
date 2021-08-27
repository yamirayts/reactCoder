
import { Link } from 'react-router-dom';

export default function Item({api}) {
 
 
    return (
        <div className="">
          <div  className="container">
            <div className="row item">
                {api.map(p=> {
                  const img = p.img ? require(`../../img/${p.img}`).default : ''
                 
                  return (
                    <div className=" col-sm-12 offset-md-1 offset-sm-2 col-md-4 align-self-center " key={p.id}>
                       <Link to={`/items/${p.id}`}> <button className=" btn btn-outline-warning">
                         <img alt="" src={img} className="imgCard"/>
                         <h5 className="titulo">${p.precio}</h5>
                         </button>
                         </Link>
                         
                        
                    </div>
                  )
                })}
            </div>
            </div>
            </div>
    )
  }
