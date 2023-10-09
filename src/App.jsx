import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navigation/Nav";
import { Men } from "./components/Home/Mens/Men";
import { Electronics } from "./components/Home/Electronics/Electronics";
import { useState, useEffect } from "react";
import { Cart } from "./components/Cart/Cart";
import { Jewelery } from "./components/Home/Jewelery/Jewelery";
import { fetchProducts } from "./data/data";
import { Home } from "./components/Home/Home";
import { Women } from "./components/Home/Women/Women";
import { SingleProduct } from "./components/Home/SingleProduct";
import { ProductsAZ } from "./components/Home/ProductsSort/ProductsAZ";
import { ProductsZA } from "./components/Home/ProductsSort/ProductsZA";
import { LogIn } from "./components/Navigation/LogIn/LogIn";
import { SignUp } from "./components/Navigation/SignUp/SignUp";
import { HomeContextProvider } from "./components/Home/HomeContext";

function App() {
  const [products, setProducts] = useState([]);
  const [currentForm, setCurrentForm] = useState("login");
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const toggleForm = (formName) => {
    setCurrentForm[formName];
  };

  useEffect(() => {
    async function getProducts() {
      const result = await fetchProducts();
      setProducts(result);
    }
    getProducts();
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const filteredProducts = (cat) => {
    const newProducts = products.filter((newval) => newval.category === cat);
    setProducts(newProducts);
  };

  return (
    <>
      <BrowserRouter>
        <HomeContextProvider products={products}>
          <div className="main-app">
            <div className="navigation-body">
              <Navbar
                products={products}
                filteredProducts={filteredProducts}
                setProducts={setProducts}
                currentForm={currentForm}
                setToken={setToken}
                token={token}
              />
            </div>
            <div>
              <Routes>
                <Route
                  path="/cart"
                  element={
                    <Cart products={products} setProducts={setProducts} />
                  }
                />
                <Route
                  path="/"
                  element={
                    <Home products={products} setProducts={setProducts} />
                  }
                />
                <Route
                  path="/men"
                  element={
                    <Men products={products} setProducts={setProducts} />
                  }
                />
                <Route
                  path="/women"
                  element={
                    <Women products={products} setProducts={setProducts} />
                  }
                />
                <Route
                  path="/jewelery"
                  element={
                    <Jewelery products={products} setProducts={setProducts} />
                  }
                />
                <Route
                  path="/electronics"
                  element={
                    <Electronics
                      products={products}
                      setProducts={setProducts}
                    />
                  }
                />
                <Route
                  path="/product/:id"
                  element={<SingleProduct products={products} />}
                />
                <Route
                  path="/products/az"
                  element={<ProductsAZ products={products} />}
                />
                <Route
                  path="/products/za"
                  element={<ProductsZA products={products} />}
                />
                <Route
                  path="/log-in"
                  element={
                    <LogIn
                      onFormSwitch={toggleForm}
                      setToken={setToken}
                      token={token}
                    />
                  }
                />
                <Route
                  path="/sign-up"
                  element={
                    <SignUp
                      onFormSwitch={toggleForm}
                      setToken={setToken}
                      token={token}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </HomeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
