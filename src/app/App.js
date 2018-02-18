import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import withRoot from '../withRoot'
import classes from './app.scss'

class App extends Component {
  state = {
    response: '',
    open: false
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleClick = () => {
    this.setState({
      open: true
    })
  }

  componentDidMount () {
    this.callApi()
      .then(res => this.setState({response: res.message}))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/hello')
    const body = await response.json()

    if (response.status !== 200) throw Error('API not connected')

    return body
  }

  render () {
    const {open} = this.state

    return (
      <div className={classes.container}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>
          Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
        <Button variant="raised" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    )
  }
}

export default withRoot(App)
