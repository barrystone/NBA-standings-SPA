import React from "react";
import { Link, NavLink } from "react-router-dom";

import logoImg from "../../assets/images/header/nba-logo.png";
import headerRightBgImg from "../../assets/images/header/header-right-bg.png";
import headerStoreImg from "../../assets/images/header/header-store.png";
import headerUserImg from "../../assets/images/header/header-user.png";

const mainHeader = () => {
  return (
    <div className="mainHeader">
      <nav className="mainHeader-nav">
        <div className="mainHeader-nav-left-container">
          <Link to="/">
            <img
              src={logoImg}
              className="mainHeader-nav-left-container-logoImg"
            />
          </Link>
        </div>
        <div className="mainHeader-nav-center-container">
          <ul>
            <li>
              <a href="">SCORES</a>
            </li>
            <li>
              <a href="">SCHEDULE</a>
            </li>
            <li>
              <a href="">STANDINGS</a>
            </li>
            <li>
              <a href="">NEWS</a>
            </li>
            <li>
              <a href="">TEAMS</a>
            </li>
            <li>
              <a href="">VIDEO</a>
            </li>
          </ul>
        </div>
        <div className="mainHeader-nav-right-container">
          <div className="mainHeader-nav-right-container-box">
            <img
              className="mainHeader-nav-right-container-box-storeImg"
              src={headerStoreImg}
            ></img>
            <img
              className="mainHeader-nav-right-container-box-userImg"
              src={headerUserImg}
            ></img>
          </div>
        </div>
      </nav>
      <div className="mainHeader-line"></div>
    </div>
  );
};

export default mainHeader;
