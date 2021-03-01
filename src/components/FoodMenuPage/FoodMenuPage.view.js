import React, { useEffect } from 'react';

const FoodMenuView = (props) => {
  const { foodMenu,getFoodMenu } = props;

  useEffect(()=>{
    getFoodMenu(); 
  },[])

  return (
    <div className='food-menu-wrapper'><img src={foodMenu} /> </div>   
  );
};  

export default FoodMenuView;
