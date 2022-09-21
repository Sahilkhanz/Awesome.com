import React from "react"
import allData from "./DummyData";
import { useParams } from "react-router-dom"
import Product from "./Product";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

function ProductDetail() {
    const params = useParams();
    const sku = params.sku;
    
    let product;

    for (let i = 0; i < allData.length; i++) {
        const p = allData[i];
        if (sku == p.sku) {
            product = p;
            break;
        }
    }

    return (
        <div className="">
             
        <div className="md:flex m-4 p-2 justify-center mt-10 bg-black rounded-lg my-10 shadow-white shadow-lg border-2">
        <Link className="text-white text-4xl hover:bg-red-700 w-8 h-10" to="/">
                <TiArrowLeftThick />
            </Link>
                <div className="my-5 mx-5 w-96 h-96">
                <img className="w-full  rounded-md h-full border-separate object-cover flex-1 " src={product.photo} />
            </div>
            <div className="bg-black  p-2 flex flex-col my-5 px-4 flex-1 ">
            <a className="text-lg font-semibold text-white"> Category : {product.category}</a>
            <h1 className="text-xl font-bold sm:text-3xl text-white lg:my-5 ">{product.tittle}</h1>
                <p className=" sm:text-xl text-white">Description :- {product.description}</p>
                <span className="flex flex-grow"></span>
                <div className="flex gap-3">
                    <input type="number" className="wx-6  mt-2 px-4 text-black rounded-md " placeholder="  ?" />
                    <button className=" py-2 mt-2 sm:px-4 bg-indigo-500 hover:bg-indigo-900 text-white  rounded-md">Add to Cart</button>
               
                </div>
            </div>
            </div>
        </div>
    )
}
   

export default ProductDetail;
