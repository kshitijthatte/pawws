import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="authentication-container">
      <div className="card input-group">
        <Link className="title-w-logo text-lg text-primary text-center" to="/">
          <img src="/assets/logo-colored.svg" className="nav-logo" />
          pawws - Sign Up
        </Link>
        <div className="name-input">
          <input type="text" className="input" placeholder="First Name" />
          <input type="text" className="input" placeholder="Last Name" />
        </div>
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="New Password" />
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
        />
        <button className="btn btn-primary text-center">Sign Up</button>

        <hr className="divider" />
        <Link className="btn outline-primary text-center" to="/login">
          Or Login Now!
        </Link>
      </div>
    </div>
  );
};

export default Signup;
