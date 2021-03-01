import MAP_PAGE_CONSTANTS from './MapPage.constants.js';

export const getMapDataAction = (payload) => {
    return {
      type: MAP_PAGE_CONSTANTS.GET_MAP_DATA,
      payload
    };
  };

export const setMapDataAction = (payload) => {
    return {
      type: MAP_PAGE_CONSTANTS.SET_MAP_DATA,
      payload
    };
  };
