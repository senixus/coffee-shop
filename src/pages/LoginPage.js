import Login from "../components/auth/Login";
import ReactHelmet from "../components/helmet/ReactHelmet";

const LoginPage = () => {
  return (
    <>
      <ReactHelmet title="Login" />
      <Login />
    </>
  );
};

export default LoginPage;
