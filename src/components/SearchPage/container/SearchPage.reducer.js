import SEARCH_PAGE_CONSTANTS from '../container/SearchPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  activeSearch:"",
  mapData: {
    "Himalayan":[0,20],
    "G-10-201":[0,0],
    "Aravalli":[23,20],
    "G-10-202":[10,10],
  },
  transport:{
    "Cab Transport":123456789,
    "Private cab":123456789,
  },
  it:{
    "Software support":1234567890,
    "Hardware support":12334456
  },
});

const SearchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PAGE_CONSTANTS.SET_SEARCH_DATA:
      return state.set('mapData', action.payload);
    case SEARCH_PAGE_CONSTANTS.SET_ACTIVE_SEARCH:
      return state.set('activeSearch', action.payload);
    default:
      return state;
  }
};

export default SearchPageReducer;
