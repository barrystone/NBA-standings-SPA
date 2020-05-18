import React from "react";
import { NavLink, useRouteMatch, useParams } from "react-router-dom";

// let { url } = useRouteMatch();

// let { TeamDiv } = useParams();

const TemasDivNav = (props) => {
  const { teams, teamDiv } = props;
  //   const divsData = [
  //     { Atlantic: ["Raptors", "Celtics", "76ers", "Nets", "Knicks"] },
  //     { Central: ["Bucks", "Pacers", "Bulls", "Pistons", "Cavaliers"] },
  //     { Southeast: ["Heat", "Magic", "Wizards", "Hornets", "Hawks"] },
  //     {
  //       Northwest: [
  //         "Nuggets",
  //         "Jazz",
  //         "Thunder",
  //         "Trail Blazers",
  //         "Timberwolves",
  //       ],
  //     },
  //     { Pacific: ["Lakers", "Clippers", "Kings", "Suns", "Warriors"] },
  //     { Southwest: ["Rockets", "Mavericks", "Grizzlies", "Pelicans", "Spurs"] },
  //   ];
  //   const divData = divsData.filter((c) => Object.keys(c) == TeamDiv);
  //   const teams = Object.values(divData[0])[0];

  return (
    <nav className="TeamsDivNav-wrap">
      <ul>
        {teams.map((c) => {
          return (
            // <NavLink to={`${url}/${c}`} activeClassName="TeamsNav-Nav-active">
            <NavLink
              to={`${teamDiv}/${c}`}
              activeClassName="TeamsNav-Nav-active"
            >
              <li>{c}</li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default TemasDivNav;
