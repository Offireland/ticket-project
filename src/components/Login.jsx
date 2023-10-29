import { useState } from "react";
import "./login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({
      username: username,
      password: password,
    });
  };

  return (
    <div>
      <form>
        <label>Username:</label>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Username"
          className="custom-input"
          type="text"
        />
        <label>Password:</label>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
          className="custom-input"
          type="password"
        />
        <button onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
