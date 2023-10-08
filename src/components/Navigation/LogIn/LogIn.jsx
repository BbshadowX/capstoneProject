import "./LogIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "test123",
        password: "test123",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <div className="log-in-page">
        <h1 className="login-title">Log In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Username"
            className="Username"
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
