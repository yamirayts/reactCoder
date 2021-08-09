import {useState} from "react"
import { Link } from 'react-router-dom';

export default function Item({api}) {
  const [isShown, setIsShown] = useState(false)
 
    return (
        <div className="container">
            <div className="row align-items-start ">
                {api.map(p=> {
                  const img = p.img ? require(`../img/${p.img}`).default : ''
                  console.log(img)
                  return (
                    <div className="col" key={p.id}>
                       <Link to={`/items/${p.id}`}> <button className="btn btn-outline-warning"
                        onMouseEnter={()=> setIsShown(true)}
                        onMouseLeave={()=> setIsShown(false)}>
                         <img src={img} className="imgCard card-img-top"/>
                         </button>
                         </Link>
                         {isShown &&(
                           <div className="card-body">
                           <h5 className="card-title">{p.precio}</h5>
                         </div>
                         )}
                        
                    </div>
                  )
                })}
            </div>
            </div>
    )
  }
