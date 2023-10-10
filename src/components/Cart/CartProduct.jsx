import { Link } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../Home/HomeContext";

export const CartProduct = (props) => {
  const { id, title, price, image } = props.data;
  const { removeFromCart } = useContext(HomeContext);
  return (
    <>
      <div className="cart">
        <div className="cartproduct">
          <Link to={`/product/${id}`}>
            <img src={image} id="product-pic" />
          </Link>
        </div>
        <div className="description">
          <h2 className="product-title">{title}</h2>

          <p className="product-price">${price}</p>
          <div className="remove-product">
            <button
              className="button"
              onClick={() => removeFromCart(props.data)}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
