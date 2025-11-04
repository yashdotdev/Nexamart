import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 cursor-pointer">
      {product.isHot && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
          HOT
        </span>
      )}

      {/* Image wrapped in link */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full object-contain rounded-md min-h-0 h-60"
          />
        </div>
      </Link>


      <div className="mt-2 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold tracking-wide text-gray-800 text-sm md:text-base hover:text-sky-600">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-center gap-1 text-yellow-400 mt-1">
          {Array.from({ length: product.maxRating }, (_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(product.ratingValue)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-sky-600 font-bold text-lg">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ${product.discountPrice}
          </span>
          <span className="text-red-500 text-sm font-semibold">
            {product.discountPercent}% Off
          </span>
        </div>

        {/* Add to Cart button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 bg-black text-white px-4 py-2 hover:cursor-pointer rounded-md text-sm hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
