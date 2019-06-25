import { MODULE_NAME } from './InitialState'

const getUserData = state => state[MODULE_NAME].get('userData')

const getSignupItem = state => state[MODULE_NAME].get('signupItem')

const getSigninItem = state => state[MODULE_NAME].get('signinItem')

export const AuthSelectors = {
  getUserData,
  getSignupItem,
  getSigninItem,
}
