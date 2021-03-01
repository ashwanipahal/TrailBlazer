import React, { useEffect } from 'react';

const FoodMenuView = (props) => {
  const { foodMenu, getFoodMenu } = props;

  useEffect(() => {
    getFoodMenu();
  }, []);

  return (
    <div className='food-menu-wrapper'>
      <h3>Here is the food menu available in Ground floor cafeteria by Royal Grillz.</h3>
      <img src={foodMenu} />{' '}
    </div>
  );
};

export default FoodMenuView;
