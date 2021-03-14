import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../../redux/actions/auth/logout";
import Navbar from "../navbar/Navbar";
import "./auth.scss";

const Profile = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutAction());

  return (
    <main className="profile-section ">
      <Navbar />
      <div className="profile-info container">
        <ul className="profile-info__list">
          <li>
            <Link to="/email">Change Email</Link>
          </li>

          <li>
            <Link to="/password">Change Password</Link>
          </li>

          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/wishlist">Wish List</Link>
          </li>
          <li>
            <Link to="/" onClick={() => logout()}>
              Logout
            </Link>
          </li>
        </ul>
        <div className="profile-info__about">
          <div>
            <p>Welcome {user.displayName ? user.displayName : user.email}</p>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
