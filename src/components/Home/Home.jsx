import "./Home.css";
import { Product } from "../Product/Product";
import { Link } from "react-router-dom";

export const Home = ({ products }) => {
  return (
    <>
      <h1 className="products-title">Products</h1>
      <br />
      <Link to="/products/accending">
        <button className="button">A-Z</button>
      </Link>
      <button className="button">Z-A</button>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} className="product-body" />
        ))}
      </div>
    </>
  );
};

//  <Products classname={"products"} product={product} />
