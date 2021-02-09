import { SEARCH_USER } from './users.constants'

interface SearchUserAction {
  type: typeof SEARCH_USER
}
export type UserActionTypes = SearchUserAction;

export interface RootState {
  users: []
}
