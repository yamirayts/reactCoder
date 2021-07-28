import React, {useEffect, useState} from 'react'

import ItemDetail from './ItemDetail'
import { useParams } from 'react-router';
import Api from "./Api.json"

export default function ItemDetailContainer() {

const {itemId} = useParams();


    return (
        <div>
            <ItemDetail  item={Api} itemId={itemId}/>
        </div>
    )
}
