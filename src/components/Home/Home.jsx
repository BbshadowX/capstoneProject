import "./Home.css";
import { Product } from "../Product/Product";
import { Link } from "react-router-dom";

export const Home = ({ products }) => {
  return (
    <>
      <h1 className="products-title">Products</h1>
      <br />
      <div className="sort-links">
        <Link to="/products/az">
          <button className="button">A-Z</button>
        </Link>
        <Link to="/products/za">
          <button className="button">Z-A</button>
        </Link>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} className="product-body" />
        ))}
      </div>
    </>
  );
};
