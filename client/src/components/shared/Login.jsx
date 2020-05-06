import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="homepage">
      <div className="landingpageleft">
        <img
          id="landingpageimg"
          src="/images/homepage.png"
          alt="user example"
        />
      </div>

      <div className="landingpageright">
      <h4 className="homepageh1">Your place to shop the look and get a second opinion from friends!</h4>

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
          <p>
            Don't have an account?
            <Link className="hyperlinks" to="/Register">
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
