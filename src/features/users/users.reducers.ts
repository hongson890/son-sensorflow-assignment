import { SEARCH_USER_SUCCESS } from './users.constants'
import { UsersActionType } from './users.types'

const initialState = {
  userList: [],
  page: 1,
  result: 100,
}

export default (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        userList: action.payload,
      }
    default:
      return state
  }
}
