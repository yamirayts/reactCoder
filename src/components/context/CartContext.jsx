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
   
    return (
        <>
          <CartContext.Provider value={{
              cart,
              guardarCart
          }}>
              {children}
              </CartContext.Provider>  
        </>
    )
}
