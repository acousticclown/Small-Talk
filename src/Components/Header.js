import { useState } from "react";
import { fireAuth } from "../Configs/Firebase";
import { Link } from "react-router-dom";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

const Header = () => {
  const [themeBtn, setThemeBtn] = useState(false);

  const changeTheme = () => {
    if (themeBtn) {
      setThemeBtn(false);
    } else {
      setThemeBtn(true);
    }
  };

  return (
    <div className="navbar">
      <div className="nav-section">
        <div className="logo">
          <a href="/">SM</a>
        </div>
        {/* <li>Small Talk</li> */}
      </div>
      <div className="add-stage-button">
        <Link to="/add-stage"> New Stage </Link>
      </div>
      <div className="nav-section">
        <div className="signOutBtn" onClick={() => fireAuth.signOut()}>
          <p> Sign out </p>
        </div>
        {themeBtn ? (
          <MoonIcon
            onClick={changeTheme}
            style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
          />
        ) : (
          <SunIcon
            onClick={changeTheme}
            style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
