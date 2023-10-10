import "./Product.css";
import { HomeContext } from "../Home/HomeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, title, price, image } = props.data;
  const { addToCart } = useContext(HomeContext);

  return (
    <>
      <div className="product">
        <div className="select-product">
          <Link to={`/product/${id}`}>
            <img src={image} id="product-pic" />
          </Link>
        </div>
        <div className="description">
          <h2 className="product-title">{title}</h2>

          <p className="product-price">${price}</p>
          <div className="add-to-cart">
            <button
              className="add-cart-icon"
              onClick={() => addToCart(props.data)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
