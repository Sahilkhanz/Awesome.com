import React from "react";
import { useParams, Link } from "react-router-dom";

function NavBar( { productCount }) {
    return (
        <div className="bg-black">
            <header className='text-4xl text-white pl-20 py-4 font-extrabold '>
                Amazon
            </header>
        </div>
    );
}

export default NavBar;