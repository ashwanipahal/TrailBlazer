import { SEARCH_PAGE_REDUCER_KEY } from '../../../constants/reducer.constants';

export const searchData = state => {
  return state[SEARCH_PAGE_REDUCER_KEY].get("searchedSeat");
};


export const activeSearch = state => {
  return state[SEARCH_PAGE_REDUCER_KEY].get("activeSearch");
};
