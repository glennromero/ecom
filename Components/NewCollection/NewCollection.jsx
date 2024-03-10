import './NewCollection.css'
import Item from '../Items/Item'
import { useEffect, useState } from 'react'

export default function NewCollection() {

    const [new_collection, setNewCollection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollection')
        .then((res) => res.json())
        .then((data)=> setNewCollection(data))
    }, [])
    return (
        <div className="new-collections">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}