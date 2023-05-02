import React, { useState } from "react";
import Button from "./visuals/Button";
import Input from "./visuals/Input";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassowrd] = useState("");
  const auth = useAuth();

  const navigate = useNavigate();

  function login() {
    try {
      if (auth.login(password)) {
        alert("Login Successful");
        navigate("/profile");
      } else {
        alert("Login Unsuccessful : Wrong password");
      }
    } catch (e) {
      alert(e);
    }
  }
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <Input
          label="username"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            auth.setTempUser(e.target.value);
          }}
        />
        <Input
          label="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassowrd(e.target.value);
          }}
        />
        <Button onClick={login}>Login</Button>
      </div>
      ;
    </>
  );
};

export default Login;
