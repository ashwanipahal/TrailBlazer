import { call, put, takeLatest, select } from 'redux-saga/effects';
import CONTACT_PAGE_CONSTANTS from './ContactPage.constants.js';
import { fetchContacts } from '../../../services/Contact';

function* fetchContactApi(action) {
  try {
    let contactDetails = yield call(fetchContacts, action.payload);
    yield put({ type: CONTACT_PAGE_CONSTANTS.SET_CONTACT, payload: contactDetails });
  } catch (e) {
    console.log('error occurred', e);
  }
}

function* ContactPageSaga() {
  yield takeLatest(CONTACT_PAGE_CONSTANTS.GET_CONTACT, fetchContactApi);
}

export default ContactPageSaga;
