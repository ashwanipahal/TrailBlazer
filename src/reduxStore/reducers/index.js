import { combineReducers } from 'redux';

import {
  SEARCH_PAGE_REDUCER_KEY
} from '../../constants/reducer.constants';
import SearchPageReducer from '../../components/SearchPage/container/SearchPage.reducer';


export default combineReducers({
  [SEARCH_PAGE_REDUCER_KEY]: SearchPageReducer,
});
