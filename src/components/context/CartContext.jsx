import { createContext, useState } from "react";

export const CartContext = createContext()



export default function CartContextProvide({children}) {
  const [cart, setCart] = useState([])
 function guardarCart(newCart){

    setCart([...cart, newCart])
    console.log(newCart)
   const idx = cart.findIndex(c=>newCart.item.id === c.item.id)

   if (idx === -1) {

     setCart([...cart, newCart])

   }else{

    const oldList = cart.filter(old => old.item.id !== newCart.item.id)
    setCart([...oldList, newCart])

   }
   console.log(cart)
 }
 const removeItem = (ItemRemov) =>{
 
  const remover = cart.filter(r => r.item.id !== ItemRemov.item.id)
  setCart(remover)

 }

 function Price (){
   return cart.reduce((acum, valor)=>(acum + (valor.cantidad * valor.item.precio)),0)
 }
   
    return (
        <>
          <CartContext.Provider value={{
              cart,
              guardarCart,
              removeItem,
              Price
          }}>
              {children}
              </CartContext.Provider>  
        </>
    )
}
