import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    getItemRequest: ['id'],
    getItemSuccess: ['item'],
    getItemFailure: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const ProfileTypes = Types
export const ProfileActions = Creators
