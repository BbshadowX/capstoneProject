import { createContext, useState } from "react";

export const HomeContext = createContext(null);

const getDefaultCart = ({ products }) => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const HomeContextProvider = (props) => {
  const [cartProducts, setCartProducts] = useState();

  const addToCart = (productId) => [
    setCartProducts((prev) => ({ ...prev, [productId]: prev[productId] + 1 })),
  ];

  const RemoveFromCart = (productId) => [
    setCartProducts((prev) => ({ ...prev, [productId]: prev[productId] - 1 })),
  ];

  const contextValue = { cartProducts, addToCart, RemoveFromCart };
  // console.log(cartProducts);

  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  );
};
