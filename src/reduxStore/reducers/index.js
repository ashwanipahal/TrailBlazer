import { combineReducers } from 'redux';

import {
  FOOD_MENU_PAGE_REDUCER_KEY,
  CONTACT_PAGE_REDUCER_KEY,
  MAP_PAGE_REDUCER_KEY
} from '../../constants/reducer.constants';
import FoodMenuPageReducer from '../../components/FoodMenuPage/container/FoodMenuPage.reducer';
import ContactPageReducer from '../../components/ContactPage/container/ContactPage.reducer';
import MapPageReducer from '../../components/MapPage/container/MapPage.reducer';


export default combineReducers({
  [FOOD_MENU_PAGE_REDUCER_KEY]: FoodMenuPageReducer,
  [CONTACT_PAGE_REDUCER_KEY]: ContactPageReducer,
  [MAP_PAGE_REDUCER_KEY]: MapPageReducer,
});
