import React from "react";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Teamspage from "./TeamsPage";

const TeamsDiv = (props) => {
  const { lists, divsData } = props;
  let { url, path } = useRouteMatch();
  let { TeamDiv } = useParams();

  // console.log(Object.keys(divsData[0])[0]);

  const divData = divsData.filter((c) => Object.keys(c) == TeamDiv);
  const teams = Object.values(divData[0])[0];

  function TeamsDivHome() {
    return <div>{TeamDiv}</div>;
  }
  return (
    <React.Fragment>
      <nav className="TeamsDivNav-wrap">
        <ul>
          {teams.map((c) => {
            return (
              <NavLink to={`${url}/${c}`} activeClassName="TeamsNav-Nav-active">
                <li>{c}</li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
      <div style={{ backgroundColor: "#E3CEF6" }}>
        <Switch>
          <Route exact path={path}>
            <TeamsDivHome />
          </Route>
          <Route path={`${path}/:Team`}>
            <Teamspage lists={lists} />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default TeamsDiv;
