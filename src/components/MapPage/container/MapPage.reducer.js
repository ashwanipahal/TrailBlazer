import MAP_PAGE_CONSTANTS from './MapPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  mapData:{},
});

const MapPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_PAGE_CONSTANTS.SET_MAP_DATA:
      return state.set('mapData', action.payload);
    default:
      return state;
  }
};

export default MapPageReducer;
