import { useEffect, useState } from "react";
import crossIcon from '../../assets/cross_icon.png'
import './ListProduct.css'

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
        .then((res) => res.json())
        .then((data) => {setAllProducts(data)}); 
    }

    useEffect(() => {
        fetchInfo();
    },[])

    const removeProduct = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method:'POST',
            headers: {
                Accept: 'application/json' ,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return (
        <>
            <div className="listProduct">
                <h1>All Product List</h1>

                <div className="listProductFormatMain">
                    <p>Product</p>
                    <p>Title</p>
                    <p>Old Price</p>
                    <p>New Price</p>
                    <p>Category</p>
                    <p>Remove</p>
                </div>
                <div className="listProductAllProduct">
                    <hr />
                    {allproducts.map((product, index) => {
                        return <div key={index} className="listProductFormatMain listProductFormat">
                            <img src={product.image} alt="" className="listProductProductIcon" />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img onClick={() => {removeProduct(product.id)}} className="listProductRemoveIcon" src={crossIcon} alt="" />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default ListProduct;