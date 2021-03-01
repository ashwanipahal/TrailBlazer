import { call, put, takeLatest } from 'redux-saga/effects';
import FOOD_MENU_PAGE_CONSTANTS from './FoodMenuPage.constants.js';
import { fetchMenu } from '../../../services/FoodMenu'

function* fetchFoodMenu() {
   try {
      let image = yield call(fetchMenu);
      yield put({type: FOOD_MENU_PAGE_CONSTANTS.SET_FOOD_MENU, payload: image});
   } catch (e) {
      console.log('error occurred',e);
   }
}

function* FoodMenuPageSaga() {
  yield takeLatest(FOOD_MENU_PAGE_CONSTANTS.GET_FOOD_MENU, fetchFoodMenu);
}

export default FoodMenuPageSaga;