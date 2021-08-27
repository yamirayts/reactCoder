import React, {useState} from 'react'
import { Link } from 'react-router-dom';



export default function ItemCount({stock, initial, onAdd}) {
const [cantidad, setCantidad] = useState(initial)
const [compra, setCompra] = useState(true)


   
     const handle=()=>{
        if (cantidad<stock) {
            setCantidad(cantidad+1)
        }
    }

    const handleRemove=()=>{
        if (cantidad>1) {
            setCantidad(cantidad-1)
        }
    }
    

    const handleOnAdd=()=>{
        if (stock === 0) {
           
        }else{
        onAdd(cantidad)
        setCompra(false)
    }}
    return (
        <>
            <div className="card text-center w-70 col align-self-end">
                
                <div className="card-body col ">
                <button className="btn" onClick={handleRemove}>
                <img alt="" src="https://img.icons8.com/color-glass/40/000000/minus.png"/>
                </button>
                <label className="alert alert-white ">{cantidad}</label>
                <button className="btn" onClick={handle}>
                <img alt="" src="https://img.icons8.com/office/40/000000/plus.png"/>
                </button>
                
                </div>
                <div className="">
                {compra===true &&(
                            <button className="btn btn-secondary"
                            onClick={handleOnAdd}
                            
                            >Agregar a carrito</button>
                         )}
                {compra===false &&(
                           <Link to={"/cart"} className="btn btn-warning"                           
                           >Terminar compra</Link>
                         )}
                
                </div>
            </div>
        </>
    )
}
