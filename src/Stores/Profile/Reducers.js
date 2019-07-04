import { fromJS } from 'immutable'

import { INITIAL_STATE, MODULE_NAME } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ProfileTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'

// Set item
const setItem = (state, { item }) => state.set('item', fromJS(item))

const reducer = createReducer(INITIAL_STATE, {
  [ProfileTypes.GET_ITEM_SUCCESS]: setItem,
})

reducerRegistry.register(MODULE_NAME, reducer)

export default reducer
