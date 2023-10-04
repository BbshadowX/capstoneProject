import "./Product.css";
// import { HomeContext } from "../Home/HomeContext";
// import { useContext } from "react";
import { Link } from "react-router-dom";

// import SingleProduct from "../Single-Product/Single-Product";
// import { useState } from "react";

export const Product = (props) => {
  const { id, title, price, image, description } = props.data;
  // const { addtocart } = useContext(HomeContext);
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
          {/* <p className="product-description">{description}</p> */}
          <div className="add-to-cart">
            <button className="add-cart-icon" onClick={() => addtocart(id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
