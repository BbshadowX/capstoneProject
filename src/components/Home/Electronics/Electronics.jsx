import { Product } from "../../Product/Product";
import "./Electronics.css";

import { Link } from "react-router-dom";

export const Electronics = ({ products }) => {
  const MenProducts = products
    ? products.filter((product) => product.category === "electronics")
    : [];
  return (
    <>
      <h1 className="products-title">Electronics</h1>;
      <div className="products">
        {MenProducts.map((product) => (
          <Product key={product.id} data={product} className="product-body" />
        ))}
      </div>
    </>
  );
};
