import { SEARCH_USER } from './users.constants'
import { UserActionTypes } from './users.types'

const initialState: any[] = [];

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SEARCH_USER:
    default:
      return state
  }
}
