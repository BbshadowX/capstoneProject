import { Link } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../Home/HomeContext";

export const CartProduct = (props) => {
  const { id, title, price, image } = props.data;
  const { cartTotal } = useContext(HomeContext);
  console.log(title, "title");
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
        </div>
      </div>
    </>
  );
};
