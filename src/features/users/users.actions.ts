import {
  SEARCH_USER,
  SEARCH_USER_CHANGE_ORDER,
  SEARCH_USER_SUCCESS,
  UPDATE_LOADING,
} from './users.constants'
import { UsersActionType } from './users.types'

export const searchUser = (
  page: number,
  results: number,
  seed: string
): UsersActionType => ({
  type: SEARCH_USER,
  page,
  results,
  seed,
})

export const searchUserSuccess = (users: any[]): UsersActionType => ({
  type: SEARCH_USER_SUCCESS,
  payload: users,
})

export const changeOrder = (
  orderBy: string,
  orderDirection: string
): UsersActionType => ({
  type: SEARCH_USER_CHANGE_ORDER,
  orderBy,
  orderDirection,
})

export const updateLoading = (isLoading: boolean): UsersActionType => ({
  type: UPDATE_LOADING,
  isLoading,
})
