import { call, put, takeLatest, select } from 'redux-saga/effects';
import MAP_PAGE_CONSTANTS from './MapPage.constants.js';
import { fetchContacts } from '../../../services/Contact';

function* fetchMapDataApi(action) {
  try {
    let contactDetails = yield call(fetchContacts, action.payload);
    yield put({ type: MAP_PAGE_CONSTANTS.SET_MAP_DATA, payload: contactDetails });
  } catch (e) {
    console.log('error occurred', e);
  }
}

function* MapPageSaga() {
  yield takeLatest(MAP_PAGE_CONSTANTS.GET_MAP_DATA, fetchMapDataApi);
}

export default MapPageSaga;
