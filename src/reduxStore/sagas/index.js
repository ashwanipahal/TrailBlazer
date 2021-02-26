import { all } from 'redux-saga/effects';
import FoodMenuSaga from '../../components/FoodMenuPage/container/FoodMenuPage.saga'

export default function* rootSaga() {
  yield all([
    FoodMenuSaga()
  ]);
}
