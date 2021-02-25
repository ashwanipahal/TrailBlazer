import FOOD_MENU_PAGE_CONSTANTS from './FoodMenuPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  imagePath:"",
});

const FoodMenuPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOOD_MENU_PAGE_CONSTANTS.SET_FOOD_MENU:
      return state.set('imagePath', action.payload);
    default:
      return state;
  }
};

export default FoodMenuPageReducer;
