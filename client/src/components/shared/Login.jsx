import React from "react";
import { Link } from "react-router-dom";

// This component handles our login form and has a link to the register form
const Login = (props) => {
  return (
    <div className="auth-container">
      {/* <h2>Sign In</h2> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }}
      >
        <input
          name="username"
          placeholder="Enter Username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange}
        />
        <br />
        <input
          name="password"
          placeholder="Enter Password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <br />
        <button>Login</button>
        <br />
        <p>Don't have an account? 
        <Link className="hyperlinks" to="/Register"> Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
