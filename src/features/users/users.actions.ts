import { SEARCH_USER, SEARCH_USER_SUCCESS } from './users.constants'
import { UsersActionType } from './users.types'

export const searchUser = (): UsersActionType => ({
  type: SEARCH_USER,
})

export const searchUserSuccess = (users: any[]): UsersActionType => ({
  type: SEARCH_USER_SUCCESS,
  payload: users,
})
