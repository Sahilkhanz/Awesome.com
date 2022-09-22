import React from "react";
import { Link } from "react-router-dom";

function Product({thumbnail,category,title,rating,price,id}){
    return (
    <div className="shadow-sm shadow-white rounded-md hover:scale-95 bg-gray-100 border-amber-400">
      <div className="flex flex-1 w-72 h-72 " >
       <img className="h-full w-full  object-cover rounded-t-md" src={thumbnail} />
        </div>
      <div className="py-2 flex flex-col flex-1 w-72 px-2 pb-8">
   
      <div className="text-gray-500 font-semibold text-sm">{category}</div>
       <div className="text-bold font-bold text-lg">{title}</div>
       {/* <div>rating : {rating}</div> */}
          <div className="font-bold text-sm text-gray-800">${price}</div>
          <span className=" flex-grow"></span>
             <Link className="text-md hover:text-red-400 hover:scale-105 hover:pl-2 font-semibold justify-last" to={"/products/"+id} >View Detail</Link> 
        
         
        </div>
        </div>
  
  )
}

export default Product;