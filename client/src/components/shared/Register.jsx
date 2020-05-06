import React from "react";
import { withRouter } from 'react-router-dom';

const Register = (props) => {
  return (
    <div className="auth-container">
      <form onSubmit={props.handleRegister}>
        <input
          name="username"
          placeholder="Create Username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange}
        />

        <input
          name="password"
          placeholder="Create Password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <p className="registercomments">Password must be at least 8 characters</p>
        <input
          name="email"
          placeholder="Enter Email"
          type="text"
          value={props.formData.email}
          onChange={props.handleChange}
        />

        <input
          name="first_name"
          placeholder="Enter First Name"
          type="text"
          value={props.formData.first_name}
          onChange={props.handleChange}
        />

        <input
          name="last_name"
          placeholder="Enter Last Name"
          type="text"
          value={props.formData.last_name}
          onChange={props.handleChange}
        />

        <select
          onChange={props.handleChange}
          name="user_type"
          type="text"
          value={props.formData.user_type}
        >
          <option className="selector" value="">
            Enter Account Type
          </option>
          <option className="selector" value="personal">
            Personal
          </option>
          <option className="selector" value="business">
            Business
          </option>
        </select>

        <h2>Below is Only Required for Business Users</h2>

        <select
          onChange={props.handleChange}
          name="b2b_b2c_c2c"
          type="text"
          value={props.formData.b2b_b2c_c2c}
        >
          <option className="selector" value="">
            Select B2B or B2C
          </option>
          <option className="selector" value="personal">
            B2B
          </option>
          <option className="selector" value="personal">
            B2C
          </option>
        </select>

        <input
          name="industry"
          placeholder="Enter Industry"
          type="text"
          value={props.formData.industry}
          onChange={props.handleChange}
        />

        <input
          name="business_website"
          placeholder="Enter Business Website"
          type="text"
          value={props.formData.business_website}
          onChange={props.handleChange}
        />
        <hr />
        <button>Register</button>
      </form>
      <button
           onClick={() => {
            props.history.push("/")
          }}
      >
        Cancel
      </button>
    </div>
  );
};

export default withRouter(Register);
