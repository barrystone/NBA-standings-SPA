import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TeamsNav from "./TeamsNav";
import TeamsDiv from "./TeamsDiv";
import TeamsCharts from "./TeamsCharts";
import PlayerSlick from "./PlayerSlick";

import GreekFreakImg from "./Teams-Components/greekFreakImg";

const Teams = (props) => {
  const { lists } = props;

  const divsData = [
    { Atlantic: ["Raptors", "Celtics", "76ers", "Nets", "Knicks"] },
    { Central: ["Bucks", "Pacers", "Bulls", "Pistons", "Cavaliers"] },
    { Southeast: ["Heat", "Magic", "Wizards", "Hornets", "Hawks"] },
    {
      Northwest: [
        "Nuggets",
        "Jazz",
        "Thunder",
        "Trail Blazers",
        "Timberwolves",
      ],
    },
    { Pacific: ["Lakers", "Clippers", "Kings", "Suns", "Warriors"] },
    { Southwest: ["Rockets", "Mavericks", "Grizzlies", "Pelicans", "Spurs"] },
  ];
  // console.log(divsData);

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "yellow" }}>
        <Switch>
          <Route path="/" exact>
            <Home lists={lists} />
          </Route>
          <Route path="/:TeamDiv">
            <TeamsDiv lists={lists} divsData={divsData} />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};

const Home = (props) => {
  const { lists } = props;

  return (
    <div>
      <h1>Home</h1>
      <div>
        <GreekFreakImg />
      </div>
      <TeamsCharts lists={lists} />
      <PlayerSlick />
    </div>
  );
};

export default Teams;
