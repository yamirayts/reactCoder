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
            console.log("No hay suficiente stock");
        }else{
        onAdd(cantidad)
        setCompra(false)
    }}
    return (
        <>
            <div className="card text-center w-50">
                <div className="card-header">
                    <h4>ItemCount</h4>
                </div>
                <div className="card-body">
                <button onClick={handleRemove}>
                    -
                </button>
                <label className="alert alert-white">{cantidad}</label>
                <button onClick={handle}>
                    +
                </button>
                
                </div>
                {compra===true &&(
                            <button className="btn btn-primary btn-block"
                            onClick={handleOnAdd}
                            
                            >Agregar a carrito</button>
                         )}
                {compra===false &&(
                           <Link to={"/cart"} className="btn btn-primary btn-block"                           
                           >Terminar compra</Link>
                         )}
                

            </div>
        </>
    )
}
