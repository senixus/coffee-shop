import Profile from "../components/auth/Profile";
import ReactHelmet from "../components/helmet/ReactHelmet";

const ProfilePage = () => {
  return (
    <>
      <ReactHelmet title="Profile" />
      <Profile />
    </>
  );
};

export default ProfilePage;
