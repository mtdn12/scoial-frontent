import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // Login modal
    loginRequest: ['values'],
    loginSuccess: ['user'],
    loginFailure: null,
    // Register modal
    registerRequest: ['values'],
    registerSuccess: null,
    registerFailure: null,
    // log out
    doLogout: null,
    // Set and clear signinItem
    setSigninItem: ['item'],
    clearSigninItem: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const AuthTypes = Types
export const AuthActions = Creators
