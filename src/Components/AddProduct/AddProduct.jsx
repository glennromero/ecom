import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: "",
        category: "women",
        new_price:"",
        old_price: "",

    })


    const imagehandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value })
    }

    const AddProduct = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
            },
            body : formData,
        }).then((res) => res.json()).then((data) => {responseData = data})

        if(responseData.success) {
            product.image = responseData.image_url;
            console.log(product)
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            }).then((res) => res.json()).then((data) => {
                data.success ? alert('Product Succesfully added') : alert ('Failed')
            })
        }
    }
    
    return (
        <>
            <div className="addProduct">
                <div className="addproductItemField">
                    <p>Product title</p>
                    <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
                </div>
                <div className="addproductPrice">
                    <div className="addproductItemField">
                        <p>Price</p>
                        <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
                    </div>
                    <div className="addproductItemField">
                        <p>Offer Price</p>
                        <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
                    </div>
                </div>
                <div className="addproductItemField">
                    <p>Product Category</p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className='addproductSelector'>
                        <option value="women">Woman</option>
                        <option value="men">Men</option>
                        <option value="kid">Kid</option>
                    </select>
                </div>
                <div className="addproductItemField">
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload_area} className='addProductThumbnailImage' alt="" />
                    </label>
                    <input onChange={imagehandler} type="file" name='image' id='file-input' hidden />
                </div>
                <button onClick={() => {AddProduct()}} className='addProductButton'>ADD</button>
            </div>
        </>
    )
}

export default AddProduct;