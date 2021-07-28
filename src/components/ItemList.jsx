import React,  {useState, useEffect} from 'react'
import Item from './Item'
import Api from "./Api.json"


export default function ItemList({categoria}) {
    const [productos, setProductos] = useState([]);
      
  console.log(Api)
    useEffect(() => {

        const promesa = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(Api);
                
            },2000) 
        });
        promesa.then((resp)=>setProductos(resp.filter(it=>it.categoria===categoria)))
    }, [categoria])

    
    
   

    return (
        
        <div>
            
            <Item api={productos}/>
        </div>
        
    )
}
