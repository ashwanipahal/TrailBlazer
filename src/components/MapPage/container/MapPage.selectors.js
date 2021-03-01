import { MAP_PAGE_REDUCER_KEY } from '../../../constants/reducer.constants';

export const mapData = state => {
  return state[MAP_PAGE_REDUCER_KEY].get("mapData");
};
