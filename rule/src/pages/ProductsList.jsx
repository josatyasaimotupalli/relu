import { products } from "../data/dashboardData";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto max-h-[500px] min-h-0 rounded-lg scrollbar-hide">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
