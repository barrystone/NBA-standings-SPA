import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import "./assets/css/all.css";
import NbaHammer from "./components/NbaHammer";
import TeamsCharts from "./components/TeamsCharts";
import TeamsNav from "./components/TeamsNav";
import Teams from "./components/Teams";
import MainHeader from "./components/layout/mainHeader";

import PlayerSlick from "./components/PlayerSlick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./css/nba-hammer.css";
// import "sequencejs/scripts/sequence.min.js";
function App() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetchingApi();
  }, []);
  const api = {
    key: "bc5009f7498a4e8cac246d6fbdd34692",
    base: "https://api.sportsdata.io/v3/nba/scores/json/Standings/2020",
  };
  const fetchingApi = async () => {
    // console.log("app-DidMount");
    const data = await fetch(`${api.base}?key=${api.key}`)
      .then((response) => response.json())
      .then((result) => {
        return result;
        console.log(result);
      });
    setLists(data);
  };

  return (
    <React.Fragment>
      <Router>
        <header>
          <MainHeader />
          <TeamsNav />
        </header>
        <main>
          <Teams lists={lists} />
          {/* <TeamsCharts lists={lists} /> */}
          {/* <NbaHammer /> */}
          {/* <PlayerSlick /> */}
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
