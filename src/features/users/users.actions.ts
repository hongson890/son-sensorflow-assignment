import { SEARCH_USER, SEARCH_USER_SUCCESS } from './users.constants'
import { BaseAction } from '../../common/base.action'

export const searchUser = (): BaseAction => ({
  type: SEARCH_USER,
  payload: null,
})

export const searchUserSuccess = (users: any[]): BaseAction => ({
  type: SEARCH_USER_SUCCESS,
  payload: users,
})
