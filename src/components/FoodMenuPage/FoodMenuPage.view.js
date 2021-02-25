import React, { useEffect } from 'react';

const FoodMenuView = (props) => {
  const { foodMenu,getFoodMenu } = props;

  useEffect(()=>{
    getFoodMenu(); 
  },[])

  return (
    <img src={foodMenu} />    
  );
};  

export default FoodMenuView;
