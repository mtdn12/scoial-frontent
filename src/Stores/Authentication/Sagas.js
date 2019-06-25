import { put, call, takeLatest, all, delay } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { AuthActions, AuthTypes } from 'Stores/Authentication/Actions'
import { AuthService } from 'Services/AuthService'
import { NotificationActions } from '../Notification/Actions'

import { LoadingActions } from '../Loading/Actions'
import apiClient from '../../Services'
import { setToken } from '../../Utils/token'

// Sagas for login and register modal in modal page
function* loginWorker({ values }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    const response = yield call(AuthService.signinRequest, values)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put(AuthActions.loginSuccess(response.data.user))
    yield put(LoadingActions.hideLoadingAction())
    // Set token
    const token = `Bearer ${response.data.token}`
    setToken(token)
    apiClient.headers.Authorization = token
    yield put(NotificationActions.showNotification('Login Success'))
    yield put(AuthActions.clearSigninItem())
    yield put(push('/'))
  } catch (error) {
    yield put(AuthActions.loginFailure())
    yield put(NotificationActions.showNotification(error.message))
    yield put(LoadingActions.hideLoadingAction())
  }
}

function* registerWorker({ values }) {
  try {
    yield put(LoadingActions.showLoadingAction())
    const response = yield call(AuthService.signupRequest, values)
    if (response.data.result === 'fail') {
      throw new Error(response.data.error)
    }
    yield put(AuthActions.registerSuccess())
    yield put(LoadingActions.hideLoadingAction())
    yield put(NotificationActions.showNotification('Register Success'))
    yield put(push('/signin'))
    yield put(
      AuthActions.setSigninItem({
        email: values.email,
        password: values.password,
      })
    )
  } catch (error) {
    console.log(error)
    yield put(AuthActions.registerFailure())
    yield put(NotificationActions.showNotification(error.message))
    yield put(LoadingActions.hideLoadingAction())
  }
}

export default function* watcher() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, loginWorker),
    takeLatest(AuthTypes.REGISTER_REQUEST, registerWorker),
  ])
}
