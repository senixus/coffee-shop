import Profile from "../../auth/Profile";
import "./update.scss";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../../redux/actions/auth/updateProfile";
import { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const update = (password) => dispatch(updatePassword(password));

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(password);
    setPassword("");
  };

  return (
    <Profile>
      <form className="update-form" onSubmit={handleSubmit}>
        <div className="update-form__group">
          <div className="update-form__label">
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="update-form__group">
          <button type="submit">change password</button>
        </div>
      </form>
    </Profile>
  );
};

export default Password;
