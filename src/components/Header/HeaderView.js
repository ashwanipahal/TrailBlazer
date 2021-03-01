import React from 'react';
import { createBrowserHistory } from 'history';
import './style.scss';

const HeaderComponent = () => {
  let history = createBrowserHistory();
  const backToHomePage = () => {
    if(window.location.pathname !== '/'){
      history.goBack();
    }
  }
  return (
    <div className='header'>
      <div className='header__elements'>
        <img onClick={backToHomePage} src='images/logo.png' alt='logo' />
      </div>
    </div>
  );
};

export default HeaderComponent;
