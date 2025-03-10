import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white p-4 relative transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
            </div>
            <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 
            group text-amber-100 text-sm rounded-full hover:w-20 hover:bg-red-700 transition-all">
  <span className="group-hover:hidden">+</span>
  <span className="hidden group-hover:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Add to Cart
  </span>
</div>

        </div>
    );
};

export default ProductCard;