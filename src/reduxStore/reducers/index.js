import { combineReducers } from 'redux';



import {
  HOMEPAGE_REDUCER_KEY
} from '../../constants/reducer.constants';
import HomePageReducer from '../../components/HomePage/container/HomePage.reducer';


export default combineReducers({
  [HOMEPAGE_REDUCER_KEY]: HomePageReducer,
});
