import { Product } from "../../Product/Product";
import { Link } from "react-router-dom";
import "./ProductsSort.css";

export const ProductsAZ = ({ products }) => {
  const AccendingItems = [...products].sort((a, b) =>
    a.title > b.title ? 1 : -1
  );

  return (
    <>
      <h1 className="az-title">A-Z</h1>
      <br />
      <div className="az-links">
        <Link to="/products/az">
          <button className="button">A-Z</button>
        </Link>
        <Link to="/products/za">
          <button className="button">Z-A</button>
        </Link>
      </div>
      <div className="products">
        {AccendingItems.map((product) => (
          <Product key={product.id} data={product} className="product-body" />
        ))}
      </div>
    </>
  );
};
