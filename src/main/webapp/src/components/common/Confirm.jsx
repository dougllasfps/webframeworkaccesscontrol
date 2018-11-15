import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class Confirm extends React.Component {
  render() {
    return (
        <Dialog
          open={this.props.visible}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {this.props.header ? this.props.header : 'Confirmação'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                {this.props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained"  onClick={this.props.onConfirm} color="primary">
              Confirmar
            </Button>
            <Button variant="contained"  onClick={this.props.onCancel} color="secondary" conta>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}
