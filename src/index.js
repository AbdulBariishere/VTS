import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import LoginContainer from "./Container/LoginContainer";
import MapContainer from "./Container/MapContainer";
import Tripsummary from "./Container/Tripsummary";
import AllusersContainer from "./Container/AllusersContainer";
import LogoutContainer from "./Container/LogoutContainer";


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/tracking" component={MapContainer} />
        <Route exact path="/tripsummary" component={Tripsummary} />
        <Route exact path="/allusers" component={AllusersContainer} />
        <Route exact path="/logout" component={LogoutContainer} />

      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
