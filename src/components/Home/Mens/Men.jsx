import { Product } from "../../Product/Product";
import { Link } from "react-router-dom";

export const Men = ({ products }) => {
  const MenProducts = products
    ? products.filter((product) => product.category === "men's clothing")
    : [];
  return (
    <>
      <h1 className="products-title">Men's Clothing</h1>
      <div className="products">
        {MenProducts.map((product) => (
          <Product key={product.id} data={product} className="product-body" />
        ))}
      </div>
    </>
  );
};
