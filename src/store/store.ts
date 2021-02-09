import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { UserReducer } from '../features/users'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  users: UserReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
