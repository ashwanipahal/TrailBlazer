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
        <button onClick={onSubmit}>Today Food Menu</button>
      </div>
    </div>
  );
};

export default FoodMenuLink;
