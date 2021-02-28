import { all } from 'redux-saga/effects';
import FoodMenuSaga from '../../components/FoodMenuPage/container/FoodMenuPage.saga'
import ContactSaga from '../../components/ContactPage/container/ContactPage.saga'

export default function* rootSaga() {
  yield all([
    FoodMenuSaga(),
    ContactSaga(),
  ]);
}
