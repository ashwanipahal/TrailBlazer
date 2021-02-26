import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const HeaderComponent = (props) => {
return (
    <div className="header">
           <div className="header__elements"><img src="images/logo.png" alt="logo" /></div>
    </div>
  );
};

export default HeaderComponent;
