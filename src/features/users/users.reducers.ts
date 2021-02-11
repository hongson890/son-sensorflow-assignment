import { SEARCH_USER, SEARCH_USER_SUCCESS } from './users.constants'
import { UsersActionType } from './users.types'

const initialState = {
  userList: [],
  page: 1,
  results: 10,
  seed: 'sontest'
}

export default (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        page: action.page,
        results: action.results,
        seed: action.seed
      }
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        userList: action.payload,
      }
    default:
      return state
  }
}
