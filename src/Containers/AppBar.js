import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import AppBar from 'Components/organisms/AppBar'
import { AuthActions } from 'Stores/Authentication/Actions'
import { AuthSelectors } from 'Stores/Authentication/Selectors'

const AppBarContainer = ({ ...props }) => {
  return <AppBar {...props} />
}

const mapStateToProps = state => ({
  userData: AuthSelectors.getUserData(state),
})

const mapDispatchToProps = dispatch => ({
  handleSignOut: () => dispatch(AuthActions.doLogout()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withRouter,
  withConnect
)(AppBarContainer)
