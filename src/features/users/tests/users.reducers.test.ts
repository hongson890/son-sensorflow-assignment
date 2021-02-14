import * as userAction from '../users.actions';
import { initialState, usersReducers as reducer } from '../users.reducers';
import searchUserResult from './users.mock.json';
import { sortUserList } from '../users.helper';

const users = searchUserResult.results;
const sortedByDefaultUsers = sortUserList(
  users,
  initialState.orderBy,
  initialState.orderDirection,
);

describe('usersReducers', () => {
  it('handles SEARCH_USER action', () => {
    const expectedState = {
      ...initialState,
      page: 1,
      results: 10,
      seed: 'sontest',
      isLoading: true,
    };

    const actualState = reducer(
      initialState,
      userAction.searchUser(1, 10, 'sontest'),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles SEARCH_USER_SUCCESS action', () => {
    const expectedState = {
      ...initialState,
      userList: sortedByDefaultUsers,
      isLoading: false,
      isError: false,
      message: '',
    };

    const actualState = reducer(
      initialState,
      userAction.searchUserSuccess(users),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles SEARCH_USER_ERROR action', () => {
    const expectedState = {
      ...initialState,
      userList: [],
      isLoading: false,
      isError: true,
      message: 'There are some errors when searching users from api',
    };

    const actualState = reducer(
      initialState,
      userAction.searchUserError(
        'There are some errors when searching users from api',
      ),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles SEARCH_USER_CHANGE_ORDER action with order by fullName asc', () => {
    // given searching successfully in advance:
    const previousState = {
      ...initialState,
      userList: users,
    };

    const expectedState = {
      ...initialState,
      orderBy: 'fullName',
      orderDirection: 'asc',
      userList: sortUserList(users, 'fullName', 'asc'),
    };

    const actualState = reducer(
      previousState,
      userAction.changeOrder('fullName', 'asc'),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles SEARCH_USER_CHANGE_ORDER action with order by fullName desc', () => {
    // given searching successfully in advance:
    const previousState = {
      ...initialState,
      userList: users,
    };

    const expectedState = {
      ...initialState,
      orderBy: 'fullName',
      orderDirection: 'desc',
      userList: sortUserList(users, 'fullName', 'desc'),
    };

    const actualState = reducer(
      previousState,
      userAction.changeOrder('fullName', 'desc'),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles SEARCH_USER_CHANGE_ORDER action with order by userName asc', () => {
    // given searching successfully in advance:
    const previousState = {
      ...initialState,
      userList: users,
    };

    const expectedState = {
      ...initialState,
      orderBy: 'userName',
      orderDirection: 'asc',
      userList: sortUserList(users, 'userName', 'asc'),
    };

    const actualState = reducer(
      previousState,
      userAction.changeOrder('userName', 'asc'),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles SEARCH_USER_CHANGE_ORDER action with order by userName desc', () => {
    // given searching successfully in advance:
    const previousState = {
      ...initialState,
      userList: users,
    };

    const expectedState = {
      ...initialState,
      orderBy: 'userName',
      orderDirection: 'desc',
      userList: sortUserList(users, 'userName', 'desc'),
    };

    const actualState = reducer(
      previousState,
      userAction.changeOrder('userName', 'desc'),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles UPDATE_LOADING action', () => {
    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    const actualState = reducer(initialState, userAction.updateLoading(true));

    expect(expectedState).toEqual(actualState);
  });
});
