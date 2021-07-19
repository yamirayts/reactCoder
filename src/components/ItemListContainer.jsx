import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';

const handleCount=(cant)=>{
   
        console.log(cant);
    
    
}

export default function ItemListContainer({saludo}) {
    
    return (
        <div>
        <div className="itemList">
            <h2>{saludo}</h2>
        </div>
        <div>
            <ItemCount stock={5} initial={1} onAdd={handleCount}/>
            <ItemList/>
        </div>
        </div>
    )
}
