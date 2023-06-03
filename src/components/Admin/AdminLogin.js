import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from '../../axios'
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await Axios.post("/login", {
        username,
        password: "dhiucmd",
      });
  
      if (response.status === 200) {
        // Admin login successful
        navigate("/admin");
      } else {
        // Invalid credentials
        setError("Invalid username or password");
      }
    } catch (error) {
      // Handle error
      setError("An error occurred. Please try again later.");
    }
  };
  
  

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-heading">Admin Login</h2>
      <form>
        <div className="admin-login-field">
          <label htmlFor="username" className="admin-login-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="admin-login-input"
          />
        </div>
        <div className="admin-login-field">
          <label htmlFor="password" className="admin-login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-login-input"
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="admin-login-button"
        >
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default AdminLogin;
