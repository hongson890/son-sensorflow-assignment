import { UsersState } from './users.types'

export const getUsers = (state: UsersState) => state.users.userList
export const getPage = (state: UsersState) => state.users.page
export const getResults = (state: UsersState) => state.users.results
export const getSeed = (state: UsersState) => state.users.seed
