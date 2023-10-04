import { Product } from "../../Product/Product";
import "./Jewelery.css";

import { Link } from "react-router-dom";

export const Jewelery = ({ products }) => {
  const MenProducts = products
    ? products.filter((product) => product.category === "jewelery")
    : [];
  return (
    <>
      <h1 className="products-title">Jewelery</h1>;
      <div className="products">
        {MenProducts.map((product) => (
          <Product key={product.id} data={product} className="product-body" />
        ))}
      </div>
    </>
  );
};
