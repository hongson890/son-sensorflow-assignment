import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { requestSearchUser } from '../users.saga';
import { UsersServices } from '../../../services/users.services';
import searchUserResult from './users.mock.json';
import { searchUserSuccess } from '../users.actions';
import { SearchUserAction } from '../users.types';

const payload: SearchUserAction = {
  type: 'SEARCH_USER',
  page: 1,
  results: 10,
  seed: 'sontest',
};
describe('with redux-saga-testing', () => {
  const it = sagaHelper(requestSearchUser(payload));

  it('should have called fetchUsersFromAPI first', (result) => {
    expect(result).toEqual(
      call(
        UsersServices.fetchUsersFromAPI,
        payload.page,
        payload.results,
        payload.seed,
      ),
    );
    return searchUserResult.results;
  });

  it('and then trigger an action with the transformed data we got from the API', (result) => {
    expect(result).toEqual(put(searchUserSuccess(searchUserResult.results)));
  });
});
