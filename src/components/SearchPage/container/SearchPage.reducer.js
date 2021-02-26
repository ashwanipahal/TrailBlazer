import SEARCH_PAGE_CONSTANTS from '../container/SearchPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  mapData: {},
});

const SearchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PAGE_CONSTANTS.SET_SEARCH_DATA:
      return state.set('mapData', action.payload);
    default:
      return state;
  }
};

export default SearchPageReducer;
