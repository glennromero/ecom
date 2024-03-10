import './Offers.css' 
import exclusive_image from './../assets/exclusive_image.png'
 
 export default function Offers() {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>EXCLUSIVE</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCT</p>
                <button>CHECK NOW</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
 }