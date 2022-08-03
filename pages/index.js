import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Head from "next/head"
const index = ({products}) => {
  return (
     <main className="container">
       <div>
            <TopBanner />
            <Navbar />
        </div>
        <div className="main">
          {
             products.map(product=><Product key={product.id} product={product} />)
          }
        </div>
     </main>
     );
}

export default index;

export async function getStaticProps(){
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props:{products}
  }
}
