import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'auth'

export const INITIAL_STATE = fromJS({
  userData: null,
  authenticationErrorMessage: null,
  authenticationIsLoading: false,
  signinItem: {
    email: '',
    password: '',
  },
  signupItem: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
})
