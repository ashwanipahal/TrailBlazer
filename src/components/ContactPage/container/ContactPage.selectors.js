import { CONTACT_PAGE_REDUCER_KEY } from '../../../constants/reducer.constants';

export const contactData = state => {
  return state[CONTACT_PAGE_REDUCER_KEY].get("contactDetails");
};
