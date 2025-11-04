import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../Context/CartContext";
import { FaStar } from "react-icons/fa";
import { Header } from "../../components/Header/Header";

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="text-gray-500">
          Looks like this product doesn’t exist anymore.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex"></div>
      <div className="max-w-6xl mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-sm">
        {/* LEFT: Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md bg-gray-50 p-6 rounded-xl shadow-md">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
            {product.category}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {Array.from({ length: product.maxRating }, (_, i) => (
              <FaStar
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(product.ratingValue)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600 text-sm">
              {product.ratingValue} / {product.maxRating}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-sky-600">
              ${product.price}
            </span>
            {product.discountPrice && (
              <span className="text-gray-400 line-through text-lg">
                ${product.discountPrice}
              </span>
            )}
            {product.discountPercent && (
              <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                {product.discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-8">
            Elevate your style and performance with the {product.name}. Designed
            for comfort, durability, and a sleek modern look. Perfect for
            everyday wear or high-energy activities.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-black hover:cursor-pointer text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
            <button className="border border-gray-300 hover:cursor-pointer px-8 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
