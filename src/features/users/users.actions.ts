import { SEARCH_USER, SEARCH_USER_SUCCESS } from './users.constants'
import { UsersActionType } from './users.types'

export const searchUser = (page: number, results: number, seed: string): UsersActionType => ({
  type: SEARCH_USER,
  page, results, seed
})

export const searchUserSuccess = (users: any[]): UsersActionType => ({
  type: SEARCH_USER_SUCCESS,
  payload: users,
})
