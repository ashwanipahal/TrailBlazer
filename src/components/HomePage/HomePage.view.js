import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MapContainer from '../MapPage/index';
import FoodMenuLink from '../FoodMenuLink/FoodMenuLink';
import FoodMenuPage from '../FoodMenuPage';
import ContactPage from '../ContactPage';
import Search from '../SearchPage/container/SearchPage.container';
import HeaderComponent from '../Header/HeaderView';
import FooterComponent from '../Footer/FooterView';
import './style.scss';

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <Router>
        <Switch>
          <Route path='/contacts'>
            <ContactPage />
          </Route>
          <Route path='/map'>
            <MapContainer />
          </Route>
          <Route path='/food-menu'>
            <FoodMenuPage />
          </Route>
          <Route path='/'>
            <Search />
            <FoodMenuLink />
          </Route>
        </Switch>
      </Router>
      <FooterComponent />
    </>
  );
};

export default Home;
