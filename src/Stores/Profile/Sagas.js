import { put, call, takeLatest, select, all } from 'redux-saga/effects'
import { ProfileActions, ProfileTypes } from './Actions'
import { NotificationActions } from 'Stores/Notification/Actions'
import { ModalActions } from '../Modal/Actions'
import { LoadingActions } from '../Loading/Actions'
import { push } from 'connected-react-router'
import sagaRegistry from '../Sagas/SagaRegistry'
import { MODULE_NAME } from './InitialState'

function* watcher() {
  yield all([])
}
sagaRegistry.register(MODULE_NAME, watcher)

export default watcher
