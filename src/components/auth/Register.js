import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { registerAction } from "../../redux/actions/auth/register";

import Navbar from "../navbar/Navbar";

import "./auth.scss";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const history = useHistory();
  const register = (email, password, history, username) =>
    dispatch(registerAction(email, password, history, username));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register(user.email, user.password, history, user.username);
    setUser({ email: "", password: "", username: "" });
  };
  return (
    <main className="auth-form">
      <Navbar />

      <div className="auth-form__child">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-div">
            <h1 className="form-title">Register</h1>
            <div className="form-group">
              <div className="form-group__label">
                <label htmlFor="username">Username</label>
              </div>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="form-group__control"
                onChange={handleChange}
                value={user.username}
                required
                aria-label="username"
              />
            </div>
            <div className="form-group">
              <div className="form-group__label">
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-group__control"
                onChange={handleChange}
                value={user.email}
                required
                aria-label="email"
              />
            </div>
            <div className="form-group">
              <div className="form-group__label">
                <label htmlFor="password">Password</label>
              </div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="form-group__control"
                onChange={handleChange}
                value={user.password}
                required
                aria-label="password"
              />
            </div>
            <small style={{ color: "red" }}>{error}</small>
            <div className="form-group">
              <button type="submit" className="form-btn">
                Register
              </button>
            </div>

            <div className="form-group ">
              <div className="form-group">
                <Link to="/login" className="register">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
