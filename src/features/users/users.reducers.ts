import {
  SEARCH_USER,
  SEARCH_USER_CHANGE_ORDER,
  SEARCH_USER_ERROR,
  SEARCH_USER_SUCCESS,
  UPDATE_LOADING,
} from './users.constants'
import { UsersActionType } from './users.types'
import { sortUserList } from './users.helper'

const emptyUserList: any[] = [];
export const initialState = {
  isLoading: false,
  isError: false,
  message: '',
  userList: emptyUserList,
  page: 1,
  results: 10,
  seed: 'sontest',
  orderBy: 'fullName',
  orderDirection: 'asc',
}

export const usersReducers = (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        isLoading: true,
        page: action.page,
        results: action.results,
      }
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        userList: sortUserList(
          action.usersList,
          state.orderBy,
          state.orderDirection
        ),
      }
    case SEARCH_USER_ERROR:
      return {
        ...state,
        userList: [],
        isLoading: false,
        isError: true,
        message: action.message
      }
    case SEARCH_USER_CHANGE_ORDER:
      return {
        ...state,
        orderBy: action.orderBy,
        orderDirection: action.orderDirection,
        userList: sortUserList(
          state.userList,
          action.orderBy,
          action.orderDirection
        ),
      }
    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      return state
  }
}
