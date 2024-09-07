
import "./ProductCard.css" 
const ProductCard = ({product}) => {
    return (
      <div>
        <div className="prod-card">
          <img src={product.image} alt="Product" />
          <h2 className="font-bold">{product.brand}</h2>
          <h3 className="font-semibold text-gray-700">{product.title}</h3>
          <div className="flex items-center p-2 text-wrap">
            <h4 className="font-semibold mr-2">{product.selling_price}</h4>
            <h4 className="opacity-50 line-through mr-2">{product.price}</h4>
            <h4 className="text-sm font-semibold text-green-500">{product.discount}</h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;