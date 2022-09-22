import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { getProductData } from './api';
import Loading from "./Loading";
import NotFound from "./NotFound";

function ProductDetail() {
    const id = +useParams().id;
    const [product, setProduct] = useState();
    const [loading,setLoading] = useState(true);
console.log("detail running",id)
    useEffect(function () {
        const p = getProductData(id);
        console.log("detail", product);
        p.then(function (product){
            setProduct(product);
            setLoading(false)
           
        });

}, [id]);
    console.log("product", product);
if(loading){
    return <Loading/>
  }
    if (!product){
      return (<NotFound/>);
      
    }    
    


    // const params = useParams();
    // const sku = params.sku;
    
    // let product;

    // for (let i = 0; i < allData.length; i++) {
    //     const p = allData[i];
    //     if (sku == p.sku) {
    //         product = p;
    //         break;
    //     }
    // }

    return (
<>
        <div className="">
             
            <div className="md:flex m-4 p-2 justify-center mt-10 bg-black rounded-lg my-10 shadow-lg shadow-black border-2">
        <Link className="text-white text-4xl hover:text-yellow-200 hover:scale-125 w-8 h-10" to="/">
                <TiArrowLeftThick />
                </Link>
                <div className="my-5 mx-5 w-96 h-96">
                <img className="w-full  hover:scale-105 rounded-md h-full border-separate object-cover flex-1 " src={product.thumbnail} />
            </div>
            <div className="bg-black  p-2 flex flex-col my-5 px-4 flex-1 ">
            <a className="text-lg font-semibold text-white"> Category : {product.category}</a>
                    <h1 className="text-xl font-bold sm:text-3xl text-white lg:mt-5 ">{product.title}</h1>
                    <a className="text-lg font-semibold text-white">${product.price}</a>
                    <p className=" sm:text-xl text-white">Description :- {product.description}</p>
                   
                <span className="flex flex-grow"></span>
                <div className="flex gap-3">
                    <input type="number" className="wx-6  mt-2 px-4 text-black rounded-md " placeholder="  ?" />
                    <button className=" py-2 mt-2 sm:px-4 bg-indigo-500 hover:bg-indigo-900 text-white  rounded-md">Add to Cart</button>
                   
                </div>
            </div>
            </div>
            </div>
     
            <div className="flex justify-between text-red-500">
         <div>
          
           {id>1&&<Link className=" text-red-400 " to={"/products/"+(id - 1)}>previous </Link>}
             </div>
          
         <div>
          <Link className="  text-red-400 " to={"/products/"+(id + 1)}>Right  
          </Link>
                </div>
        </div>
                    </>
       
    )
}
   

export default ProductDetail;
