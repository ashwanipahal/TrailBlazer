import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import MapContainer from '../MapPage/index'
import Search from '../SearchPage/container/SearchPage.container'
import './style.scss';

const Home = ()=> {
    return (
        <Router>
          <Switch>
            <Route path="/map">
              <MapContainer />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
      </Router>
    )
}

export default Home;