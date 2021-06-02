import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { storage, persistorConfig } from './store-persistence'
// import authReducer from '../reducers/auth-reducer'

// const authReducerConfig = {
//   key: 'auth',
//   storage: storage,
//   whitelist: ['userAutenticado'],
// }

export const appReducer = combineReducers({
  // auth: persistReducer(authReducerConfig, authReducer),
  // agency: agencyReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    storage.removeItem('persist:root')
    state = undefined
  }

  return appReducer(state, action)
}

export default persistReducer(persistorConfig, rootReducer)
