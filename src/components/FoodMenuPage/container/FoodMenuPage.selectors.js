import { FOOD_MENU_PAGE_REDUCER_KEY } from '../../../constants/reducer.constants';

export const foodMenuData = state => {
  return state[FOOD_MENU_PAGE_REDUCER_KEY].get("imagePath");
};
