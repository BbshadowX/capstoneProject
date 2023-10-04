import "./LogIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div className="log-in-page">
        <h1 className="login-title">Log In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            className="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            className="password"
          />
          <button className="log-in">Log In</button>
        </form>
        <Link to="/sign-up">
          <div className="no-account">
            <button className="no-account-button">
              No Account? Sign Up Here!
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};
