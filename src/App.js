import React, { Component } from "react";
import "./App.css";
import "./assets/css/all.css";
import NbaHammer from "./components/NbaHammer";
import TeamsCharts from "./components/TeamsCharts";
import NbaTeams from "./components/NbaTeams";
// import "./css/nba-hammer.css";
// import "sequencejs/scripts/sequence.min.js";
class App extends Component {
  state = {
    album: "",
    lists: []
  };
  api = {
    key: "bc5009f7498a4e8cac246d6fbdd34692",
    base: "https://api.sportsdata.io/v3/nba/scores/json/Standings/2020"
  };
  componentWillMount() {
    console.log("app-WillMount");
  }
  componentDidMount = async () => {
    console.log("app-DidMount");
    const data = await fetch(`${this.api.base}?key=${this.api.key}`)
      .then(response => response.json())
      .then(result => {
        return result;
        console.log(result);
      });
    this.setState({
      lists: data
    });
    console.log(this.state.lists);
  };
  render() {
    console.log("app-Render");
    return (
      <React.Fragment>
        <header>
          <NbaTeams />
        </header>
        {/* <header className="App-header"></header> */}
        <main>
          <TeamsCharts lists={this.state.lists} />
          <NbaHammer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
