import CONTACT_PAGE_CONSTANTS from './ContactPage.constants.js';

export const getContactDataAction = (payload) => {
    return {
      type: CONTACT_PAGE_CONSTANTS.GET_CONTACT,
      payload
    };
  };

export const setContactDataAction = (payload) => {
    return {
      type: CONTACT_PAGE_CONSTANTS.SET_CONTACT,
      payload
    };
  };
