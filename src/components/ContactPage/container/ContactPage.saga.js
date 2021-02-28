import { call, put, takeLatest, select } from 'redux-saga/effects';
import CONTACT_PAGE_CONSTANTS from './ContactPage.constants.js';
import { activeSearch } from '../../SearchPage/container/SearchPage.selectors';
import { fetchContacts } from '../../../services/Contact';

function* fetchContactApi(action) {
  try {
    const param = yield select(activeSearch);
    let contactDetails = yield call(fetchContacts, param);
    yield put({ type: CONTACT_PAGE_CONSTANTS.SET_CONTACT, payload: contactDetails });
  } catch (e) {
    console.log('error occurred', e);
  }
}

function* ContactPageSaga() {
  yield takeLatest(CONTACT_PAGE_CONSTANTS.GET_CONTACT, fetchContactApi);
}

export default ContactPageSaga;
