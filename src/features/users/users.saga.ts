import { call, put, takeEvery } from 'redux-saga/effects';
import { searchUserSuccess } from './users.actions';
import { SEARCH_USER } from './users.constants';
import { UsersServices } from '../../services/users.services';
import { SearchUserAction } from './users.types';

export function* requestSearchUser(payload: SearchUserAction) {
  const users = yield call(
    UsersServices.fetchUsersFromAPI,
    payload.page,
    payload.results,
    payload.seed,
  );
  yield put(searchUserSuccess(users));
}

export function* usersSaga() {
  yield takeEvery(SEARCH_USER, requestSearchUser);
}
