import Profile from "../../auth/Profile";
import "./update.scss";
import { useDispatch } from "react-redux";
import { updateEmail } from "../../../redux/actions/auth/updateProfile";
import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const update = (email) => dispatch(updateEmail(email));

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(email);
    setEmail("");
  };

  return (
    <Profile>
      <form className="update-form" onSubmit={handleSubmit}>
        <div className="update-form__group">
          <div className="update-form__label">
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="update-form__group">
          <button type="submit">change email</button>
        </div>
      </form>
    </Profile>
  );
};

export default Email;
