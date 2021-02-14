import * as usersAction from '../users.actions'
import {
    SEARCH_USER,
    SEARCH_USER_CHANGE_ORDER,
    SEARCH_USER_SUCCESS, UPDATE_LOADING,
} from '../users.constants'
import searchUserResult from './users.mock.json'

describe('usersAction', () => {
  it('searchUser creates SEARCH_USER action', () => {
    expect(usersAction.searchUser(1, 10, 'sontest')).toEqual({
      type: SEARCH_USER,
      page: 1,
      results: 10,
      seed: 'sontest',
    })
  })

  it('searchUserSuccess creates SEARCH_USER_SUCCESS action', () => {
    expect(
      usersAction.searchUserSuccess(searchUserResult.results)
    ).toEqual({
      type: SEARCH_USER_SUCCESS,
      usersList: searchUserResult.results,
    })
  })

  it('changeOrder creates SEARCH_USER_CHANGE_ORDER action', () => {
    expect(usersAction.changeOrder('userName', 'asc')).toEqual({
      type: SEARCH_USER_CHANGE_ORDER,
      orderBy: 'userName',
      orderDirection: 'asc',
    })
  })

  it('updateLoading creates UPDATE_LOADING action', () => {
        expect(usersAction.updateLoading(true)).toEqual({
            type: UPDATE_LOADING,
            isLoading: true,
        })
  })

})
