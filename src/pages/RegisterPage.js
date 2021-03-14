import Register from "../components/auth/Register";
import ReactHelmet from "../components/helmet/ReactHelmet";

const RegisterPage = () => {
  return (
    <>
      <ReactHelmet title="Register" />
      <Register />
    </>
  );
};

export default RegisterPage;
