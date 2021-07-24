import React, {useEffect, useState} from 'react'
import getItem from './getItem'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
const [items, setItems] = useState([])
   useEffect(() => {
       getItem()
       .then(resp => setItems(resp))
   }, [])

    return (
        <div>
            <ItemDetail item={items}/>
        </div>
    )
}
