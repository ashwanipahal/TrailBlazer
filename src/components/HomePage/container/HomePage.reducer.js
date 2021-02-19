import HOMEPAGE_CONSTANTS from '../HomePage.constants';

const initialState = {
  
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOMEPAGE_CONSTANTS.HOMEPAGE:
      return state.set('error', null);
    default:
      return state;
  }
};

export default HomePageReducer;
