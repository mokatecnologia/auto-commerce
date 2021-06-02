import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { persistStore } from 'redux-persist'

import persistReducer, { appReducer } from './store-reducers'
import { storeMiddleware } from './store-middleware'
// import { setAuthToken } from '../../utils'

const initialState = {}

const makeStore = ({ isServer }) => {
  // server side redux store
  if (isServer) return createStore(appReducer, storeMiddleware)

  // client side redux persisted store
  const store = createStore(persistReducer, initialState, storeMiddleware)

  store.__persistor = persistStore(store)

  let currentState = store.getState()
  store.subscribe(() => {
    let previousState = currentState
    currentState = store.getState()

    // if (previousState.auth.token !== currentState.auth.token) {
    //   const token = currentState.auth.token
    //   setAuthToken(token)
    // }
  })

  return store
}

export const ReduxWrapper = createWrapper(makeStore).withRedux
