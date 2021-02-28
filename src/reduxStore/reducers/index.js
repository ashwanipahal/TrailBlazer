import { combineReducers } from 'redux';

import {
  SEARCH_PAGE_REDUCER_KEY,
  FOOD_MENU_PAGE_REDUCER_KEY,
  CONTACT_PAGE_REDUCER_KEY
} from '../../constants/reducer.constants';
import SearchPageReducer from '../../components/SearchPage/container/SearchPage.reducer';
import FoodMenuPageReducer from '../../components/FoodMenuPage/container/FoodMenuPage.reducer';
import ContactPageReducer from '../../components/ContactPage/container/ContactPage.reducer';


export default combineReducers({
  [SEARCH_PAGE_REDUCER_KEY]: SearchPageReducer,
  [FOOD_MENU_PAGE_REDUCER_KEY]: FoodMenuPageReducer,
  [CONTACT_PAGE_REDUCER_KEY]: ContactPageReducer,
});
