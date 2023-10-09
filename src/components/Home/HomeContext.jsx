import { createContext, useCallback, useEffect, useState } from "react";

export const HomeContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartTotal: 0,
  cartCount: 0,
});

const addCartItem = (cartItems, product) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItems, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...product, quantity: 1 }];
};
const removeCartItem = (cartItems, product) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItems, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const HomeContextProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  console.log(cartProducts);
  const addToCart = (product) => {
    setCartProducts((cartItems) => addCartItem(cartItems, product));
  };

  const removeFromCart = (product) => {
    setCartProducts((cartItems) => removeCartItem(cartItems, product));
  };

  const getCartTotal = useCallback(() => {
    const newCartTotal = cartProducts.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartProducts]);

  const getCartCount = useCallback(() => {
    const newCartCount = cartProducts.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartProducts]);

  useEffect(() => {
    getCartTotal();
  }, [getCartTotal]);

  useEffect(() => {
    getCartCount();
  }, [getCartCount]);

  const contextValue = {
    cartProducts,
    addToCart,
    removeFromCart,
    cartTotal,
    cartCount,
  };
  console.log(cartProducts);

  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  );
};
