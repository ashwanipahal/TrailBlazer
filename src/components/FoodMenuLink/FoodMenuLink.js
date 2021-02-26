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
      <div className='input-field'>
      <h3>Want to know what's cooking in the pantry Today? Let us know your building number and we will show you today's hot menu.</h3>
      <img src="images/view-food-menu.png" onClick={onSubmit} alt="logo" />
      </div>
    </div>
  );
};

export default FoodMenuLink;
