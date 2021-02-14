import { all } from 'redux-saga/effects'
import { usersSaga } from '../features/users/users.saga'

export default function* rootSaga() {
  yield all([usersSaga()])
}
