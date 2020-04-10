import React from "react";

// This component handles our register form
const Register = (props) => {
  return (
    <div className="auth-container">
      <h2>Register a New Account</h2>
      <hr />
      <form onSubmit={props.handleRegister}>
        <p>Username:</p>
        <input
          name="username"
          placeholder="Create Username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange}
        />

        <p>Password:</p>
        <input
          name="password"
          placeholder="Create Password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />

        <p>Email:</p>
        <input
          name="email"
          placeholder="Enter Email"
          type="text"
          value={props.formData.email}
          onChange={props.handleChange}
        />

        <p>First Name:</p>
        <input
          name="first_name"
          placeholder="Enter First Name"
          type="text"
          value={props.formData.first_name}
          onChange={props.handleChange}
        />

        <p>Last Name:</p>
        <input
          name="last_name"
          placeholder="Enter Last Name"
          type="text"
          value={props.formData.last_name}
          onChange={props.handleChange}
        />

        <p>Account Type:</p>
        <select
          onChange={props.handleChange}
          name="user_type"
          type="text"
          value={props.formData.user_type}
        >
          <option value="">Enter Account Type</option>
          <option value="personal">Personal</option>
          <option value="business">Business</option>
        </select>

        
        <p>B2B or B2C:</p>
        <select
          onChange={props.handleChange}
          name="user_type"
          type="text"
          value={props.formData.b2b_b2c_c2c}
        >
          <option value="">Select B2B or B2C</option>
          <option value="personal">B2B</option>
          <option value="personal">B2C</option>
        </select>

        <p>Industry:</p>
        <input
          name="industry"
          placeholder="Enter Industry"
          type="text"
          value={props.formData.industry}
          onChange={props.handleChange}
        />

        <p>Business Website:</p>
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
    </div>
  );
};

export default Register;
