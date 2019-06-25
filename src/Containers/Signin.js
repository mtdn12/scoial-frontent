import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { compose } from 'redux'
import { AuthActions } from 'Stores/Authentication/Actions'
import { AuthSelectors } from '../Stores/Authentication/Selectors'
import { LoadingSelectors } from 'Stores/Loading/Selectors'

import Signin from 'Components/pages/Signin'

const SigninContainer = props => {
  return <Signin {...props} />
}

SigninContainer.propsTypes = {}

const mapStateToProps = state => ({
  signinItem: AuthSelectors.getSigninItem(state),
  isLoadingAction: LoadingSelectors.getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  doSignin: values => dispatch(AuthActions.loginRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(SigninContainer)
