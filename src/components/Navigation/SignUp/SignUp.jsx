import "./SignUp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signUpUser } from "../../../data/data";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const authFn = signUpUser;

    const data = await authFn(username, password, email, name);
    console.log(data);
    // try {
    //   const newUser = {
    //     user: { email, username, password, name },
    //   };
    //   const response = await signUpUser(newUser);
    // } catch (error) {
    //   console.error("There was an error creating new user", error);
    // }

    // console.log(email);
    // console.log(username);
    // console.log(password);
    // console.log(name);
  };

  return (
    <>
      <div className="sign-up-page">
        <h1 className="sign-up-title">Sign Up</h1>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="First and Last Name"
            className="name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            className="email"
          />
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Username"
            className="username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            className="password"
            minLength="6"
            required
          />
          <Link to="/log-in">
            <button
              className="sign-up"
              onClick={() => {
                handleSubmit();
              }}
            >
              Sign Up
            </button>
          </Link>
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

// console.log(email);
// console.log(username);
// console.log(password);
// fetch("https://fakestoreapi.com/users", {
//   method: "POST",
//   body: JSON.stringify({
//     email: email,
//     username: username,
//     password: password,
//   }),
// })
// .then((res) => res.json())
// .then((json) => console.log(json));
