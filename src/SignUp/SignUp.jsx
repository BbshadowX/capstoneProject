import "./SignUp.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div className="sign-up-page">
        <h1 className="sign-up-title">Sign Up</h1>
        <form className="sign-up-form" onSubmit={handleSubmit}>
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
          <label htmlFor="username">Full Name</label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Name"
            className="user-name"
          />
          <button className="sign-up">Sign Up</button>
          <Link to="/log-in">
            <div className="have-account">
              <button className="have-account-button">
                Already have an Account? Log In Here!
              </button>
            </div>
          </Link>
        </form>
      </div>
    </>
  );
};
