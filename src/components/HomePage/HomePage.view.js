import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import MapContainer from '../MapPage/index'
import Search from '../SearchPage/container/SearchPage.container'
import HeaderComponent from '../Header/HeaderView'
import FooterComponent from '../Footer/FooterView'
import FoodComponent from '../FoodMenu/FoodMenuView'
import './style.scss';

const Home = ()=> {
    return (
        <Router>
          <Switch>
            <Route path="/map">
              <MapContainer />
            </Route>
            <Route path="/">
              <HeaderComponent />
              <Search />
              <FoodComponent />
              <FooterComponent />
            </Route>
          </Switch>
      </Router>
    )
}

export default Home;