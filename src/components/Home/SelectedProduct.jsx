import { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "./HomeContext";

export const SelectedProduct = (props) => {
  const { id, title, price, image, description } = props.data;
  const { addToCart } = useContext(HomeContext);

  return (
    <div className="s-product">
      <div className="selected-product">
        <div className="select-product">
          <Link to={`/product/${id}`}>
            <img src={image} id="selected-product-pic" />
          </Link>
        </div>
        <div className="description">
          <h2 className="product-title">{title}</h2>
          <br />
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
          <div className="add-cart-product">
            <button
              className="add-cart-icon"
              onClick={() => addToCart(props.data)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
