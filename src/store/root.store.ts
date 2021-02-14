import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga'
import rootReducer from "./root.reducers";


const logger = (createLogger as any)()
const dev = process.env.NODE_ENV === 'development'
const sagaMiddleware = createSagaMiddleware()
let middleware = dev
  ? applyMiddleware(logger, sagaMiddleware)
  : applyMiddleware(sagaMiddleware)
if (dev) {
  middleware = composeWithDevTools(middleware)
}

const rootStore = createStore(rootReducer, middleware)

sagaMiddleware.run(rootSaga)

export default rootStore
