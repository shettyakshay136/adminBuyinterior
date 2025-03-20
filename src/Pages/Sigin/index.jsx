import React, { useState } from "react";
import "./index.css";
import axios from "axios";

import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();





  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const from = location.state?.from || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://buyinteriorapp-ed1e9e8d81f4.herokuapp.com/api/signin/",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If login is successful
      if (response.status === 200) {
        console.log("Response:", response.data);
        console.log("Login success");

        // Save token (modify based on API response)
        localStorage.setItem("token", response.data.access);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };




  return (
    <div className="container">
      <div className="left-side">
        <img src="/Images/sigin.jpg" alt="Background" />
      </div>

      <div className="right-side">
        <div className="right-side-sub">
          <h1>Buy Interior leads</h1>
          <div className="header-signIn">
            <h2>Welcome Back</h2>
            <p>Access your interior design leads</p>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-btn">
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
