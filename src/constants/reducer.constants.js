// My Home Page reducer
export const HOMEPAGE_REDUCER_KEY = 'HomePage';
export const HOMEPAGE_ACTION_PATTERN = '@@HomePage-';


// Food menu Page
export const FOOD_MENU_PAGE_REDUCER_KEY = 'FoodMenuPage';
export const FOOD_MENU_PAGE_ACTION_PATTERN = '@@FoodMenuPage-';

// Contact Page
export const CONTACT_PAGE_REDUCER_KEY = 'ContactPage';
export const CONTACT_PAGE_ACTION_PATTERN = '@@ContactPage-';

// Map Page
export const MAP_PAGE_REDUCER_KEY = 'MapPage';
export const MAP_PAGE_ACTION_PATTERN = '@@MapPage-';


export const REDUCER_ACTION_MAPPING = {
  [FOOD_MENU_PAGE_REDUCER_KEY]: FOOD_MENU_PAGE_ACTION_PATTERN,
  [CONTACT_PAGE_REDUCER_KEY]: CONTACT_PAGE_ACTION_PATTERN,
  [MAP_PAGE_REDUCER_KEY]: MAP_PAGE_ACTION_PATTERN,
};
