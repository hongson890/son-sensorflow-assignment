import {
  SEARCH_USER,
  SEARCH_USER_CHANGE_ORDER,
  SEARCH_USER_ERROR,
  SEARCH_USER_SUCCESS,
  UPDATE_LOADING,
} from './users.constants'

export interface SearchUserAction {
  type: typeof SEARCH_USER
  page: number
  results: number
  seed: string
}
export interface SearchUserSuccessAction {
  type: typeof SEARCH_USER_SUCCESS
  payload: any
}
export interface SearchUserErrorAction {
  type: typeof SEARCH_USER_ERROR
  payload: any
}
export interface SearchUserChangeOrderAction {
  type: typeof SEARCH_USER_CHANGE_ORDER
  orderBy: string
  orderDirection: string
}
export interface UpdateLoadingAction {
  type: typeof UPDATE_LOADING
  isLoading: boolean
}

export type UsersActionType =
  | SearchUserAction
  | SearchUserSuccessAction
  | SearchUserErrorAction
  | SearchUserChangeOrderAction
  | UpdateLoadingAction

export interface UsersState {
  users: {
    isLoading: boolean
    userList: any[]
    page: number
    results: number
    seed: string
    orderBy: 'fullName'
    orderDirection: 'asc'
  }
}
