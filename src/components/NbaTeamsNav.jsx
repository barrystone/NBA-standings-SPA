import React, { Component } from "react";
import { Link } from "react-router-dom";
class NbaTeamsNav extends Component {
  render() {
    return (
      <nav className="NbaTeamsNav-wrap">
        <h3>
          <Link to="/">logo</Link>
        </h3>
        <ul>
          <div className="NbaTeamsNav-box1">
            <Link to="/Atlantic">
              <li>Atlantic</li>
            </Link>
            <Link to="/Central">
              <li>Central</li>
            </Link>
            <Link to="/Southeast">
              <li>Southeast</li>
            </Link>
          </div>
          <div className="NbaTeamsNav-box2">
            <Link to="/Pacific">
              <li>Pacific</li>
            </Link>
            <Link to="/Southwest">
              <li>Southwest</li>
            </Link>
            <Link to="/Northwest">
              <li>Northwest</li>
            </Link>
            {/* <Link to="/Northwest/Nort">
              <li>Nort</li>
            </Link> */}
          </div>
        </ul>
      </nav>
    );
  }
}

export default NbaTeamsNav;
