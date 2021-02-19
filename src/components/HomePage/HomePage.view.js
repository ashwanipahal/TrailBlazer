import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import MapContainer from '../MapPage/MapPage.view'
import './style.scss';

const Home = ()=> {
    return (
        <Router>
          <Switch>
            <Route path="/">
              <MapContainer />
            </Route>
          </Switch>
      </Router>
    )
}

export default Home;