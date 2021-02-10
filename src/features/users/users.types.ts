import { SEARCH_USER, SEARCH_USER_SUCCESS } from './users.constants'

interface SearchUserAction {
  type: typeof SEARCH_USER
}
interface SearchUserSuccessAction {
  type: typeof SEARCH_USER_SUCCESS
  payload: any
}
export type UsersActionType = SearchUserAction | SearchUserSuccessAction

export interface UsersState {
  users: {
    userList: any[]
    page: number
    result: number
  }
}
