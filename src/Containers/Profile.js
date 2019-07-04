import React, { useEffect } from 'react'
import 'Stores/Profile/Reducers'
import 'Stores/Profile/Sagas'
import { connect } from 'react-redux'
// import { compose } from 'redux'
import Profile from 'Components/pages/Profile'
import { setTitle, clearTitle } from 'Utils/titlePage'

const ProfileContainer = ({ ...props }) => {
  // Effect set title page
  useEffect(() => {
    setTitle('Social App - Profile')
    return () => clearTitle()
  })
  return <Profile {...props} />
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withConnect(ProfileContainer)
