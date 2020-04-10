import React from "react";
import { Link } from "react-router-dom";

// This component handles our login form and has a link to the register form
const Login = (props) => {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }}
      >
        <p>Username:</p>
        <input
          name="username"
          placeholder="Enter Username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange}
        />

        <p>Password:</p>
        <input
          name="password"
          placeholder="Enter Password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <hr />
        <button>Login</button>
        <br/>
        <Link to="/Register">Create Account</Link>
      </form>
    </div>
  );
};

export default Login;
