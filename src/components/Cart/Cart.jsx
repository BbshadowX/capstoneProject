import { Product } from "../Product/Product";
import { HomeContext } from "../Home/HomeContext";
import "./Cart.css";
import { useContext } from "react";
import { CartProduct } from "./CartProduct";

export const Cart = ({ products }) => {
  const { cartProducts, cartTotal } = useContext(HomeContext);
  console.log(cartProducts);
  return (
    <div className="cart">
      <div>
        <h1 className="cart title">Your Cart Items</h1>
        <h2>Your Cart Total is ${cartTotal}</h2>
      </div>
      <div className="cartProducts">
        {cartProducts.map((product) => (
          <CartProduct key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
