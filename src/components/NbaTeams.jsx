import React, { Component } from "react";
import NbaTeamsNav from "./NbaTeamsNav";
// import Raptors from "./TeamsPage/Raptors";
// import Rockets from "./TeamsPage/Rockets";
// import Celtics from "./TeamsPage/Celtics";
import Atlantic from "./TeamsDivision/Atlantic";
import Central from "./TeamsDivision/Central";
import Southeast from "./TeamsDivision/Southeast";
import Pacific from "./TeamsDivision/Pacific";
import Southwest from "./TeamsDivision/Southwest";
import Northwest from "./TeamsDivision/Northwest";
import Nort from "./TeamsDivision/Nort";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class NbaTeams extends Component {
  render() {
    return (
      <Router>
        <div style={{ backgroundColor: "yellow" }}>
          <NbaTeamsNav />
          <Switch>
            <Route path="/" exact component={this.Home} />
            <Route path="/Atlantic" component={Atlantic} />
            <Route path="/Central" component={Central} />
            <Route path="/Southeast" component={Southeast} />
            <Route path="/Pacific" component={Pacific} />
            <Route path="/Southwest" component={Southwest} />
            <Route exact path="/Northwest" component={Northwest} />
            {/* <Route path="/Northwest/Nort" component={Nort} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
  Home() {
    return <div>Home</div>;
  }
}

export default NbaTeams;
