import { UsersState } from './users.types'

export const getUsers = (state: UsersState) => state.users.userList
export const getPage = (state: UsersState) => state.users.page
export const getResults = (state: UsersState) => state.users.results
export const getSeed = (state: UsersState) => state.users.seed
export const isLoading = (state: UsersState) => state.users.isLoading
export const getOrderBy = (state: UsersState) => state.users.orderBy
export const getOrderDirection = (state: UsersState) =>
  state.users.orderDirection
