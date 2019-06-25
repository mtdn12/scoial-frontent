import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'
import { fromJS } from 'immutable'

// Log out
export const doLogout = (state = INITIAL_STATE) => INITIAL_STATE
// Set and clear signin Item
const setSigninItem = (state, { item }) => state.set('signinItem', fromJS(item))
const clearSigninItem = state =>
  state.set(
    'signinItem',
    fromJS({
      name: '',
      email: '',
    })
  )

const setUserData = (state, { user }) => state.set('userData', fromJS(user))

const reducer = createReducer(INITIAL_STATE, {
  // do log out
  [AuthTypes.DO_LOGOUT]: doLogout,
  [AuthTypes.LOGIN_SUCCESS]: setUserData,
  // Set and clear signinItem
  [AuthTypes.SET_SIGNIN_ITEM]: setSigninItem,
  [AuthTypes.CLEAR_SIGNIN_ITEM]: clearSigninItem,
})

export default reducer
