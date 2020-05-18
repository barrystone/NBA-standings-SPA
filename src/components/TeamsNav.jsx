import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/images/header/nba-logo.png";
const TeamsNav = () => {
  return (
    <div className="TeamsNav-wrap">
      {/* <h3>
        <Link to="/">
          <img src={logoImg} className="TeamNav-logoImg" />
        </Link>
      </h3> */}
      <nav className="TeamsNav-nav">
        <ul>
          {/* <div className="TeamsNav-box1"> */}
          <li>
            <NavLink to="/Atlantic" activeClassName="TeamsNav-Nav-active">
              Atlantic
            </NavLink>
          </li>
          <li>
            <NavLink to="/Central" activeClassName="TeamsNav-Nav-active">
              Central
            </NavLink>
          </li>
          <li>
            <NavLink to="/Southeast" activeClassName="TeamsNav-Nav-active">
              Southeast
            </NavLink>
          </li>
          {/* </div> */}
          {/* <div className="TeamsNav-box2"> */}
          <li>
            <NavLink to="/Pacific" activeClassName="TeamsNav-Nav-active">
              Pacific
            </NavLink>
          </li>
          <li>
            <NavLink to="/Southwest" activeClassName="TeamsNav-Nav-active">
              Southwest
            </NavLink>
          </li>
          <li>
            <NavLink to="/Northwest" activeClassName="TeamsNav-Nav-active">
              Northwest
            </NavLink>
          </li>
          {/* </div> */}
        </ul>
      </nav>
    </div>
  );
};

export default TeamsNav;
