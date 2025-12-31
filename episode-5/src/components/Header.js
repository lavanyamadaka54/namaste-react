import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="head">
      <img className="logo" src={LOGO_URL} alt="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
