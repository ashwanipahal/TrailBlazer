import CONTACT_PAGE_CONSTANTS from './ContactPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  contactDetails:{},
});

const ContactPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_PAGE_CONSTANTS.SET_CONTACT:
      return state.set('contactDetails', action.payload);
    default:
      return state;
  }
};

export default ContactPageReducer;
