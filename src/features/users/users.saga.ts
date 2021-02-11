import { call, put, takeEvery } from 'redux-saga/effects'
import { searchUserSuccess } from './users.actions'
import { SEARCH_USER } from './users.constants'
import { searchUsers } from './users.services'
import { SearchUserAction } from "./users.types";

function* requestSearchUser(payload: SearchUserAction) {
  const users = yield call(
    searchUsers,
    payload.page,
    payload.results,
    payload.seed
  )
  yield put(searchUserSuccess(users))
}

export function* usersSaga() {
  yield takeEvery(SEARCH_USER, requestSearchUser)
}