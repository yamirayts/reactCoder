import React,  {useState, useEffect} from 'react'
import Item from './Item'
import Api from "./Api.json"


export default function ItemList() {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {

        const promesa = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(Api);
                
            },2000) 
        });
        promesa.then((result)=>{
            setProductos(result);
            ;
        })
        
    }, []);

    
    
   

    return (
        
        <div>
            
            <Item api={productos}/>
        </div>
        
    )
}
