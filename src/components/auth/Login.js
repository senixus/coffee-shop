import "./auth.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginAction } from "../../redux/actions/auth/login";
import Navbar from "../navbar/Navbar";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const history = useHistory();
  const login = (email, password, history) =>
    dispatch(loginAction(email, password, history));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(user.email, user.password, history);
    setUser({ email: "", password: "" });
  };
  return (
    <main className="auth-form">
      <Navbar />

      <div className="auth-form__child">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-div">
            <h1 className="form-title">Login</h1>
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
                Login
              </button>
            </div>

            <div className="form-group ">
              <div className="form-group">
                <Link to="/register" className="register">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
