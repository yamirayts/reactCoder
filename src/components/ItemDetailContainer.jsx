import React, {useEffect, useState} from 'react'
import { getFirestore } from './firebaseService';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router';
import Api from "./Api.json"

export default function ItemDetailContainer() {
const [item, setItem] = useState({})
const {itemId} = useParams();
useEffect(() => {
    const dbQuery = getFirestore()
    dbQuery.collection("ItemCollection").doc(itemId).get()
    .then(resp => setItem({id: resp.id, ...resp.data()}))
}, [])
console.log(item)

    return (
        <div>
            <ItemDetail  item={item} itemId={item.id}/>
        </div>
    )
}
