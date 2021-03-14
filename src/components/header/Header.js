import "./header.scss";
import slide from "../../assets/images/slider-separator.png";
import Navbar from "../navbar/Navbar";
import { withRouter, Link } from "react-router-dom";

const Header = ({ history }) => {
  return (
    <header className="background">
      <Navbar />
      <div className="background-child">
        <h1>Coffee Factory</h1>
        <img src={slide} alt="coffee" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
        <Link onClick={() => history.push("/shop")}>shop here</Link>
      </div>
    </header>
  );
};

export default withRouter(Header);
