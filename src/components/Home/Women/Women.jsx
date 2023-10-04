import { Product } from "../../Product/Product";
import "./Women.css";

import { Link } from "react-router-dom";

export const Women = ({ products }) => {
  const MenProducts = products
    ? products.filter((product) => product.category === "women's clothing")
    : [];
  return (
    <>
      <h1 className="products-title">Women's Clothing</h1>;
      <div className="products">
        {MenProducts.map((product) => (
          <Product key={product.id} data={product} className="product-body" />
        ))}
      </div>
    </>
  );
};
