import {
  SEARCH_USER,
  SEARCH_USER_CHANGE_ORDER,
  SEARCH_USER_ERROR,
  SEARCH_USER_SUCCESS,
  UPDATE_LOADING,
} from './users.constants'
import { UsersActionType } from './users.types'
import { sortUserList } from './users.helper'

const initialState = {
  isLoading: false,
  userList: [],
  page: 1,
  results: 10,
  seed: 'sontest',
  orderBy: 'fullName',
  orderDirection: 'asc',
}

export default (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        isLoading: true,
        page: action.page,
        results: action.results,
        seed: action.seed,
      }
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: sortUserList(
          action.payload,
          state.orderBy,
          state.orderDirection
        ),
      }
    case SEARCH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case SEARCH_USER_CHANGE_ORDER:
      return {
        ...state,
        orderBy: action.orderBy,
        orderDirection: action.orderDirection,
        isLoading: false,
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
