import { makeStyles } from '@material-ui/styles'

const styles = theme => ({
  textField: {
    margin: '8px 0',
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 10,
    flexGrow: 1,
  },
  icon: {
    color: '#fff',
  },
  btn: {
    marginRight: 16,
  },
  activeBtn: {
    background: '#fff',
    color: theme.palette.primary.main,
  },
})

const useStyles = makeStyles(styles)

export default useStyles
