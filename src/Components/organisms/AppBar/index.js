import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu as MuiMenu,
  Button,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { AccountCircle } from '@material-ui/icons'
import PropTypes from 'prop-types'
import useStyles from './styles'
import { showTitle } from 'Utils/showTitle'

const RefLink = React.forwardRef((props, ref) => <NavLink {...props} />)

function NavBar({ match, userData, handleSignOut }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const doLogout = () => {
    handleClose()
    handleSignOut()
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="subtitle1"
          color="primary"
          className={classes.title}>
          {showTitle(match.path)}
        </Typography>
        {userData && (
          <div>
            <IconButton
              aria-haspopup="true"
              aria-label="Account of current user"
              onClick={handleMenu}
              color="inherit"
              aria-controls="show-profile">
              <AccountCircle />
            </IconButton>
            <MuiMenu
              id="show-profile"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={doLogout}>Logout</MenuItem>
            </MuiMenu>
          </div>
        )}
        {!userData && (
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            activeClassName={classes.activeBtn}
            component={RefLink}
            to="/signin">
            Signin
          </Button>
        )}
        {!userData && (
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            activeClassName={classes.activeBtn}
            component={RefLink}
            to="/signup">
            Signup
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  match: PropTypes.object,
  userData: PropTypes.object,
  handleSignOut: PropTypes.func,
}

export default NavBar
