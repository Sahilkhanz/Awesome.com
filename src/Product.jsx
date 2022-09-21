import React from "react";
import { Link } from "react-router-dom";

function Product({photo,category,tittle,rating,amount,sku}){
    return (
    <div className="shadow-lg rounded-md bg-gray-100 border-amber-400">
      <div className="flex flex-1 w-72 h-72 " >
       <img className="h-full w-full  object-cover rounded-t-md" src={photo} />
        </div>
      <div className="py-2 flex flex-col flex-1 px-2 pb-8">
   
      <div className="text-gray-500 font-semibold text-sm">{category}</div>
       <div className="text-bold font-bold text-lg">{tittle}</div>
       <div>{rating}</div>
          <div className="font-bold text-sm text-gray-800">${amount}</div>
          {/* <div>{discription}</div> */}
             <Link className="text-md font-semibold" to={"/products/"+sku} >View Detail</Link> 
        
         
        </div>
        </div>
  
  )
}

export default Product;