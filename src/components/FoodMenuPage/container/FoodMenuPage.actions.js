import FOOD_MENU_PAGE_CONSTANTS from './FoodMenuPage.constants.js';

export const getFoodDataAction = (payload) => {
    return {
      type: FOOD_MENU_PAGE_CONSTANTS.GET_FOOD_MENU,
      payload
    };
  };

export const setFoodDataAction = (payload) => {
    return {
      type: FOOD_MENU_PAGE_CONSTANTS.SET_FOOD_MENU,
      payload
    };
  };
