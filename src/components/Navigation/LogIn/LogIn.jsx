import "./LogIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logInUser } from "../../../data/data";

export const LogIn = ({ setToken, token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const authFn = logInUser;
    console.log(token);
    const data = await authFn(username, password);
    setToken(data.token);
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
          <Link to="/">
            <button
              className="log-in"
              onClick={() => {
                handleSubmit();
              }}
            >
              Log In
            </button>
          </Link>
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
