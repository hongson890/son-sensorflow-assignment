import { call, put, select, takeEvery } from 'redux-saga/effects'
import { getPage, getResult } from './users.selectors'
import { searchUsers } from '../../services/users.services'
import { searchUserSuccess } from './users.actions'
import { SEARCH_USER } from './users.constants'

function* requestSearchUser() {
  const page = yield select(getPage)
  const result = yield select(getResult)
  const users = yield call(searchUsers, page, result)
  yield put(searchUserSuccess(users))
}

export function* usersSaga() {
  yield takeEvery(SEARCH_USER, requestSearchUser)
}
