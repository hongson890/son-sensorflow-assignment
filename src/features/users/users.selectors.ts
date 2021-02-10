import { UsersState } from './users.types'

export const getUsers = (state: UsersState) => state.users.userList
export const getPage = (state: UsersState) => state.users.page
export const getResult = (state: UsersState) => state.users.result
