import SEARCH_PAGE_CONSTANTS from '../container/SearchPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  mapData: { position: [] },
});

const SearchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PAGE_CONSTANTS.SET_SEARCH_DATA:
      return state.setIn(['mapData', 'position'], action.payload);
    default:
      return state;
  }
};

export default SearchPageReducer;
