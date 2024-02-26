import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import stylesheet from "./login.css";


function Login() { 
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    // if (email=== null || password=== null || retypePassword=== null) {
    //   alert("Please fill in all required fields.");
    //   return;
    // }

    // if (password !== retypePassword) {
    //   alert("Passwords do not match");
    //   return
    // }
    //make password required and more robust

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User has not signed up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    } finally {
      setEmail("");
      setPassword("");
      setRetypePassword("");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Link to="/">
          <button className="home">⌂</button>
      </Link>
      

      <form action="POST">
        <div class="input-box">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            placeholder="Retype Password"
          />
        </div>
        <input class="btn" type="submit" onClick={submit} />
      </form>

      <Link to="/signup" className="signupLink">Haven't signed up yet? Signup Here!</Link>
    </div>
  );
}

export default Login;