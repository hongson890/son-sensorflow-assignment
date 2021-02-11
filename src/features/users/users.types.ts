import { SEARCH_USER, SEARCH_USER_SUCCESS } from './users.constants'

export interface SearchUserAction {
  type: typeof SEARCH_USER,
  page: number,
  results: number,
  seed: string
}
export interface SearchUserSuccessAction {
  type: typeof SEARCH_USER_SUCCESS
  payload: any
}
export type UsersActionType = SearchUserAction | SearchUserSuccessAction

export interface UsersState {
  users: {
    userList: any[]
    page: number
    results: number
    seed: string
  }
}
