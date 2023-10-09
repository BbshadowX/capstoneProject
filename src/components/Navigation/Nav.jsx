import "./Nav.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = ({
  token,
  setToken,
  products,
  setProducts,
  filteredProducts,
  currentForm,
}) => {
  const handleChange = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      <header>
        <nav>
          <h1 className="project-title">Capstone</h1>
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
          {token ? (
            <div>
              <Link to="/">
                <button className="button" onClick={handleChange}>
                  Log Out
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/log-in">
                <button className="button">Log In</button>
              </Link>
              <Link to="/sign-up">
                <button className="button">Sign Up</button>
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
