import Image  from "next/image"
import Link from "next/link"
import Styles from "../../styles/Product.module.css"
import Navbar from "./Navbar";

const Product = ({product}) => {
    const {title,price,image,id} = product;
    return (
        <div className={Styles.product}>
            <div>
                <Image src={image} width="250" height="300"/>
            </div>
            {/* <ul>
                <li>{title}</li>
                <li>{price}$</li>
            </ul> */}
            <button type="button"  className="infobutton">
                <Link href={`/products/${id}`} >
                    <a className="infolink">MORE INFO</a>
                </Link>
            </button>
            <button type="button" className="basket">ADD TO CART</button>
        </div>
    )
}


export default Product;