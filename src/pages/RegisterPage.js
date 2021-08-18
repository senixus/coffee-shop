import React from "react";
import Register from "../components/auth/Register";
import ReactHelmet from "../components/helmet/ReactHelmet";

const RegisterPage = () => {
  return (
    <React.Fragment>
      <ReactHelmet title="Register" />
      <Register />
    </React.Fragment>
  );
};

export default RegisterPage;
