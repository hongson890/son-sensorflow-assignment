import { all, takeEvery, call, put } from 'redux-saga/effects'
import { SEARCH_USER } from '../features/users/users.constants'
import { searchUsers } from '../services/users.services'
import { searchUserSuccess } from '../features/users/users.actions'

function* requestSearchUser() {
  const users = yield call(searchUsers)
  yield put(searchUserSuccess(users))
}

function* helloSaga() {
  yield takeEvery(SEARCH_USER, requestSearchUser)
}

export default function* rootSaga() {
  yield all([helloSaga()])
}
