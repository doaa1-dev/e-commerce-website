import Image  from "next/image"
const singleProduct = ({product}) => {
    return (
        
        <div className="Productbox">
            <div>
                <Image src={product.image} width="200" height="250" className="productImage"/>
            </div>
            <div className="productTitle">
                {product.title}
            </div>
            <div className="productdescription">
                {product.description}
            </div>
            <div className="productPrice">
                {product.price + " " + "$"} 
            </div>
        </div>
    );
}

export default singleProduct;

export async function getStaticPaths(){
    const req = await fetch('https://fakestoreapi.com/products');
    const products = await req.json();
    const paths = products.map(product=>{
        return{
            params:{id:product.id.toString()},
        }
    }) 

    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const id = context.params.id
    const req = await fetch("https://fakestoreapi.com/products/" + id);
    const product = await req.json();
    return{
        props:{product}
    }
}