import React from "react";
import { useParams, Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/Bs"

function NavBar() {
    return (
        <div className="bg-black flex justify-between" >
            <header className='text-4xl text-white pl-20 py-4 font-extrabold '>
                Amazon
            </header>
            {/* <div className="text-center justify-center"> */}
            <Link  className="py-4 text-4xl pr-20 text-white hover:scale-125">
            <BsCartPlusFill />
                </Link>
                 {/* </div> */}
          
        </div>
    );
}

export default NavBar;