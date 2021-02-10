import { SEARCH_USER_SUCCESS } from './users.constants'

const initialState = {}

export default (state = initialState, action: any) => {
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
