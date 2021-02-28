import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const FoodMenuLink = (props) => {
  const { searchFoodMenu } = props;
  let history = useHistory();
  const onSubmit = () => {
      history.push('/food-menu');
  };
  return (
    <div className='food-menu-link'>
    <div className='row'>
      <div className='input-field col-lg-12 col-md-12'>
      <div className='row'>
        <h3 className='col-lg-8 col-md-12'>Want to know what's cooking in the pantry Today? Let us know your building number and we will show you today's hot menu.</h3>
        <img className='col-lg-4 col-md-12' src="images/view-food-menu.png" onClick={onSubmit} alt="logo" />
      </div>
      </div>
    </div>
    </div>
  );
};

export default FoodMenuLink;
