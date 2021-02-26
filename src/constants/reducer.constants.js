// My Home Page reducer
export const HOMEPAGE_REDUCER_KEY = 'HomePage';
export const HOMEPAGE_ACTION_PATTERN = '@@HomePage-';

// Search Page
export const SEARCH_PAGE_REDUCER_KEY = 'SearchPage';
export const SEARCH_PAGE_ACTION_PATTERN = '@@SearchPage-';

// Food menu Page
export const FOOD_MENU_PAGE_REDUCER_KEY = 'FoodMenuPage';
export const FOOD_MENU_PAGE_ACTION_PATTERN = '@@FoodMenuPage-';


export const REDUCER_ACTION_MAPPING = {
  [SEARCH_PAGE_REDUCER_KEY]: SEARCH_PAGE_ACTION_PATTERN,
  [FOOD_MENU_PAGE_REDUCER_KEY]: FOOD_MENU_PAGE_ACTION_PATTERN,
};
