import  {useContext} from 'react'
import {CartContext} from "./context/CartContext"


export default function Cart() {

    const {cart, guardarCart } = useContext(CartContext)

    return (
        <>
        {cart.map(item=>(
        <div key={item.item.id}>
            <h5>{item.item.nombre}</h5>
            <p>Precio:{item.item.precio}</p>
            <p>Cantidad: X{item.cantidad}</p>
            <p>Total: {parseInt(item.item.precio) * parseInt(item.cantidad)}</p>
        </div>
        ))}
        </>
    )
}
