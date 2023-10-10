import { useState } from "react";
import { useParams } from "react-router-dom";
import { logInUser, signUpUser } from "../../../data/data";

export const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useParams();

  const title = user === "log-in" ? "Log In" : "Sign Up";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const authFn = user === "sign-up" ? signUpUser : logInUser;

    const data = await authFn(username, password);
    console.log(data);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="log-in-page">
        <h1 className="login-title">{title}</h1>
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
        <button className="log-in">{title}</button>
      </div>
    </form>
  );
};
