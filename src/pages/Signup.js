import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import stylesheet from "./signup.css"

function signup() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    if (password !== retypePassword) {
        alert("Passwords do not match");
      }

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1>Signup!</h1>

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
        <input type="submit" onClick={submit} className="btn"/>
      </form>

      <Link to="/" className="loginLink">Back to Login</Link>
    </div>
  );
}

export default signup;