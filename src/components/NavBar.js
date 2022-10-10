import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./Log/AppContext";
import Logout from "./Log/Logout";

const NavBar = () => {
  const uid = useContext(UidContext);
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon-left-font.svg" alt="icon" />
              <h3>groupomania</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="./img/login.svg" alt="icon" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
