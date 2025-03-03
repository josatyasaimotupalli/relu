import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="min-w-[300px] max-w-[256px] p-4">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
      />

      {/* Product Name */}
      <h3 className="mt-3 text-xs font-semibold text-gray-700">
        {product.name}
      </h3>

      {/* Product Price & Star Rating */}
      <div className="flex justify-between items-center mt-2">
        {/* Product Price */}
        <p className="text-lg font-barlow font-semibold text-black">{product.price}</p>

        {/* Star Rating */}
        <div className="flex text-yellow-500">
          {Array.from({ length: product.rating }).map((_, index) => (
            <FaStar key={index} className="text-sm" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


