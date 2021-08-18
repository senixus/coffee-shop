import React from "react";
import Login from "../components/auth/Login";
import ReactHelmet from "../components/helmet/ReactHelmet";

const LoginPage = () => {
  return (
    <React.Fragment>
      <ReactHelmet title="Login" />
      <Login />
    </React.Fragment>
  );
};

export default LoginPage;
