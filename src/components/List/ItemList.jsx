import React,  {useState, useEffect} from 'react'
import Item from './Item'

import { getFirestore } from '../firebaseService';


export default function ItemList({categoria}) {
    const [productos, setProductos] = useState([]);
      
   

  useEffect(() => {
    const dbQueryo = getFirestore()
    dbQueryo.collection("ItemCollection").where("categoria", "==", categoria).get()
    .then(resp => setProductos(resp.docs.map(data => ({...data.data(), id: data.id}) )))
}, [categoria])


    
    
   

    return (
        
        <div>
            
            <Item api={productos}/>
        </div>
        
    )
}
