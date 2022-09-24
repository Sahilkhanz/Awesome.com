import React from "react";
import Product from "./Product";



function ProductList({products}){
  return ( 
    <div className="flex flex-wrap sm:felx-col min-w-fit p-3 gap-4 bg-black py-5 gap-x-4   justify-center">
      {products.map(function (item) {
        return (
        <Product key={item.id} {...item} />
        // <Product
        // photo={item.photo}
        // category={item.category}
        // tittle={item.tittle}
        //   amount={item.amount}  />
      
        );
      } 
                 )
      }
      </div>
    );
}
export default ProductList;






      
  //   <Product 
  //     photo="https://m.media-amazon.com/images/I/515cWeJcBXL._SL1000_.jpg"
  //     tittle="xyz"
  //     heading="coffee"
  //    amount="2" />

  //       <Product 
  //     photo="https://m.media-amazon.com/images/I/515cWeJcBXL._SL1000_.jpg"
  //     tittle="xyz"
  //         heading="mug"
  //    amount="2" />
    

  
  // </div>
//           );
// }


// export default ProductList;