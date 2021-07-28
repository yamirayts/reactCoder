import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { useParams } from 'react-router';



const handleCount=(cant)=>{
   
        console.log(cant);
    
    
}

export default function ItemListContainer({saludo}) {
    const {categoryId} = useParams();
    
    return (
        
        <div>
            <ItemCount stock={5} initial={1} onAdd={handleCount}/>
            <ItemList categoria={categoryId}/>
        </div>
        
    )
}
