import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const FoodComponent = (props) => {
return (
    <div className="food-menu">
           <div className="food-menu__elements"><img src="images/view-food-menu.png" height="308" width="604" alt="logo" /></div>
    </div>
  );
};

export default FoodComponent;