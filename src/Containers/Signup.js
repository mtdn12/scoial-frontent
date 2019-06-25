import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { compose } from 'redux'
import { AuthActions } from 'Stores/Authentication/Actions'
import { AuthSelectors } from '../Stores/Authentication/Selectors'
import { LoadingSelectors } from 'Stores/Loading/Selectors'

import Signup from 'Components/pages/Signup'

const SignupContainer = props => {
  return <Signup {...props} />
}

SignupContainer.propsTypes = {}

const mapStateToProps = state => ({
  signupItem: AuthSelectors.getSignupItem(state),
  isLoadingAction: LoadingSelectors.getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  doSignup: values => dispatch(AuthActions.registerRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(SignupContainer)
