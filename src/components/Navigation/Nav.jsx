import "./Nav.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = ({
  products,
  setProducts,
  filteredProducts,
  currentForm,
}) => {
  return (
    <>
      <header>
        <nav>
          <h1>Capstone</h1>
          <Link to="/">
            <button className="button">All Products</button>
          </Link>
          <div className="categories">
            <Link to="/men">
              <button className="button">Men</button>
            </Link>
            <Link to="/women">
              <button className="button">Women</button>
            </Link>
            <Link to="/jewelery">
              <button className="button">Jewelery</button>
            </Link>
            <Link to="/electronics">
              <button className="button">Electronics</button>
            </Link>
          </div>
          {currentForm === "login" ? (
            <div>
              <Link to="/log-in">
                <button className="button">Log In</button>
              </Link>
              <Link to="/sign-up">
                <button className="button">Sign Up</button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/">
                <button className="button">Log Out</button>
              </Link>
            </div>
          )}
          <Link to="/cart">
            {" "}
            <AiOutlineShoppingCart className="nav-icons" />
          </Link>{" "}
        </nav>
      </header>
    </>
  );
};