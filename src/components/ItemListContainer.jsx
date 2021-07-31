import React from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router';





export default function ItemListContainer({saludo}) {
    const {categoryId} = useParams();
    
    return (
        
        <div>
            
            <ItemList categoria={categoryId}/>
        </div>
        
    )
}
